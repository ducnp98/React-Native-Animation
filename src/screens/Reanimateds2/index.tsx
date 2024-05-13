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

  const Button = ({
    title,
    navigate,
    color,
  }: {
    title: string;
    navigate: string;
    color: string;
  }) => {
    return (
      <TouchableOpacity
        onPress={() => goToScreen(navigate)}
        className={`${buttonStyle} ${color}`}
      >
        <Text className={textStyle}>{title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView className="flex-1 bg-white flex justify-center items-center">
      <ScrollView className="flex-1 w-full px-20 my-4">
        <Button title="Scrolling" navigate="Scrolling" color=" bg-yellow-400" />
        <Button title="MenuBar" navigate="MenuBar" color=" bg-yellow-500" />
        <Button title="According" navigate="According" color=" bg-yellow-600" />
        <Button title="Option selection" navigate="OptionSelection" color=" bg-yellow-700" />
        <Button title="Drag and Drop" navigate="DragAndDrop" color=" bg-yellow-800" />
        <Button title="Add to cart" navigate="AddToCart" color=" bg-yellow-900" />
        <Button title="Twitter" navigate="Twitter" color=" bg-yellow-950" />
        <Button title="BKash Payment" navigate="BKashPayment" color=" bg-red-950" />
        <Button title="Pull to refresh" navigate="PullToRefresh" color=" bg-red-900" />
        <Button title="Swipe to delete" navigate="SwipeToDelete" color=" bg-red-800" />
        <Button title="Onboarding" navigate="Onboarding" color=" bg-red-700" />
        <Button title="Notion header" navigate="NotionHeader" color=" bg-red-600" />
        <Button title="Menu catagories" navigate="MenuCatagories" color=" bg-red-500" />
        <Button title="Food recipe" navigate="FoodRecipe" color=" bg-red-400" />
        <Button title="Alert" navigate="Alert" color=" bg-red-300" />
        <Button title="Carousel" navigate="Carousel" color=" bg-red-200" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ReanimatedScreen2;
