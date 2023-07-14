import React from "react";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import { RootStackParamList } from "navigation/RouteParams";
import ReanimatedScreen from "../screens/Reanimateds";
import Begin from "../screens/Reanimateds/Begin";
import BasicGesture from "../screens/Reanimateds/BasicGesture";
import DragBottomSheet from "../screens/Reanimateds/DragBottomSheet";
import ScrollView from "../screens/Reanimateds/Scrollview";
import HeaderScroll from "../screens/Reanimateds/HeaderScroll";
import SwipeToUnlock from "../screens/Reanimateds/SwipeToUnlock";

const Stack = createStackNavigator<RootStackParamList>();

const screenOptions = {
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
};

const AnimatedStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="ReanimatedScreen"
      screenOptions={{
        ...screenOptions,
        headerShown: true,
        headerTitleAlign: "center",
        headerBackTitleVisible: true,
      }}
    >
      <Stack.Screen
        name="ReanimatedScreen"
        component={ReanimatedScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Begin"
        component={Begin}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="BasicGesture"
        component={BasicGesture}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DragBottomSheet"
        component={DragBottomSheet}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ScrollView"
        component={ScrollView}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HeaderScroll"
        component={HeaderScroll}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SwipeToUnlock"
        component={SwipeToUnlock}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AnimatedStack;
