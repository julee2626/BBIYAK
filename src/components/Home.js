import React from "react";
import { TouchableOpacity, Text, View, StyleSheet, Image } from "react-native";
import {
  MAIN_COLOR_1,
  SUB_COLOR_1,
  SUB_COLOR_2,
  WHITE,
} from "../constants/styles";
import {
  HOME_CAMERA_SEARCH,
  HOME_CHECK_ALARM,
  HOME_SET_ALARM,
  HOME_TITLE,
  HOME_TYPE_SEARCH,
} from "../constants/texts";

const HomeScreen = ({ navigation }) => {
  return (
    <>
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require("../assets/images/chick_1.png")}
        />
        <Text style={styles.title}>{HOME_TITLE}</Text>
        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate("Camera");
            }}>
            <Text style={styles.buttonTitle}>{HOME_CAMERA_SEARCH}</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate("SearchDrug");
            }}>
            <Text style={styles.buttonTitle}>{HOME_TYPE_SEARCH}</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate("Alarm");
            }}>
            <Text style={styles.buttonTitle}>{HOME_SET_ALARM}</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate("MyAlarm");
            }}>
            <Text style={styles.buttonTitle}>{HOME_CHECK_ALARM}</Text>
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
