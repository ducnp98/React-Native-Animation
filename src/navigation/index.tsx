import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParamList } from "./RouteParams";
import { NavigationContainer } from "@react-navigation/native";
import AnimatedStack from "./AnimatedStack";
import ReanimatedStack from "./ReanimatedStack";
import HomeScreen from "../screens/HomeScreen";
import ReactHookStack from "./ReactHookStack";
import NavigationStack from "./NavigationStack";
import Reanimated2Stack from "./Reanimated2Stack";
import Spotify from "@app/screens/Spotify";
import ShareElementTransition from "@app/screens/ShareElementTransition";
import CoffeeShop from "@app/screens/CoffeeShop";
import VideoPlayerScreen from "@app/screens/VideoPlayerScreen";
import BlurBackground from "@app/screens/BlurBackground";
import Tinder from "@app/screens/Tinder";
import NeomorphismDemo from "@app/screens/NeomorphismDemo";
import Otp from "@app/screens/OTP";
import Bridge from "@app/screens/Bridge";
import CustomGalleryPicker from "@app/screens/CustomGalleryPicker";
import LiveChart from "@app/screens/LiveChart";

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigation = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="HomeScreen"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="AnimatedStack" component={AnimatedStack} />
          <Stack.Screen name="ReactHookStack" component={ReactHookStack} />
          <Stack.Screen name="ReanimatedStack" component={ReanimatedStack} />
          <Stack.Screen name="Reanimated2Stack" component={Reanimated2Stack} />
          <Stack.Screen name="NavigationStack" component={NavigationStack} />
          <Stack.Screen name="Spotify" component={Spotify} />
          <Stack.Screen
            name="ShareElementTransition"
            component={ShareElementTransition}
          />
          <Stack.Screen name="CoffeeShop" component={CoffeeShop} />
          <Stack.Screen name="VideoPlayer" component={VideoPlayerScreen} />
          <Stack.Screen name="BlurBackground" component={BlurBackground} />
          <Stack.Screen
            name="Tinder"
            component={Tinder}
            options={{ gestureEnabled: false }}
          />
          <Stack.Screen name="NeomorphismDemo" component={NeomorphismDemo} />
          <Stack.Screen name="OTP" component={Otp} />
          <Stack.Screen name="Bridge" component={Bridge} />
          <Stack.Screen name="CustomGalleryPicker" component={CustomGalleryPicker} />
          <Stack.Screen name="LiveChart" component={LiveChart} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default AppNavigation;
