import React from "react";
import HeaderMomo from "../screens/Animateds/HeaderMomo";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import AnimatedScreen from "../screens/Animateds";
import DraggableBottomSheet from "../screens/Animateds/DraggableBottomSheet";
import ModalAnimation from "../screens/Animateds/ModalAnimation";
import PickPhoneColor from "../screens/Animateds/PhoneColorPicker";
import AnimatedExample from "../screens/Animateds/AnimatedExample";
import DoubleTapMessage from "../screens/Animateds/DoubleTapMessage";
import WavingPhone from "../screens/Animateds/WavingPhone";
import { RootStackParamList } from "./RouteParams";

const Stack = createStackNavigator<RootStackParamList>();

const screenOptions = {
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
};

const AnimatedStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="AnimatedScreen"
      screenOptions={{
        ...screenOptions,
        headerShown: true,
        headerTitleAlign: "center",
        headerBackTitleVisible: true,
      }}
    >
      <Stack.Screen
        name="AnimatedScreen"
        component={AnimatedScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HeaderMomo"
        component={HeaderMomo}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DraggableBottomSheet"
        component={DraggableBottomSheet}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ModalAnimation"
        component={ModalAnimation}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PhoneColorPicker"
        component={PickPhoneColor}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AnimatedExample"
        component={AnimatedExample}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DoubleTapMessage"
        component={DoubleTapMessage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="WavingPhone"
        component={WavingPhone}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AnimatedStack;
