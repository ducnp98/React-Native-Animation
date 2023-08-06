import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import React from "react";
import { LayoutChangeEvent, Pressable, View } from "react-native";
import { Text } from "react-native-svg";
import { themeColors } from "../..";
import Animated, { useAnimatedStyle, useDerivedValue, withDelay, withSpring, withTiming } from "react-native-reanimated";

type Props = {
  active: boolean;
  options: BottomTabNavigationOptions;
  onLayout: (e: LayoutChangeEvent) => void;
  onPress: () => void;
};

const TabItem = ({ active, options, onLayout, onPress }: Props) => {
  const iconAnimated = useDerivedValue(() => {
    return active ? 1.15 : 1
  }, [active])

  const iconStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: withDelay(300, withSpring(iconAnimated.value))
        }
      ]
    }
  })
  return (
    <Pressable onPress={onPress} onLayout={onLayout} className="h-full flex justify-center">
      <Animated.View style={iconStyle}>

      {options.tabBarIcon ? (
        options.tabBarIcon({ focused: active, color: active ? themeColors.bgLight : 'white', size: 35 })
        ) : (
          <Text>?</Text>
          )}
          </Animated.View>
    </Pressable>
  );
};

export default TabItem;
