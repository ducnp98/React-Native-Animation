import React from "react";
import {
  Keyboard,
  SafeAreaView,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import InputSelection from "./InputSelection";

const OptionSelection = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <TouchableWithoutFeedback className="flex-1" onPress={Keyboard.dismiss}>
        <View className="flex-1">
          <View className="px-4">
            <View className="mb-4">
              <InputSelection />
            </View>
            <View className="mb-4">
              <InputSelection />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default OptionSelection;
