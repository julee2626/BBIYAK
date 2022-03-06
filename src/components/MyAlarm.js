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
} from "../constants/styles";

const MyAlarmScreen = () => {
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
    <ScrollView style={styles.container}>
      <Text style={styles.title}>MyAlarm</Text>
      {alarms.length ? (
        alarms.map(alarm => (
          <View key={alarm.id} style={styles.alarmContainer}>
            <Text style={styles.drugName}>{alarm.message.split(" ")[1]}</Text>
            <View style={styles.timeContainer}>
              <Text style={styles.alarmTime}>
                {("0" + alarm.date.getHours()).slice(-2)} :{" "}
                {("0" + alarm.date.getMinutes()).slice(-2)}
              </Text>
              <TouchableOpacity
                style={styles.check}
                onPress={() => handlePressDeleteAlarm(alarm.id)}>
                <Text>🗑</Text>
              </TouchableOpacity>
            </View>
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
          <Text style={styles.noAlarmText}>알람을 등록해 주세요</Text>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: MAIN_COLOR_1,
  },
  title: {
    marginVertical: 10,
    marginLeft: 20,
    color: SUB_COLOR_2,
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "left",
  },
  alarmContainer: {
    marginVertical: 10,
  },
  drugName: {
    textAlign: "left",
    marginHorizontal: 10,
    fontSize: 30,
    fontWeight: "200",
    color: SUB_COLOR_1,
  },
  timeContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  alarmTime: {
    textAlign: "left",
    marginVertical: 5,
    marginHorizontal: 20,
    fontSize: 25,
    fontWeight: "200",
    color: SUB_COLOR_1,
  },
  check: {
    width: 30,
    height: 30,
    textAlign: "right",
    marginLeft: 210,
  },
  dayContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  dayButton: {
    width: 30,
    height: 30,
    borderRadius: 30,
    marginVertical: 5,
    marginHorizontal: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  dayText: {
    color: MAIN_COLOR_1,
    fontWeight: "300",
  },
  noAlarm: {
    height: 500,
    justifyContent: "center",
    alignItems: "center",
  },
  noAlarmText: {
    fontSize: 32,
    fontWeight: "200",
    color: SUB_COLOR_1,
  },
});

export default MyAlarmScreen;
