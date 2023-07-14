import React, { useEffect } from "react";
import { Dimensions, SafeAreaView, Text, View } from "react-native";
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from "react-native-gesture-handler";
import Animated, {
  Easing,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withSpring,
  withTiming,
} from "react-native-reanimated";

const width = Dimensions.get("window").width;

type Context = {
  translateX: number;
};

const SwipeToUnlock = () => {
  const translateX = useSharedValue(0);
  const textAnimated = useSharedValue(1);
  const latestStatue = useSharedValue("lock");

  const panGestureEvent = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    Context
  >({
    onStart(event, context) {
      context.translateX = translateX.value;
    },
    onActive(event, context) {
      if (latestStatue.value === "lock" && event.translationX < 0) return;
      if (latestStatue.value === "unlock" && event.translationX > 0) return;
      translateX.value = event.translationX + context.translateX;
    },
    onEnd() {
      if (translateX.value < 150) {
        translateX.value = withSpring(0);
        latestStatue.value = "lock";
      } else {
        translateX.value = withSpring(width - 130);
        latestStatue.value = "unlock";
      }
    },
  });

  const swipeStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: translateX.value,
        },
      ],
    };
  });

  useEffect(() => {
    textAnimated.value = withDelay(
      2000,
      withRepeat(
        withTiming(0, { duration: 2000, easing: Easing.ease }),
        -1,
        true
      )
    );
  }, []);

  const textStyle = useAnimatedStyle(() => {
    return {
      opacity: textAnimated.value,
    };
  });

  return (
    <SafeAreaView className="flex-1 bg-purple-200">
      <View className="flex-1 flex items-center justify-center px-8">
        <View className="relative w-full h-16 bg-white rounded-full flex items-center justify-center flex-row p-1">
          <PanGestureHandler onGestureEvent={panGestureEvent}>
            <Animated.View
              style={swipeStyle}
              className="w-14 h-14 bg-purple-300 rounded-full absolute left-1"
            />
          </PanGestureHandler>
          <Animated.Text
            style={textStyle}
            className="font-semibold text-lg text-purple-300"
          >
            Swipe to unlock
          </Animated.Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SwipeToUnlock;
