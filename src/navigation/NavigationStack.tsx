import React from "react";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import { RootStackParamList } from "navigation/RouteParams";
import TopTabNavigation from "../screens/Navigation/TopTabNavigation";
import Navigation from "../screens/Navigation";

const Stack = createStackNavigator<RootStackParamList>();

const screenOptions = {
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
};

const NavigationStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Navigation"
      screenOptions={{
        ...screenOptions,
        headerShown: true,
        headerTitleAlign: "center",
        headerBackTitleVisible: true,
      }}
    >
      <Stack.Screen
        name="Navigation"
        component={Navigation}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TopTabNavigation"
        component={TopTabNavigation}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default NavigationStack;
