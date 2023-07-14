import React from "react";
import { Dimensions, View, StyleSheet, Text } from "react-native";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";

const { height, width } = Dimensions.get("window");

const SIZE = width * 0.7;

interface PageProps {
  index: number;
  translateX: Animated.SharedValue<number>;
  title: string;
}

const Page: React.FC<PageProps> = ({ index, translateX, title }) => {
  const inputRange = [(-index - 1) * width, index * width, (index + 1) * width];

  const rStyle = useAnimatedStyle(() => {
    const scale = interpolate(
      translateX.value,
      inputRange,
      [0, 1, 0],
      Extrapolate.CLAMP
    );

    const borderRadius = interpolate(
      translateX.value,
      inputRange,
      [0, SIZE / 2, 0],
      Extrapolate.CLAMP
    );

    return {
      borderRadius,
      transform: [{ scale }],
    };
  });

  const rTextStyle = useAnimatedStyle(() => {
    const translateY = interpolate(
      translateX.value,
      inputRange,
      [height / 2, 0, -height / 2],
      Extrapolate.CLAMP
    );

    const opacity = interpolate(
      translateX.value,
      inputRange,
      [-2, 1, -2],
      Extrapolate.CLAMP
    );

    return {
      opacity,
      transform: [{ translateY: translateY }],
    };
  });

  return (
    <View
      className={`flex items-center justify-center bg-purple-${index + 2}00`}
      style={[ styles.container ]}
    >
      <Animated.View style={[styles.square, rStyle]} />
      <Animated.View className='absolute' style={[rTextStyle]}>
        <Text className="text-6xl text-white uppercase font-extrabold">{title}</Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width,
    height,
  },
  square: {
    width: SIZE,
    height: SIZE,
    backgroundColor: "rgba(0, 0, 256, 0.4)",
  },
});

export { Page };
