import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const SettingScreen = () => {
  const navigation = useNavigation()
  const goBack = () => {
    navigation.goBack()
  }

  return (
    <View className="flex-1 bg-blue-300 items-center justify-center">
      <Text className="text-white font-bold text-xl">HomeScreen</Text>
      <TouchableOpacity onPress={goBack} className="px-7 py-3 bg-pink-400 mt-3 rounded-lg">
        <Text className="text-white text-base">
            Go back
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SettingScreen;
