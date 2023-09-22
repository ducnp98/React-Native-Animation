import { StyleSheet, Text, View, useWindowDimensions } from "react-native";
import React from "react";
import Animated, {
  Extrapolate,
  SharedValue,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import LottieView from "lottie-react-native";
import { OnboardingData } from "./data";

type Props = {
  index: number;
  x: SharedValue<number>;
  item: OnboardingData;
};

const RenderItem = ({ index, x, item }: Props) => {
  const { width: SCREEN_WIDTH } = useWindowDimensions();

  const lottieAnimationStyle = useAnimatedStyle(() => {
    const translateYAnimation = interpolate(
      x.value,
      [
        (index - 1) * SCREEN_WIDTH,
        index * SCREEN_WIDTH,
        (index + 1) * SCREEN_WIDTH,
      ],
      [200, 0, -200],
      Extrapolate.CLAMP
    );

    return {
      transform: [{ translateY: translateYAnimation }],
    };
  });

  const circleAnimation = useAnimatedStyle(() => {
    const scale = interpolate(
      x.value,
      [
        (index - 1) * SCREEN_WIDTH,
        index * SCREEN_WIDTH,
        (index + 1) * SCREEN_WIDTH,
      ],
      [1, 4, 4],
      Extrapolate.CLAMP
    );

    return {
      transform: [{ scale: scale }],
    };
  });

  return (
    <View
      className="flex-1 justify-center items-center mb-28"
      style={{ width: SCREEN_WIDTH }}
    >
      <View style={styles.circleContainer} className="items-center justify-end">
        <Animated.View
          style={[
            {
              width: SCREEN_WIDTH,
              height: SCREEN_WIDTH,
              borderRadius: SCREEN_WIDTH / 2,
              backgroundColor: item.backgroundColor,
            },
            circleAnimation,
          ]}
        />
      </View>
      <Animated.View style={lottieAnimationStyle}>
        <LottieView
          source={item.animation}
          style={{
            width: SCREEN_WIDTH * 0.9,
            height: SCREEN_WIDTH * 0.9,
          }}
          autoPlay
          loop
        />
      </Animated.View>
      <Text
        className="text-center font-bold text-4xl mb-3 mx-5"
        style={{ color: item.textColor }}
      >
        {item.text}
      </Text>
    </View>
  );
};

export default RenderItem;

const styles = StyleSheet.create({
  circleContainer: {
    ...StyleSheet.absoluteFillObject,
  },
});
