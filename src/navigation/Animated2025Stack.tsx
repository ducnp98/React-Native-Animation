import React from "react";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import { RootStackParamList } from "./RouteParams";
import Animated2025Screen from "@app/screens/Animated2025";
import DraggableBottomSheet from "@app/screens/Animated2025/DraggableBottomSheet";
import ScrollBehavior from "@app/screens/Animated2025/ScrollBehavior";
import TabWithHeaderScroll from "@app/screens/Animated2025/TabWithHeaderScroll";
import BottomTabBar from "@app/screens/Animated2025/BottomTabBar";

const Stack = createStackNavigator<RootStackParamList>();

const screenOptions = {
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
};

const Animated2025Stack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Animated2025Screen"
      screenOptions={{
        ...screenOptions,
        headerShown: true,
        headerTitleAlign: "center",
        headerBackTitleVisible: true,
      }}
    >
      <Stack.Screen
        name="Animated2025Screen"
        component={Animated2025Screen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DraggableBottomSheet"
        component={DraggableBottomSheet}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ScrollBehavior"
        component={ScrollBehavior}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TabWithHeaderScroll"
        component={TabWithHeaderScroll}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="BottomTabBar"
        component={BottomTabBar}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default Animated2025Stack;
