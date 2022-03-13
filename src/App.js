import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./components/Home";
import SearchDrugScreen from "./components/SearchDrug";
import AlarmScreen from "./components/Alarm";
import MyAlarmScreen from "./components/MyAlarm";
import CameraScreen from "./components/Camera";
import DrugInfoScreen from "./components/DrugInfo";
import Notifications from "./utils/notification";
import { dayString } from "./data/dateData";

const Stack = createNativeStackNavigator();

const App = () => {
  useEffect(() => {
    (async () => {
      const today = new Date();
      const day = dayString[today.getDay()];
      let alarms = [];
      alarms = await Notifications.getAllNotifications();

      alarms.map(alarm => {
        if (!alarm.data[day] && dayString[alarm.date.getDay()] === day) {
          alarm.date.setDate(alarm.date.getDate() + 1);
          Notifications.cancelLocalNotification(alarm.id);
          Notifications.scheduleNotification(
            alarm.date,
            alarm.data,
            alarm.data.drugName,
          );
        }
      });
    })();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false, animation: "none" }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Camera" component={CameraScreen} />
        <Stack.Screen name="SearchDrug" component={SearchDrugScreen} />
        <Stack.Screen name="DrugInfo" component={DrugInfoScreen} />
        <Stack.Screen name="Alarm" component={AlarmScreen} />
        <Stack.Screen name="MyAlarm" component={MyAlarmScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
