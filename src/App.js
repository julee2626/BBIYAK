import React from "react";
import { StatusBar, useColorScheme } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./components/Home";
import SearchDrugScreen from "./components/SearchDrug";
import AlarmScreen from "./components/Alarm";
import WeeklyScreen from "./components/Weekly";

const Stack = createNativeStackNavigator();

const App = () => {
  const isDarkMode = useColorScheme() === "dark";

  return (
    <NavigationContainer>
      <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SearchDrug" component={SearchDrugScreen} />
        <Stack.Screen name="Alarm" component={AlarmScreen} />
        <Stack.Screen name="Weekly" component={WeeklyScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
