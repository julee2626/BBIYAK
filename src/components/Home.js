import React from "react";
import { Button, Text, View, StyleSheet, Image } from "react-native";
import { MAIN_COLOR_1, SUB_COLOR_1, SUB_COLOR_2 } from "../constants/styles";

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
        <View style={styles.button}>
          <Button title="사진으로 검색하기" color={SUB_COLOR_2} />
        </View>
        <View style={styles.button}>
          <Button
            title="직접 검색하기"
            color={SUB_COLOR_2}
            onPress={() => {
              navigation.navigate("SearchDrug");
            }}
          />
        </View>
        <View style={styles.button}>
          <Button
            title="약 알람 맞추기"
            color={SUB_COLOR_2}
            onPress={() => {
              navigation.navigate("Alarm");
            }}
          />
        </View>
        <View style={styles.button}>
          <Button
            title="약 스케줄"
            color={SUB_COLOR_2}
            onPress={() => {
              navigation.navigate("Weekly");
            }}
          />
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
    marginVertical: 10,
    marginHorizontal: 50,
  },
  logo: {
    width: 250,
    height: 250,
  },
});

export default HomeScreen;
