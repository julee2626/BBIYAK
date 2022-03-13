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
import { ALARM_PLACE_HOLDER, ALARM_TITLE } from "../constants/texts";
import NavigationFooter from "./NavigatorFooter";

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
      Alert.alert("약 이름을 입력해 주세요.");
      return;
    }

    if (Object.values(day).indexOf(true) === -1) {
      Alert.alert("최소 하나의 요일을 선택해 주세요.");
      return;
    }

    Notifications.scheduleNotification(date, day, drugName);
    navigation.navigate("MyAlarm");
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>{ALARM_TITLE}</Text>
        <View style={styles.elevation}>
          <View style={styles.category}>
            <Text style={styles.categoryTitle}>약 이름</Text>
            <TextInput
              style={styles.textInput}
              placeholder={ALARM_PLACE_HOLDER}
              onChangeText={text => setDrugName(text)}
              underlineColorAndroid={SUB_COLOR_1}
              placeholderTextColor={SUB_COLOR_1}
            />
          </View>
          <View style={styles.dateContainer}>
            <Text style={styles.categoryTitleColumn}>시작 날짜</Text>
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
            <Text style={styles.categoryTitleColumn}>알람 요일</Text>
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
                <Text style={styles.dayText}>월</Text>
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
                <Text style={styles.dayText}>수</Text>
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
                <Text style={styles.dayText}>금</Text>
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
                <Text style={styles.dayText}>일</Text>
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
                <Text style={styles.dayText}>화</Text>
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
                <Text style={styles.dayText}>목</Text>
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
                <Text style={styles.dayText}>토</Text>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={handlePressSetNotification}>
            <Text style={styles.buttonTitle}>알람 맞추기</Text>
          </TouchableOpacity>
        </View>
      </View>
      <NavigationFooter navigation={navigation} onScreen="Alarm" />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "93%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: MAIN_COLOR_1,
  },
  title: {
    marginVertical: 10,
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
    marginBottom: "3%",
  },
  category: {
    flex: 1,
    flexDirection: "row",
    marginTop: 10,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  categoryTitle: {
    width: "20%",
    marginRight: "8%",
    textAlign: "center",
    fontFamily: "Dongle-Bold",
    fontSize: 35,
    color: SUB_COLOR_2,
  },
  textInput: {
    width: "60%",
    fontFamily: "Dongle-Regular",
    color: SUB_COLOR_1,
    fontSize: 30,
  },
  dateContainer: {
    flex: 4,
    justifyContent: "center",
    flexDirection: "column",
  },
  categoryTitleColumn: {
    width: "100%",
    textAlign: "left",
    fontFamily: "Dongle-Bold",
    fontSize: 35,
    color: SUB_COLOR_2,
    marginTop: 20,
  },
  dayContainer: {
    flex: 4,
    width: "90%",
    alignItems: "center",
  },
  daySubContainer: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 5,
  },
  dayButton: {
    width: 55,
    height: 55,
    borderRadius: 20,
    marginTop: 5,
    marginHorizontal: 12,
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
    height: "10%",
    marginBottom: "5%",
    borderRadius: 10,
    elevation: 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: SUB_COLOR_4,
  },
  buttonTitle: {
    fontFamily: "Dongle-Bold",
    fontSize: 40,
    color: WHITE,
  },
});

export default AlarmScreen;
