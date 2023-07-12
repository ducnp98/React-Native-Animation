import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const ReanimatedScreen = () => {
  const { navigate } = useNavigation()
  const goToScreen = (screen: string) => {
    navigate(screen)
  }

  return (
    <View className="flex-1 bg-white flex justify-center items-center">
      <View>
      <TouchableOpacity onPress={() => goToScreen('Begin')} className="py-2 px-3 bg-purple-200 rounded-lg mb-2">
          <Text className="text-white text-base font-bold text-center">Begin</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ReanimatedScreen;
