import {
  View,
  Text,
  StyleSheet,
  Image,
  useWindowDimensions,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import React, { useState } from "react";
import Svg, { Path } from "react-native-svg";
import Animated, {
  runOnJS,
  useAnimatedProps,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

const AnimatedPath = Animated.createAnimatedComponent(Path);

const TapToPay = () => {
  const screen = useWindowDimensions();
  const progress = useSharedValue(0);
  const [viewLayout, setViewLayout] = useState<{
    width: number;
    height: number;
  }>({ width: 0, height: 0 });

  const CIRCLE_LENGTH = viewLayout.width + viewLayout.width * 0.15 || 385;

  const animatedProps = useAnimatedProps(() => ({
    strokeDashoffset: CIRCLE_LENGTH * (1 - progress.value),
  }));

  const onPressIn = () => {
    progress.value = withTiming(1, { duration: 2000 }, (isFinished) => {
      if (isFinished) {
        progress.value = withTiming(0);
        runOnJS(handleSuccess)();
      }
    });
  };

  const handleSuccess = () => {
    Alert.alert("payment complete");
  };

  const onPressOut = () => {
    if (progress.value !== 0) {
      progress.value = withTiming(0);
    }
  };

  return (
    <>
      <View
        className="flex-1 overflow-hidden relative items-center justify-end pb-5"
        onLayout={(e) => {
          setViewLayout(e.nativeEvent.layout);
        }}
      >
        <TouchableWithoutFeedback onPressIn={onPressIn} onPressOut={onPressOut}>
          <View className="items-center justify-center w-full">
            <Image
              source={require("./bKash-logo.png")}
              className="w-20 h-20 -mt-3"
            />
            <Text className="text-white text-lg">
              Tap and hold to Mobile Recharge
            </Text>
            <View
              className="bg-pink-600 absolute -z-10"
              style={[
                style.circle,
                {
                  width: screen.width,
                  height: screen.width,
                  borderRadius: screen.width,
                  bottom: -screen.width * 0.65,
                },
              ]}
            />
          </View>
        </TouchableWithoutFeedback>
        {viewLayout.width ? (
          <Svg className="absolute w-full h-44 bottom-6 -z-50">
            <AnimatedPath
              d={`M -10 86 Q ${viewLayout.width / 2.1} -20 ${
                viewLayout.width
              } 80`}
              fill="none"
              stroke="#e2136e"
              strokeWidth="5px"
              strokeDasharray={CIRCLE_LENGTH}
              animatedProps={animatedProps}
            />
          </Svg>
        ) : null}
      </View>
    </>
  );
};

export default TapToPay;

const style = StyleSheet.create({
  circle: { transform: [{ scaleX: 1.35 }] },
});
