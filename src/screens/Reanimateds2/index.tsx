import { useNavigation } from "@react-navigation/native";
import React from "react";
import { SafeAreaView, ScrollView, Text, TouchableOpacity } from "react-native";

const buttonStyle = "py-2 px-3 rounded-lg mb-2";
const textStyle = "text-white text-base font-bold text-center";

const ReanimatedScreen2 = () => {
  const { navigate } = useNavigation();
  const goToScreen = (screen: string) => {
    navigate(screen);
  };

  return (
    <SafeAreaView className="flex-1 bg-white flex justify-center items-center">
      <ScrollView className="flex-1 w-full px-20 my-4">
        <TouchableOpacity
          onPress={() => goToScreen("Scrolling")}
          className={`${buttonStyle} bg-yellow-400`}
        >
          <Text className={textStyle}>Scrolling</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => goToScreen("MenuBar")}
          className={`${buttonStyle} bg-yellow-500`}
        >
          <Text className={textStyle}>MenuBar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => goToScreen("According")}
          className={`${buttonStyle} bg-yellow-600`}
        >
          <Text className={textStyle}>According</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => goToScreen("OptionSelection")}
          className={`${buttonStyle} bg-yellow-700`}
        >
          <Text className={textStyle}>Option Selection</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => goToScreen("DragAndDrop")}
          className={`${buttonStyle} bg-yellow-800`}
        >
          <Text className={textStyle}>Drag and Drop</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ReanimatedScreen2;
