import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import {
  showNotification,
  handleCancel,
  handleScheduleNotification,
} from "./notification.android";

const LocalNotification = () => {
  return (
    <View className="flex-1 justify-center items-center">
      <TouchableOpacity
        className="px-7 rounded-full py-3 bg-red-400"
        onPress={() => showNotification("", "")}
      >
        <Text className="text-white font-bold text-base">
          Click me to get notification
        </Text>
      </TouchableOpacity>
      <View className="h-4" />
      <TouchableOpacity
        className="px-7 rounded-full py-3 bg-orange-400"
        onPress={() => {
          setTimeout(() => {
            showNotification("", "");
          }, 10000);
        }}
      >
        <Text className="text-white font-bold text-base">
          Click me to get notification after click
        </Text>
      </TouchableOpacity>
      <View className="h-4" />
      <TouchableOpacity className="px-7 rounded-full py-3 bg-blue-400"
      onPress={() => handleCancel()}>
        <Text className="text-white font-bold text-base">
          Click me to cancel all notification
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LocalNotification;
