import React from "react";
import { SafeAreaView, View } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import HomeScreen from "./HomeScreen";
import SettingScreen from "./SettingScreen";
import MyTabBar from "./MyTabBar";
import Lottie from "lottie-react-native";

const Tab = createMaterialTopTabNavigator();

const TopTabNavigation = () => {
  return (
    <View className="flex-1 bg-white">
      <SafeAreaView className="flex-1">
        <Tab.Navigator tabBar={(props) => <MyTabBar {...props} />}>
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              // @ts-ignore
              tabBarIcon: ({ ref }) => (
                <Lottie
                  ref={ref}
                  source={require("./Icons/HomeIcon.json")}
                  style={{ width: 40, height: 40 }}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Settings"
            component={SettingScreen}
            options={{
              // @ts-ignore
              tabBarIcon: ({ ref }) => (
                <Lottie
                  ref={ref}
                  source={require("./Icons/SettingsIcon.json")}
                  style={{ width: 40, height: 40 }}
                />
              ),
            }}
          />
        </Tab.Navigator>
      </SafeAreaView>
    </View>
  );
};

export default TopTabNavigation;
