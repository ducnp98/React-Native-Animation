import React from "react";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import { RootStackParamList } from "navigation/RouteParams";
import ReanimatedScreen2 from "../screens/Reanimateds2";
import Scrolling from "../screens/Reanimateds2/Scrolling";
import MenuBar from "../screens/Reanimateds2/MenuBar";

const Stack = createStackNavigator<RootStackParamList>();

const screenOptions = {
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
};

const Reanimated2Stack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Reanimated2Screen"
      screenOptions={{
        ...screenOptions,
        headerShown: true,
        headerTitleAlign: "center",
        headerBackTitleVisible: true,
      }}
    >
      <Stack.Screen
        name="Reanimated2Screen"
        component={ReanimatedScreen2}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Scrolling"
        component={Scrolling}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MenuBar"
        component={MenuBar}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default Reanimated2Stack;
