import React from "react";
import { TouchableOpacity, Text, View, StyleSheet, Image } from "react-native";
import {
  MAIN_COLOR_1,
  SUB_COLOR_1,
  SUB_COLOR_2,
  WHITE,
} from "../constants/styles";

const HomeScreen = ({ navigation }) => {
  return (
    <>
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require("../assets/images/chick_1.png")}
        />
        <Text style={styles.title}>BBIYAK</Text>
        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate("Camera");
            }}>
            <Text style={styles.buttonTitle}>사진으로 검색</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate("SearchDrug");
            }}>
            <Text style={styles.buttonTitle}>직접 검색</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate("Alarm");
            }}>
            <Text style={styles.buttonTitle}>약 알람 맞추기</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate("MyAlarm");
            }}>
            <Text style={styles.buttonTitle}>알람 확인하기</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    alignItems: "center",
    backgroundColor: MAIN_COLOR_1,
  },
  title: {
    fontFamily: "Dongle-Bold",
    color: SUB_COLOR_1,
    fontSize: 150,
    textAlign: "center",
  },
  button: {
    width: 250,
    height: 40,
    borderRadius: 10,
    marginVertical: 10,
    marginHorizontal: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: SUB_COLOR_2,
    elevation: 5,
  },
  buttonTitle: {
    color: WHITE,
    fontFamily: "Dongle-Regular",
    fontSize: 30,
  },
  logo: {
    marginTop: 50,
    marginBottom: 20,
    width: 200,
    height: 200,
  },
});

export default HomeScreen;
