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

  const onNavigate = (screen: string) => {
    navigate("Animated2025Stack", { screen })
  }

  return (
    <View className="flex-1 bg-white flex justify-center items-center">
      <Button
        title="Draggable Bottom Sheet"
        onPress={() => onNavigate('DraggableBottomSheet')}
        color="bg-gray-300"
      />
      <Button
        title="Scroll Behavior"
        onPress={() => onNavigate('ScrollBehavior')}
        color="bg-gray-400"
      />
      <Button
        title="Tab With Header Scroll"
        onPress={() => onNavigate('TabWithHeaderScroll')}
        color="bg-gray-500"
      />
      <Button
        title="Bottom Tab Bar"
        onPress={() => onNavigate('BottomTabBar')}
        color="bg-gray-600"
      />
          <Button
        title="Add Cart Item"
        onPress={() => onNavigate('AddCartItem')}

        color="bg-gray-700"
      />
    </View>
  );
};

export default Animated2025Screen;
