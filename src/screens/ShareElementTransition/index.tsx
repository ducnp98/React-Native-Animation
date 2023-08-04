import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import HomeScreen from "./HomeScreen";
import TabScreen from "./TabScreen";

const Stack = createNativeStackNavigator();

const ShareElementTransition = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Modal"
        component={TabScreen}
        options={{ presentation: "transparentModal", animation: "fade", headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default ShareElementTransition;
