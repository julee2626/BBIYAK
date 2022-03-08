import { PermissionsAndroid, Alert } from "react-native";
import { ERROR_MESSAGE_CAMERA_PERMISSION } from "../constants/messages";

const requestCameraPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
      {
        title: "BBIYAK 카메라 사용 동의",
        message:
          "BBIYAK으로 약의 사진을 찍기 위해서는 카메라 사용에 대한 동의가 필요합니다.",
        buttonNeutral: "나중에",
        buttonNegative: "취소",
        buttonPositive: "확인",
      },
    );

    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      return "granted";
    } else {
      return "denied";
    }
  } catch (err) {
    Alert.alert(ERROR_MESSAGE_CAMERA_PERMISSION);
  }
};

export default requestCameraPermission;
