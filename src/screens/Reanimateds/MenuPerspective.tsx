import React, { useCallback } from "react";
import {
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import {
  GestureHandlerRootView,
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from "react-native-gesture-handler";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

const THRESHOLD = SCREEN_WIDTH / 3;

const MenuPerspective = () => {
  const translateX = useSharedValue(0);

  const panGestureEvent = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    { x: number }
  >({
    onStart: (_, context) => {
      context.x = translateX.value;
    },
    onActive: (event, context) => {
      translateX.value = Math.max(event.translationX + context.x, 0);
    },
    onEnd: () => {
      if (translateX.value <= THRESHOLD) {
        translateX.value = withTiming(0);
      } else {
        translateX.value = withTiming(SCREEN_WIDTH / 2);
      }
    },
  });

  const rStyle = useAnimatedStyle(() => {
    const rotate = interpolate(
      translateX.value,
      [0, SCREEN_WIDTH / 2],
      [0, 3],
      Extrapolate.CLAMP
    );

    const borderRadius = interpolate(
      translateX.value,
      [0, SCREEN_WIDTH / 2],
      [0, 15],
      Extrapolate.CLAMP
    );

    return {
      borderRadius,
      transform: [
        { perspective: 100 },
        {
          translateX: translateX.value,
        },
        {
          rotateY: `-${rotate}deg`,
        },
      ],
    };
  }, []);

  const onPress = useCallback(() => {
    if (translateX.value > 0) {
      translateX.value = withTiming(0);
    } else {
      translateX.value = withTiming(SCREEN_WIDTH / 2);
    }
  }, []);

  return (
    <GestureHandlerRootView className="flex-1 text-gray-500">
      <SafeAreaView className="flex-1 bg-purple-300">
        <PanGestureHandler onGestureEvent={panGestureEvent}>
          <Animated.View className='bg-white flex-1' style={rStyle}>
            <TouchableOpacity
              className="bg-purple-300 m-4 absolute w-12 h-12 rounded-full"
              onPress={onPress}
            />
          </Animated.View>
        </PanGestureHandler>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default MenuPerspective;
