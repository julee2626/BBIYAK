import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";
import DatePicker from "react-native-date-picker";

import Notifications from "../utils/notification";
import { MAIN_COLOR_1, MAIN_COLOR_2, SUB_COLOR_2 } from "../constants/styles";

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
    Notifications.scheduleNotification(date, day, drugName);
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>알람 설정</Text>
      <View style={styles.category}>
        <Text style={styles.categoryTitle}>약 이름</Text>
        <TextInput
          style={styles.textInput}
          placeholder="약의 이름을 입력해주세요"
          onChangeText={text => setDrugName(text)}
        />
      </View>
      <View style={styles.dateContainer}>
        <DatePicker date={date} onDateChange={setDate} />
      </View>
      <View style={styles.dayContainer}>
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
            day.SAT
              ? [styles.dayButton, { backgroundColor: SUB_COLOR_2 }]
              : [styles.dayButton, { backgroundColor: MAIN_COLOR_2 }]
          }
          onPress={() => {
            setDay({ ...day, SAT: !day.SAT });
          }}>
          <Text style={styles.dayText}>S</Text>
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
      <TouchableOpacity
        style={styles.button}
        onPress={handlePressSetNotification}>
        <Text style={styles.buttonTitle}>알람 맞추기</Text>
      </TouchableOpacity>
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
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "left",
  },
  category: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    backgroundColor: MAIN_COLOR_1,
    justifyContent: "center",
    alignItems: "center",
  },
  categoryTitle: {
    width: "20%",
    marginRight: "8%",
    textAlign: "center",
    fontSize: 18,
    color: SUB_COLOR_2,
  },
  textInput: {
    width: "60%",
  },
  dateContainer: {
    flex: 2,
    justifyContent: "center",
  },
  dayContainer: {
    flex: 1,
    flexDirection: "row",
  },
  dayButton: {
    width: 40,
    height: 40,
    borderRadius: 30,
    marginVertical: 20,
    marginHorizontal: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  dayText: {
    color: MAIN_COLOR_1,
  },
  button: {
    width: 250,
    height: 40,
    borderRadius: 10,
    marginBottom: 50,
    marginHorizontal: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: SUB_COLOR_2,
  },
  buttonTitle: {
    color: MAIN_COLOR_1,
  },
});

export default AlarmScreen;
