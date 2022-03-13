import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SUB_COLOR_1, SUB_COLOR_2, WHITE } from "../constants/styles";

const NavigationFooter = ({ navigation, onScreen }) => {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("Camera");
        }}
        activeOpacity={0.7}>
        <Text style={styles.buttonTitle}>사진 검색</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.button,
          onScreen === "SearchDrug"
            ? { backgroundColor: SUB_COLOR_2 }
            : { backgroundColor: SUB_COLOR_1 },
        ]}
        onPress={() => {
          navigation.navigate("SearchDrug");
        }}
        activeOpacity={0.7}>
        <Text style={styles.buttonTitle}>직접 검색</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.button,
          onScreen === "Alarm"
            ? { backgroundColor: SUB_COLOR_2 }
            : { backgroundColor: SUB_COLOR_1 },
        ]}
        onPress={() => {
          navigation.navigate("Alarm");
        }}
        activeOpacity={0.7}>
        <Text style={styles.buttonTitle}>알람 설정</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.button,
          onScreen === "MyAlarm"
            ? { backgroundColor: SUB_COLOR_2 }
            : { backgroundColor: SUB_COLOR_1 },
        ]}
        onPress={() => {
          navigation.navigate("MyAlarm");
        }}
        activeOpacity={0.7}>
        <Text style={styles.buttonTitle}>알람 목록</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    height: "7%",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: "25%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: SUB_COLOR_1,
  },
  buttonTitle: {
    color: WHITE,
    fontFamily: "Dongle-Bold",
    fontSize: 30,
  },
});

export default NavigationFooter;
