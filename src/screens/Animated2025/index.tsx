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
        color="bg-lime-300"
      />
    </View>
  );
};

export default Animated2025Screen;
