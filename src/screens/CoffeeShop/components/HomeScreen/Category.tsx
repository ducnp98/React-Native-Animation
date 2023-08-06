import React from "react";
import Animated, {
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from "react-native-reanimated";
import { themeColors } from "../..";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Text } from "react-native";

type CategoryProps = {
  item: { id: number; title: string };
  activeCategory: number;
  setActiveCategory: (id: number) => void;
};

const Category = ({
  item,
  activeCategory,
  setActiveCategory,
}: CategoryProps) => {
  const isActive = item.id == activeCategory;
  let activeTextClass = isActive ? "text-white" : "text-gray-700";

  const buttonAnimated = useDerivedValue(() => {
    return isActive ? themeColors.bgLight : "rgba(0,0,0,0.07)";
  });

  const buttonStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: withTiming(buttonAnimated.value, { duration: 300 }),
    };
  });
  return (
    <Animated.View style={buttonStyle} className="mr-2 rounded-full shadow">
      <TouchableOpacity
        className="p-4 px-5"
        onPress={() => setActiveCategory(item.id)}
      >
        <Text className={"font-semibold " + activeTextClass}>{item.title}</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default Category