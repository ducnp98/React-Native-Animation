import React, { memo } from "react";
import { Dimensions } from "react-native";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";

type Props = {
  rotateAnimated: Animated.SharedValue<number>;
};

const { width } = Dimensions.get("window");

export const AnimatedCircle = memo<Props>(({ rotateAnimated }) => {
  const animatedStyle = useAnimatedStyle(() => {
    const scale = interpolate(
      rotateAnimated.value,
      [0, 45, 90, 135, 180],
      [1, 1.3, 1.5, 1.3, 1],
      Extrapolate.CLAMP
    );
    return {
      transform: [
        { translateX: -1 * (width / 3.5) },
        { rotateZ: `-${rotateAnimated.value}deg` },
        { translateX: width / 3.5 },
        { scale: scale },
      ],
    };
  });

  return (
    <Animated.View
      style={animatedStyle}
      className="absolute -z-10 right-1/3 rounded-full w-5 h-5 bg-gray-800"
    />
  );
});
