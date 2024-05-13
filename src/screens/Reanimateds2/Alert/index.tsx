import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import ToastTop from "./Toast";

const Alert = () => {
  return (
    <View className="flex-1 justify-center items-center relative">
      <ToastTop />

      <View>
        <TouchableOpacity
          className="py-2 px-3 rounded-lg mb-2 bg-green-400 w-40 items-center flex"
          onPress={() => {
            ToastTop.success("This is success message");
          }}
        >
          <Text className="text-white font-bold text-base">Click</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="py-2 px-3 rounded-lg mb-2 bg-red-400 w-40 items-center flex"
          onPress={() => {
            ToastTop.error("Error message");
          }}
        >
          <Text className="text-white font-bold text-base">Click</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="py-2 px-3 rounded-lg mb-2 bg-yellow-400 w-40 items-center flex"
          onPress={() => {
            ToastTop.warning("This is warning message");
          }}
        >
          <Text className="text-white font-bold text-base">Click</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Alert;
