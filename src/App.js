import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./components/Home";
import SearchDrugScreen from "./components/SearchDrug";
import AlarmScreen from "./components/Alarm";
import WeeklyScreen from "./components/Weekly";
import CameraScreen from "./components/Camera";
import DrugInfoScreen from "./components/DrugInfo";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Camera" component={CameraScreen} />
        <Stack.Screen name="SearchDrug" component={SearchDrugScreen} />
        <Stack.Screen name="DrugInfo" component={DrugInfoScreen} />
        <Stack.Screen name="Alarm" component={AlarmScreen} />
        <Stack.Screen name="Weekly" component={WeeklyScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
