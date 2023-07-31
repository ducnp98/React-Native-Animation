import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

type Props = {};

const HomeScreen = (props: Props) => {
  const navigation = useNavigation()
  const goToSetting = () => {
    navigation.navigate('Settings')
  }

  return (
    <View className="flex-1 bg-pink-300 items-center justify-center">
      <Text className="text-white font-bold text-xl">HomeScreen</Text>
      <TouchableOpacity onPress={goToSetting} className="px-7 py-3 bg-pink-400 mt-3 rounded-lg">
        <Text className="text-white text-base">
            Go to Settings
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
