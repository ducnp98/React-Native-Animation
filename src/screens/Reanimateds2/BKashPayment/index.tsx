import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import TapToPay from "./TapToPay";

const BKashPayment = () => {
  return (
    <SafeAreaView className="flex-1 bg-gray-400 p-5">
      <View className="flex-1 bg-white">
        <View className="flex-1 px-5">
          <Text className="text-pink-600 text-xl mt-20 mb-12">
            Confirm to <Text className="font-bold">Mobile Recharge</Text>
          </Text>
        </View>
        <TapToPay />
      </View>
    </SafeAreaView>
  );
};

export default BKashPayment;
