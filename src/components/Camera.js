import React, { useEffect, useState } from "react";
import { StyleSheet, TouchableOpacity, Image, View } from "react-native";
import { useCameraDevices, Camera } from "react-native-vision-camera";
import requestCameraPermission from "../utils/cameraPermission";

const CameraScreen = () => {
  const [cameraPermission, setCameraPermission] = useState("");

  useEffect(() => {
    const result = requestCameraPermission();
    setCameraPermission(result);
  }, []);

  const cameraRef = React.useRef();
  const devices = useCameraDevices();
  const device = devices.back;

  const handleTouchTakePhoto = async () => {
    try {
      const photo = await cameraRef.current.takePhoto({
        flash: "off",
      });
    } catch (err) {
      console.log(err);
    }
  };

  if (cameraPermission._j === "granted") {
    return (
      <>
        <Camera
          ref={cameraRef}
          style={styles.absoluteFill}
          device={device}
          isActive={true}
          photo={true}
        />
        <View style={styles.shutter}>
          <TouchableOpacity onPress={handleTouchTakePhoto}>
            <Image
              style={styles.image}
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy-golqpOi-dMEpEn7Pn4nOaLUnNMzYwwC2g&usqp=CAU",
              }}
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
    backgroundColor: "#F6F6F6",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 60,
    height: 60,
  },
  load: {
    flex: 1,
  },
});

export default CameraScreen;
