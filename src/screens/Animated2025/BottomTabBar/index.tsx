

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { } from 'react'
import { StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Lottie from "lottie-react-native";
import tailwindColors from '@app/utils/colors';
import AnimatedTabBar from './AnimatedTabBar';

const home = require("./Icon/home.icon.json");
const settings = require("./Icon/settings.icon.json");
const chat = require("./Icon/chat.icon.json");
const upload = require("./Icon/upload.icon.json");

const Tab = createBottomTabNavigator();

const PlaceholderScreen = () => {
  return <View style={{ backgroundColor: tailwindColors['bg-pink'][300], flex: 1 }}></View>
}

const BOTTOM_TAB_DATA = [
  { id: 1, name: 'Home', component: PlaceholderScreen, source: home },
  { id: 2, name: 'Setting', component: PlaceholderScreen, source: settings },
  { id: 3, name: 'Chat', component: PlaceholderScreen, source: chat },
  { id: 4, name: 'Upload', component: PlaceholderScreen, source: upload },
]

const BottomTabBar = () => {
  return (
    <SafeAreaView edges={['right', 'left', 'bottom']} style={styles.container}>
      <Tab.Navigator tabBar={(props) => <AnimatedTabBar {...props} />}>
        {BOTTOM_TAB_DATA.map(x =>
          <Tab.Screen
            key={x.id}
            name={x.name}
            component={x.component}
            options={{
              headerShown: false,
              tabBarIcon: ({ ref }: any) => <Lottie ref={ref} source={x.source} style={styles.tabIcon} />
            }}
          />
        )}
      </Tab.Navigator>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: tailwindColors['bg-white']
  },
  tabIcon: { height: 36, width: 36 },
})

export default BottomTabBar