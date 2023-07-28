import React from "react";
import { View } from "react-native";
import Lottie from "lottie-react-native";

const LottieScreen = () => {
  return (
    <View className="flex-1">
      <View className="flex-1 bg-gray-800">
        <Lottie source={require("./astronot.json")} autoPlay loop />
      </View>
      <View className="flex-1 bg-white">
      <Lottie source={require("./delivery_guy.json")} autoPlay loop />
      </View>
    </View>
  );
};

export default LottieScreen;
