import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import React from "react";
import { RootStackParamList } from "./RouteParams";
import { NavigationContainer } from "@react-navigation/native";
import AnimatedStack from "./AnimatedStack";
import ReanimatedStack from "./ReanimatedStack";
import HomeScreen from "../screens/HomeScreen";
import ReactHookStack from "./ReactHookStack";
import NavigationStack from "./NavigationStack";
import Reanimated2Stack from "./Reanimated2Stack";
import Spotify from "@app/screens/Spotify";

const Stack = createStackNavigator<RootStackParamList>();

const screenOptions = {
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
};

const AppNavigation = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="HomeScreen"
          screenOptions={{
            ...screenOptions,
            headerShown: false,
            animationEnabled: true,
          }}
        >
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{ gestureEnabled: false }}
          />
          <Stack.Screen
            name="AnimatedStack"
            component={AnimatedStack}
            options={{ gestureEnabled: false }}
          />
          <Stack.Screen
            name="ReactHookStack"
            component={ReactHookStack}
            options={{ gestureEnabled: false }}
          />
          <Stack.Screen
            name="ReanimatedStack"
            component={ReanimatedStack}
            options={{ gestureEnabled: false }}
          />
          <Stack.Screen
            name="Reanimated2Stack"
            component={Reanimated2Stack}
            options={{ gestureEnabled: false }}
          />
          <Stack.Screen
            name="NavigationStack"
            component={NavigationStack}
            options={{ gestureEnabled: false }}
          />
          <Stack.Screen
            name="Spotify"
            component={Spotify}
            options={{ gestureEnabled: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default AppNavigation;
