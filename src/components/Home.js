import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { MAIN_COLOR_1, SUB_COLOR_4 } from "../constants/styles";
import { HOME_TITLE } from "../constants/texts";
import NavigationFooter from "./NavigatorFooter";

const HomeScreen = ({ navigation }) => {
  return (
    <>
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require("../assets/images/chick_1.png")}
        />
        <Text style={styles.title}>{HOME_TITLE}</Text>
      </View>
      <NavigationFooter navigation={navigation} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "93%",
    alignItems: "center",
    backgroundColor: MAIN_COLOR_1,
  },
  title: {
    fontFamily: "Dongle-Bold",
    color: SUB_COLOR_4,
    fontSize: 150,
    textAlign: "center",
  },
  logo: {
    marginTop: 100,
    marginBottom: 50,
    width: 200,
    height: 200,
  },
});

export default HomeScreen;
