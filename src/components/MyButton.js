import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { SUB_COLOR_4, WHITE } from "../constants/styles";

function MyButton({ onPress, text, buttonStyle }) {
  return (
    <TouchableOpacity style={[styles.button, buttonStyle]} onPress={onPress}>
      <Text style={styles.buttonTitle}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    // flex: 1,
    height: 60,
    marginBottom: 20,
    marginHorizontal: "10%",
    backgroundColor: SUB_COLOR_4,
    borderRadius: 10,
    elevation: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonTitle: {
    fontFamily: "Dongle-Bold",
    fontSize: 35,
    color: WHITE,
  },
});

export default MyButton;
