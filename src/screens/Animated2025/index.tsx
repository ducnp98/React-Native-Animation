import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const textStyle = "text-white text-base font-bold text-center";

const Animated2025Screen = () => {
  const { navigate } = useNavigation()

  const Button = ({
    title,
    onPress,
    color,
  }: {
    title: string;
    onPress: () => void;
    color: string;
  }) => {
    return (
      <TouchableOpacity
        className={`rounded-lg py-2 px-4 mb-2 ${color}`}
        onPress={onPress}
      >
        <Text className={textStyle}>{title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View className="flex-1 bg-white flex justify-center items-center">
      <Button
        title="Draggable Bottom Sheet"
        onPress={() =>
          navigate("Animated2025Stack", { screen: "DraggableBottomSheet" })
        }
        color="bg-gray-300"
      />
      <Button
        title="Scroll Behavior"
        onPress={() =>
          navigate("Animated2025Stack", { screen: "ScrollBehavior" })
        }
        color="bg-gray-400"
      />
      <Button
        title="Tab With Header Scroll"
        onPress={() =>
          navigate("Animated2025Stack", { screen: "TabWithHeaderScroll" })
        }
        color="bg-gray-500"
      />
      <Button
        title="Bottom Tab Bar"
        onPress={() =>
          navigate("Animated2025Stack", { screen: "BottomTabBar" })
        }
        color="bg-gray-600"
      />
    </View>
  );
};

export default Animated2025Screen;
