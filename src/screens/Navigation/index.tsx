import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const Navigation = () => {
  const { navigate } = useNavigation();
  const goToScreen = (screen: string) => {
    navigate(screen);
  };
  return (
    <View className="flex-1 bg-white flex justify-center items-center">
      <View>
        <TouchableOpacity
          onPress={() => goToScreen("TopTabNavigation")}
          className="py-2 px-3 bg-cyan-300 rounded-lg mb-2"
        >
          <Text className="text-white text-base font-bold text-center">
            Top Tab Navigation
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Navigation;
