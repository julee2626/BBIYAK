import React, { useEffect, useState } from "react";
import { StyleSheet, TouchableOpacity, Image, View } from "react-native";
import { useCameraDevices, Camera } from "react-native-vision-camera";
import TextRecognition from "react-native-text-recognition";
import { useDispatch } from "react-redux";

import requestCameraPermission from "../utils/cameraPermission";
import { searchDrugInfo } from "../features";
import { BLACK } from "../constants/styles";

const CameraScreen = ({ navigation }) => {
  const [cameraPermission, setCameraPermission] = useState("");
  const [image, setImage] = useState(null);
  const [ocrTextList, setOcrTextList] = useState([]);
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
        console.warn(err);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      if (image) {
        try {
          const result = await TextRecognition.recognize(image.path);
          setOcrTextList(result);
        } catch (err) {
          console.warn(err);
        }
      }
    })();
  }, [image]);

  useEffect(() => {
    if (ocrTextList.length) {
      const searchInfo = {
        identificationLetter: ocrTextList[0],
        formulation: "",
        shape: "",
        color: "",
        name: "",
      };

      dispatch(searchDrugInfo(searchInfo));
      navigation.navigate("DrugInfo");
    }
  }, [ocrTextList]);

  const handleTouchTakePhoto = async () => {
    try {
      const photo = await cameraRef.current.takePhoto({
        flash: "off",
      });

      setImage(photo);
    } catch (err) {
      console.log(err);
    }
  };

  if (cameraPermission === "granted" && device != null) {
    return (
      <>
        {image ? (
          <View style={styles.image}>
            <Image
              style={styles.image}
              source={{
                uri: `file://${image.path}`,
              }}
            />
          </View>
        ) : (
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
        )}
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
