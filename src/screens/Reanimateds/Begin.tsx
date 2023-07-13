import React, { useEffect } from "react";
import { View } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withRepeat,
  withTiming,
  Easing,
} from "react-native-reanimated";

const SIZE = 100.0;

const handleRotation = (progress: Animated.SharedValue<number>) => {
  "worklet";
  return `${progress.value * 2 * Math.PI}rad`;
};

const Begin = () => {
  const progress1 = useSharedValue(1);
  const progress2 = useSharedValue(1);

  const reanimatedStyle1 = useAnimatedStyle(() => {
    return {
      opacity: progress1.value,
    };
  }, []);

  const reanimatedStyle2 = useAnimatedStyle(() => {
    return {
      opacity: progress2.value,
      transform: [{ scale: progress2.value }],
      backgroundColor: progress2.value > 0.7 ? 'red' : 'blue'
    };
  }, []);

  useEffect(() => {
    progress1.value = withRepeat(withTiming(0, { duration: 2000, easing: Easing.circle}), -1, true);
    progress2.value = withRepeat(withSpring(0.5), -1, true)
  }, []);

  return (
    <View className="flex-1 bg-white items-center justify-center gap-4">
      <Animated.View
        className="bg-purple-400 rounded-lg"
        style={[{ height: SIZE, width: SIZE }, reanimatedStyle1]}
      />
      <Animated.View
        className=" rounded-lg"
        style={[{ height: SIZE, width: SIZE }, reanimatedStyle2]}
      />
    </View>
  );
};

export default Begin;
