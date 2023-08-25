import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import TwitterHome from "./TwitterHome";
import TwitterAccountDetail from "./TwitterAccountDetail";

const Stack = createNativeStackNavigator();

const Twitter = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TwitterHome"
        component={TwitterHome}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TwitterAccountDetail"
        component={TwitterAccountDetail}
        options={{ presentation: "transparentModal", animation: "fade", headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default Twitter;
