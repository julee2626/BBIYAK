import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { StyleSheet, TouchableOpacity, Image, View, Alert } from "react-native";
import { useCameraDevices, Camera } from "react-native-vision-camera";
import TextRecognition from "react-native-text-recognition";

import requestCameraPermission from "../utils/cameraPermission";
import { searchDrugInfo } from "../features";
import { BLACK } from "../constants/styles";
import {
  ERROR_MESSAGE_CAMERA_PERMISSION,
  ERROR_MESSAGE_TAKE_PHOTO,
  ERROR_MESSAGE_TEXT_RECOGNITION,
} from "../constants/messages";

const CameraScreen = ({ navigation }) => {
  const [cameraPermission, setCameraPermission] = useState("");
  const [image, setImage] = useState(null);
  const dispatch = useDispatch();

  const cameraRef = React.useRef();
  const devices = useCameraDevices();
  const device = devices.back;

  useEffect(() => {
    (async () => {
      try {
        const result = await requestCameraPermission();
        setCameraPermission(result);
      } catch (err) {
        Alert.alert(ERROR_MESSAGE_CAMERA_PERMISSION);
      }
    })();
  }, []);

  useEffect(() => {
    if (image) {
      (async () => {
        try {
          const result = await TextRecognition.recognize(image.path);

          if (!result.length) {
            Alert.alert("글씨를 인식하지 못했습니다.");
            return;
          }

          if (result.length) {
            const searchInfo = {
              identificationLetter: result[0],
              formulation: "",
              shape: "",
              color: "",
              name: "",
            };

            dispatch(searchDrugInfo(searchInfo));
            navigation.navigate("DrugInfo");
          }
        } catch (err) {
          Alert.alert(ERROR_MESSAGE_TEXT_RECOGNITION);
        }
      })();
    }
  }, [dispatch, image, navigation]);

  const handleTouchTakePhoto = async () => {
    try {
      const photo = await cameraRef.current.takePhoto({
        flash: "off",
      });

      setImage(photo);
    } catch (err) {
      Alert.alert(ERROR_MESSAGE_TAKE_PHOTO);
    }
  };

  if (cameraPermission === "granted" && device != null) {
    return (
      <>
        <Camera
          ref={cameraRef}
          style={styles.absoluteFill}
          device={device}
          isActive={true}
          photo={true}
          orientation="portrait"
        />
        <View style={styles.shutter}>
          <TouchableOpacity onPress={handleTouchTakePhoto}>
            <Image
              style={styles.shutterImage}
              source={require("../assets/images/camera.png")}
            />
          </TouchableOpacity>
        </View>
      </>
    );
  }

  return <View style={styles.load} />;
};

const styles = StyleSheet.create({
  absoluteFill: {
    width: "100%",
    height: "90%",
    alignContent: "center",
  },
  shutter: {
    height: "10%",
    backgroundColor: BLACK,
    alignItems: "center",
    justifyContent: "center",
  },
  shutterImage: {
    width: 60,
    height: 60,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  load: {
    flex: 1,
  },
});

export default CameraScreen;
