import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import Notifications from "../utils/notification";
import {
  MAIN_COLOR_1,
  MAIN_COLOR_2,
  SUB_COLOR_1,
  SUB_COLOR_2,
  SUB_COLOR_4,
  WHITE,
} from "../constants/styles";
import { MYALARM_TITLE } from "../constants/texts";
import NavigationFooter from "./NavigatorFooter";

const MyAlarmScreen = ({ navigation }) => {
  const [alarms, setAlarms] = useState([]);
  const [alarmNumber, setAlarmNumber] = useState(alarms.length);

  useEffect(() => {
    (async () => {
      const notifications = await Notifications.getAllNotifications();

      setAlarms(notifications);
    })();
  }, [alarmNumber]);

  const handlePressDeleteAlarm = id => {
    Notifications.cancelLocalNotification(id);
    setAlarmNumber(alarmNumber - 1);
  };

  return (
    <>
      <ScrollView style={styles.container}>
        <Text style={styles.title}>{MYALARM_TITLE}</Text>
        {alarms.length ? (
          alarms.map(alarm => (
            <View key={alarm.id} style={styles.alarmContainer}>
              <View style={styles.timeContainer}>
                <Text style={styles.alarmTime}>
                  {("0" + alarm.date.getHours()).slice(-2)} :{" "}
                  {("0" + alarm.date.getMinutes()).slice(-2)}
                </Text>
                <TouchableOpacity
                  style={styles.delete}
                  onPress={() => handlePressDeleteAlarm(alarm.id)}>
                  <Text style={styles.deleteText}>Delete</Text>
                </TouchableOpacity>
              </View>
              <Text style={styles.drugName}>{alarm.message.split(" ")[1]}</Text>
              <View style={styles.dayContainer}>
                <View
                  style={
                    alarm.data.MON
                      ? [styles.dayButton, { backgroundColor: SUB_COLOR_2 }]
                      : [styles.dayButton, { backgroundColor: MAIN_COLOR_2 }]
                  }>
                  <Text style={styles.dayText}>M</Text>
                </View>
                <View
                  style={
                    alarm.data.TUE
                      ? [styles.dayButton, { backgroundColor: SUB_COLOR_2 }]
                      : [styles.dayButton, { backgroundColor: MAIN_COLOR_2 }]
                  }>
                  <Text style={styles.dayText}>T</Text>
                </View>
                <View
                  style={
                    alarm.data.WED
                      ? [styles.dayButton, { backgroundColor: SUB_COLOR_2 }]
                      : [styles.dayButton, { backgroundColor: MAIN_COLOR_2 }]
                  }>
                  <Text style={styles.dayText}>W</Text>
                </View>
                <View
                  style={
                    alarm.data.THU
                      ? [styles.dayButton, { backgroundColor: SUB_COLOR_2 }]
                      : [styles.dayButton, { backgroundColor: MAIN_COLOR_2 }]
                  }>
                  <Text style={styles.dayText}>T</Text>
                </View>
                <View
                  style={
                    alarm.data.FRI
                      ? [styles.dayButton, { backgroundColor: SUB_COLOR_2 }]
                      : [styles.dayButton, { backgroundColor: MAIN_COLOR_2 }]
                  }>
                  <Text style={styles.dayText}>F</Text>
                </View>
                <View
                  style={
                    alarm.data.SAT
                      ? [styles.dayButton, { backgroundColor: SUB_COLOR_2 }]
                      : [styles.dayButton, { backgroundColor: MAIN_COLOR_2 }]
                  }>
                  <Text style={styles.dayText}>S</Text>
                </View>
                <View
                  style={
                    alarm.data.SUN
                      ? [styles.dayButton, { backgroundColor: SUB_COLOR_2 }]
                      : [styles.dayButton, { backgroundColor: MAIN_COLOR_2 }]
                  }>
                  <Text style={styles.dayText}>S</Text>
                </View>
              </View>
            </View>
          ))
        ) : (
          <View style={styles.noAlarm}>
            <Text style={styles.noAlarmText}>
              {"   알람을 \n등록해 주세요"}
            </Text>
          </View>
        )}
      </ScrollView>
      <NavigationFooter navigation={navigation} onScreen="MyAlarm" />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: MAIN_COLOR_1,
  },
  title: {
    marginVertical: 10,
    color: SUB_COLOR_2,
    fontFamily: "Dongle-Bold",
    fontSize: 50,
    textAlign: "center",
  },
  alarmContainer: {
    marginVertical: 10,
    marginHorizontal: "5%",
    width: "90%",
    borderRadius: 10,
    elevation: 3,
    backgroundColor: WHITE,
  },
  timeContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  alarmTime: {
    flex: 4,
    textAlign: "left",
    marginHorizontal: 10,
    fontFamily: "Dongle-Regular",
    fontSize: 40,
    color: SUB_COLOR_1,
  },
  delete: {
    flex: 1,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
    marginTop: 5,
    borderRadius: 10,
    backgroundColor: SUB_COLOR_4,
  },
  deleteText: {
    marginTop: 2,
    fontFamily: "Dongle-Regular",
    fontSize: 25,
  },
  drugName: {
    textAlign: "left",
    marginHorizontal: 10,
    fontFamily: "Dongle-Bold",
    fontSize: 60,
    color: SUB_COLOR_1,
  },
  dayContainer: {
    flex: 1,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "center",
  },
  dayButton: {
    width: 40,
    height: 40,
    borderRadius: 18,
    marginVertical: 5,
    marginHorizontal: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  dayText: {
    marginTop: 3,
    fontFamily: "Dongle-Bold",
    fontSize: 30,
    color: WHITE,
  },
  noAlarm: {
    height: 500,
    justifyContent: "center",
    alignItems: "center",
  },
  noAlarmText: {
    fontSize: 80,
    fontFamily: "Dongle-Bold",
    color: SUB_COLOR_4,
  },
});

export default MyAlarmScreen;
