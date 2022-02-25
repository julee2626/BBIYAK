import React from "react";
import {Button, Text, View, StyleSheet} from "react-native";

const Home = () => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>BBIYAK</Text>
        <Button title="사진으로 검색하기" style={styles.button} />
        <Button title="직접 검색하기" style={styles.button} />
        <Button title="약 알람 맞추기" style={styles.button} />
        <Button title="약 스케줄" style={styles.button} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    marginLeft: 50,
    marginRight: 50,
  },
  title: {
    color: "yellow",
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
  },
  button: {
    paddingTop: 20,
  },
});

export default Home;
