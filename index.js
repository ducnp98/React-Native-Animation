/**
 * @format
 */

import { AppRegistry } from "react-native";
import App from "./App";

import PushNotification from "react-native-push-notification";

PushNotification.configure({
  onNotification: function (notification) {
    console.log("LOCAL NOTIFICATION ==>", notification);
  },

  onNotification: function (notification) {
    console.log("NOTIFICATION:", notification);
  },

  popInitialNotification: true,
  requestPermissions: Platform.OS === "ios",
});

PushNotification.createChannel(
  {
    channelId: "not1", // (required)
    channelName: "Channel", // (required)
    channelDescription: "A channel to categorise your notifications", // (optional) default: undefined.
    playSound: false, // (optional) default: true
    soundName: "default", // (optional) See `soundName` parameter of `localNotification` function
    importance: 4, // (optional) default: 4. Int value of the Android notification importance
    vibrate: true,
  },
  (created) => console.log(`createChannel returned '${created}'`) // (optional) callback returns whether the channel was created, false means it already existed.
);

AppRegistry.registerComponent("PracticeReactNative", () => App);
