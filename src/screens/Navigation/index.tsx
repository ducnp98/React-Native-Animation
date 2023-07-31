import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const buttonTitleClass = "text-white text-base font-bold text-center";

const Navigation = () => {
  const { navigate, reset } = useNavigation();
  const goToScreen = (screen: string) => {
    navigate(screen);
  };

  const goToScreenWithGoBack = (routeName: string) => {
    reset({
      index: 0,
      routes: [{ name: routeName }],
    });
  }

  return (
    <View className="flex-1 bg-white flex justify-center items-center">
      <View>
        <TouchableOpacity
          onPress={() => goToScreen("TopTabNavigation")}
          className="py-2 px-3 bg-cyan-300 rounded-lg mb-2"
        >
          <Text className={buttonTitleClass}>Top Tab Navigation</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => goToScreenWithGoBack("DrawerNavigation")}
          className="py-2 px-3 bg-cyan-400 rounded-lg mb-2"
        >
          <Text className={buttonTitleClass}>Drawer Navigation</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Navigation;
