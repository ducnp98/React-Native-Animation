import React from "react";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import { RootStackParamList } from "navigation/RouteParams";
import HOC from "../screens/ReactHook/HOC";
import ReactHook from "../screens/ReactHook";

const Stack = createStackNavigator<RootStackParamList>();

const screenOptions = {
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
};

const ReactHookStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="ReactHook"
      screenOptions={{
        ...screenOptions,
        headerShown: true,
        headerTitleAlign: "center",
        headerBackTitleVisible: true,
      }}
    >
      <Stack.Screen
        name="ReactHook"
        component={ReactHook}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HOC"
        component={HOC}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default ReactHookStack;
