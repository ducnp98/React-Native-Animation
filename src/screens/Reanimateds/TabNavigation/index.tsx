import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { View } from "react-native";
import Lottie from "lottie-react-native";
import AnimatedTabBar from "./AnimatedTabBar";
import { SafeAreaView } from "react-native-safe-area-context";

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <SafeAreaView edges={['right', 'left', 'bottom']} className="flex-1">
      <Tab.Navigator tabBar={(props) => <AnimatedTabBar {...props} />}>
        <Tab.Screen
          name="Home"
          component={PlaceholderScreen}
          options={{
            headerShown: false,
            // @ts-ignore
            tabBarIcon: ({ ref }) => (
              <Lottie
                ref={ref}
                source={require("./Icon/home.icon.json")}
                style={{ height: 36, width: 36 }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Setting"
          component={PlaceholderScreen}
          options={{
            headerShown: false,
            // @ts-ignore
            tabBarIcon: ({ ref }) => (
              <Lottie
                ref={ref}
                source={require("./Icon/settings.icon.json")}
                style={{ height: 36, width: 36 }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Chat"
          component={PlaceholderScreen}
          options={{
            headerShown: false,
            // @ts-ignore
            tabBarIcon: ({ ref }) => (
              <Lottie
                ref={ref}
                source={require("./Icon/chat.icon.json")}
                style={{ height: 36, width: 36 }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Upload"
          component={PlaceholderScreen}
          options={{
            headerShown: false,
            // @ts-ignore
            tabBarIcon: ({ ref }) => (
              <Lottie
                ref={ref}
                source={require("./Icon/upload.icon.json")}
                style={{ height: 36, width: 36 }}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

const PlaceholderScreen = () => {
  return <View className="flex-1" style={{ backgroundColor: "#604AE6" }} />;
};

export default TabNavigation;
