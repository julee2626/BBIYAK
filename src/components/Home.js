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
          source={{
            uri: "https://cdn.dribbble.com/users/3491724/screenshots/11056357/media/55c05692b649a784db3eaa43010f85e4.jpg?compress=1&resize=1200x900&vertical=top",
          }}
        />
        <Text style={styles.title}>BBIYAK</Text>
        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate("Camera");
            }}>
            <Text style={styles.buttonTitle}>사진으로 검색하기</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate("SearchDrug");
            }}>
            <Text style={styles.buttonTitle}>직접 검색하기</Text>
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
              navigation.navigate("Weekly");
            }}>
            <Text style={styles.buttonTitle}>약 스케줄</Text>
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
    marginVertical: 40,
    color: SUB_COLOR_1,
    fontWeight: "bold",
    fontSize: 50,
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
  },
  buttonTitle: {
    color: WHITE,
  },
  logo: {
    width: 250,
    height: 250,
  },
});

export default HomeScreen;
