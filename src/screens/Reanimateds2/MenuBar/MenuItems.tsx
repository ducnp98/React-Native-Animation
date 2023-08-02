import React from "react";
import { Text, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  withDelay,
  withTiming,
} from "react-native-reanimated";

const MENU_LIST = ["Account", "Home", "Setting", "Card"];

type Props = {
  menuAnimated: Animated.SharedValue<number>;
};

const MenuItems = ({ menuAnimated }: Props) => {
  return (
    <View className="ml-12 mt-12">
      {MENU_LIST.map((item, index) => {
        const menuTextStyle = useAnimatedStyle(() => {
          return {
            opacity: withDelay(
              300 * (index + 1),
              withTiming(menuAnimated.value ? 1 : 0, { duration: 300 })
            ),
          };
        });
        return (
          <Animated.View
            key={index}
            style={menuTextStyle}
            className={`w-36 h-14 flex justify-center pl-6 my-2 ${
              !index ? "bg-white" : ""
            } rounded-r-lg`}
          >
            <Text
              className={`font-bold text-lg ${
                index ? "text-white" : "text-gray-500"
              }`}
            >
              {item}
            </Text>
          </Animated.View>
        );
      })}
    </View>
  );
};

export default MenuItems;
