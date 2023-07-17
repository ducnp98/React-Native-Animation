import React, { useCallback } from "react";
import { Text, View, Dimensions, TouchableOpacity } from "react-native";
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedProps,
  useDerivedValue,
  Easing,
} from "react-native-reanimated";
import { ReText } from "react-native-redash";
import Svg, { Circle } from "react-native-svg";

const BACKGROUND_STROKE_COLOR = "#303858";
const STROKE_COLOR = "#A6E1FA";
const CIRCLE_LENGTH = 1000; // 2PI*R
const R = CIRCLE_LENGTH / (2 * Math.PI);

const { width, height } = Dimensions.get("window");

const CircleProgressBar = () => {
  const progress = useSharedValue(0);
  const AnimatedCircle = Animated.createAnimatedComponent(Circle);

  const animatedProps = useAnimatedProps(() => ({
    strokeDashoffset: CIRCLE_LENGTH * (1 - progress.value),
  }));

  const progressText = useDerivedValue(() => {
    return `${Math.floor(progress.value * 100)}`;
  });

  const onPress = useCallback(() => {
    progress.value = withTiming(progress.value > 0 ? 0 : 1, { duration: 10000, easing: Easing.linear });
  }, []);

  return (
    <View className="flex-1 bg-slate-600 items-center justify-center">
      <Svg className="absolute">
        <Circle
          cx={width / 2}
          cy={height / 2}
          r={R}
          stroke={BACKGROUND_STROKE_COLOR}
          strokeWidth={30}
        />
        <AnimatedCircle
          cx={width / 2}
          cy={height / 2}
          r={R}
          stroke={STROKE_COLOR}
          strokeWidth={15}
          strokeDasharray={CIRCLE_LENGTH}
          animatedProps={animatedProps}
          strokeLinecap={"round"}
          strokeDashoffset={CIRCLE_LENGTH}
        />
      </Svg>
      <ReText
        text={progressText}
        className="text-5xl text-gray-300 w-20 text-center"
      />
      <TouchableOpacity
        className="absolute bottom-20 w-44 h-16 bg-slate-700 rounded-xl items-center justify-center"
        onPress={onPress}
      >
        <Text className="text-3xl color-white">Run</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CircleProgressBar;
