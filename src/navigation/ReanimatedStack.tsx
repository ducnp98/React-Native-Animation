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
import ScrollviewHorizontal from "../screens/Reanimateds/ScrollviewHorizontal";
import ColorInterpolate from "../screens/Reanimateds/ColorInterpolate";
import PinchGesture from "../screens/Reanimateds/PinchGesture";
import DoubleTap from "../screens/Reanimateds/DoubleTap";
import ScrollWithPanGesture from "../screens/Reanimateds/ScrollWithPanGesture";
import ColorPicker from "../screens/Reanimateds/ColorPicker";

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
      <Stack.Screen
        name="ScrollviewHorizontal"
        component={ScrollviewHorizontal}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ColorInterpolate"
        component={ColorInterpolate}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PinchGesture"
        component={PinchGesture}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DoubleTap"
        component={DoubleTap}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ScrollWithPanGesture"
        component={ScrollWithPanGesture}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ColorPicker"
        component={ColorPicker}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AnimatedStack;
