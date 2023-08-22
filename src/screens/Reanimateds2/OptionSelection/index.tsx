import React from "react";
import { View } from "react-native";
import InputSelection from "./InputSelection";
import { SafeAreaView } from "react-native-safe-area-context";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const OptionSelection = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <KeyboardAwareScrollView
        extraScrollHeight={190}
        className="flex-1 bg-white"
      >
        <View className="px-4 flex-1">
          <View className="mb-4">
            <InputSelection />
          </View>
          <View className="mb-4">
            <InputSelection />
          </View>
          <View className="mb-4">
            <InputSelection />
          </View>
          <View className="mb-4">
            <InputSelection />
          </View>
          <View className="mb-4">
            <InputSelection />
          </View>
          <View className="mb-4">
            <InputSelection />
          </View>
          <View className="mb-4">
            <InputSelection />
          </View>
          <View className="mb-4">
            <InputSelection />
          </View>
          <View className="mb-4">
            <InputSelection />
          </View>
          <View className="mb-4 h-40">
            <InputSelection />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default OptionSelection;
