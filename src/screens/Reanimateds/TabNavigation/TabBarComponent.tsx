import React, { useEffect, useRef } from "react";
import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import { LayoutChangeEvent, Pressable, Text, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

interface TabBarComponentProps {
  active?: boolean;
  options: BottomTabNavigationOptions;
  onLayout: (e: LayoutChangeEvent) => void;
  onPress: () => void;
}

const TabBarComponent = ({
  active,
  options,
  onLayout,
  onPress,
}: TabBarComponentProps) => {
  const ref = useRef(null);

  useEffect(() => {
    if (active && ref.current) {
      //@ts-ignore
      ref.current.play();
    }
  }, [active]);

  const animatedComponentCircleStyles = useAnimatedStyle(() => {
    return {
      transform: [{ scale: withTiming(active ? 1 : 0, { duration: 250 }) }],
    };
  });

  const animatedIconContainerStyles = useAnimatedStyle(() => {
    return {
      opacity: withTiming(active ? 1 : 0.5, { duration: 250 }),
    };
  });

  return (
    <Pressable
      onPress={onPress}
      onLayout={onLayout}
      style={{ width: 60, height: 60, margin: -5 }}
    >
      <View className="absolute top-0 left-0 right-0 bottom-0 items-center justify-center">
        {
          //@ts-ignore
          options.tabBarIcon ? options.tabBarIcon({ ref }) : <Text>?</Text>
        }
      </View>
      <Animated.View
        style={animatedComponentCircleStyles}
        className="flex-1 rounded-full bg-white"
      >
        <Animated.View
          style={animatedIconContainerStyles}
          className="absolute top-0 left-0 right-0 bottom-0 items-center justify-center"
        >
          {
            //@ts-ignore
            options.tabBarIcon ? options.tabBarIcon({ ref }) : <Text>?</Text>
          }
        </Animated.View>
      </Animated.View>
    </Pressable>
  );
};

export default TabBarComponent;
