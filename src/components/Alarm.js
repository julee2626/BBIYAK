import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Alert,
} from "react-native";
import DatePicker from "react-native-date-picker";

import Notifications from "../utils/notification";
import {
  MAIN_COLOR_1,
  MAIN_COLOR_2,
  SUB_COLOR_1,
  SUB_COLOR_2,
  SUB_COLOR_4,
  WHITE,
} from "../constants/styles";

const AlarmScreen = ({ navigation }) => {
  const [date, setDate] = useState(new Date());
  const [day, setDay] = useState({
    MON: false,
    TUE: false,
    WED: false,
    THU: false,
    FRI: false,
    SAT: false,
    SUN: false,
  });
  const [drugName, setDrugName] = useState("");

  const handlePressSetNotification = () => {
    if (drugName === "" || drugName === null) {
      Alert.alert("약 이름을 입력해주세요");
      return;
    }

    Notifications.scheduleNotification(date, day, drugName);
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>알람 설정</Text>
      <View style={styles.elevation}>
        <View style={styles.category}>
          <Text style={styles.categoryTitle}>약 이름</Text>
          <TextInput
            style={styles.textInput}
            placeholder="약의 이름을 입력해주세요"
            onChangeText={text => setDrugName(text)}
            underlineColorAndroid={SUB_COLOR_1}
          />
        </View>
        <View style={styles.dateContainer}>
          <DatePicker
            date={date}
            onDateChange={setDate}
            minimumDate={new Date()}
            androidVariant="nativeAndroid"
            minuteInterval={10}
            textColor={SUB_COLOR_2}
          />
        </View>
        <View style={styles.dayContainer}>
          <View style={styles.daySubContainer}>
            <TouchableOpacity
              style={
                day.MON
                  ? [styles.dayButton, { backgroundColor: SUB_COLOR_2 }]
                  : [styles.dayButton, { backgroundColor: MAIN_COLOR_2 }]
              }
              onPress={() => {
                setDay({ ...day, MON: !day.MON });
              }}>
              <Text style={styles.dayText}>M</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                day.WED
                  ? [styles.dayButton, { backgroundColor: SUB_COLOR_2 }]
                  : [styles.dayButton, { backgroundColor: MAIN_COLOR_2 }]
              }
              onPress={() => {
                setDay({ ...day, WED: !day.WED });
              }}>
              <Text style={styles.dayText}>W</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                day.FRI
                  ? [styles.dayButton, { backgroundColor: SUB_COLOR_2 }]
                  : [styles.dayButton, { backgroundColor: MAIN_COLOR_2 }]
              }
              onPress={() => {
                setDay({ ...day, FRI: !day.FRI });
              }}>
              <Text style={styles.dayText}>F</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                day.SUN
                  ? [styles.dayButton, { backgroundColor: SUB_COLOR_2 }]
                  : [styles.dayButton, { backgroundColor: MAIN_COLOR_2 }]
              }
              onPress={() => {
                setDay({ ...day, SUN: !day.SUN });
              }}>
              <Text style={styles.dayText}>S</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.daySubContainer}>
            <TouchableOpacity
              style={
                day.TUE
                  ? [styles.dayButton, { backgroundColor: SUB_COLOR_2 }]
                  : [styles.dayButton, { backgroundColor: MAIN_COLOR_2 }]
              }
              onPress={() => {
                setDay({ ...day, TUE: !day.TUE });
              }}>
              <Text style={styles.dayText}>T</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                day.THU
                  ? [styles.dayButton, { backgroundColor: SUB_COLOR_2 }]
                  : [styles.dayButton, { backgroundColor: MAIN_COLOR_2 }]
              }
              onPress={() => {
                setDay({ ...day, THU: !day.THU });
              }}>
              <Text style={styles.dayText}>T</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                day.SAT
                  ? [styles.dayButton, { backgroundColor: SUB_COLOR_2 }]
                  : [styles.dayButton, { backgroundColor: MAIN_COLOR_2 }]
              }
              onPress={() => {
                setDay({ ...day, SAT: !day.SAT });
              }}>
              <Text style={styles.dayText}>S</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={[styles.category, { marginVertical: 10 }]}>
        <TouchableOpacity
          style={styles.button}
          onPress={handlePressSetNotification}>
          <Text style={styles.buttonTitle}>알람 맞추기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: MAIN_COLOR_1,
  },
  title: {
    marginVertical: 20,
    color: SUB_COLOR_2,
    fontFamily: "Dongle-Bold",
    fontSize: 50,
    textAlign: "center",
  },
  elevation: {
    flex: 5,
    width: "90%",
    borderRadius: 10,
    elevation: 3,
    backgroundColor: WHITE,
    alignItems: "center",
  },
  category: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  categoryTitle: {
    width: "20%",
    marginRight: "8%",
    textAlign: "center",
    fontFamily: "Dongle-Bold",
    fontSize: 40,
    color: SUB_COLOR_2,
  },
  textInput: {
    width: "60%",
    fontFamily: "Dongle-Regular",
    color: SUB_COLOR_1,
    fontSize: 40,
  },
  dateContainer: {
    flex: 3,
    justifyContent: "center",
  },
  dayContainer: {
    flex: 2,
    width: "90%",
    alignItems: "center",
  },
  daySubContainer: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "center",
  },
  dayButton: {
    width: 65,
    height: 65,
    borderRadius: 25,
    marginVertical: 5,
    marginHorizontal: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  dayText: {
    fontFamily: "Dongle-Bold",
    fontSize: 40,
    color: WHITE,
  },
  button: {
    width: "40%",
    height: "80%",
    backgroundColor: SUB_COLOR_4,
    borderRadius: 10,
    elevation: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonTitle: {
    fontFamily: "Dongle-Bold",
    fontSize: 40,
    color: WHITE,
  },
});

export default AlarmScreen;
