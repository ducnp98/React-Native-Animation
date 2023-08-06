import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MyIcon from "@app/commons/MyIcon";
import Product from "./components/Product";
import { SafeAreaView } from "react-native-safe-area-context";
import TabBarBottom from "./components/BottomTab/TabBarBottom";
import HomeScreen from "./components/HomeScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export const themeColors = {
  bgColor: (opacity: number) => `rgba(112, 66, 20, ${opacity})`,
  bgLight: "#d4a574",
  bgDark: "#8c5319",
  text: "#3C2A21",
};


export default function CoffeeShop() {
  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: { backgroundColor: "white" },
      }}
    >
      <Stack.Screen
        name="Home"
        options={{ headerShown: false }}
        component={HomeTabs}
      />
      <Stack.Screen
        name="Product"
        options={{ headerShown: false }}
        component={Product}
      />
    </Stack.Navigator>
  );
}

const HomeTabs = () => {
  return (
    <SafeAreaView className="flex-1">
      <Tab.Navigator
        tabBar={(props) => <TabBarBottom {...props} />}
        screenOptions={{ headerShown: false }}
      >
        <Tab.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <MyIcon
                name={focused ? "home" : "home-outline"}
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Tab.Screen
          name="FavoriteScreen"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <MyIcon
                name={focused ? "heart" : "heart-outline"}
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Tab.Screen
          name="CardScreen"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <MyIcon
                name={focused ? "cart" : "cart-outline"}
                size={size}
                color={color}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
}
