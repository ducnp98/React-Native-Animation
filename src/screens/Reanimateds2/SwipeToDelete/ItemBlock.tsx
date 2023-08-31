import React, { useEffect } from "react";
import { View } from "react-native";
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
  PanGestureHandlerProps,
} from "react-native-gesture-handler";
import Animated, {
  Extrapolate,
  interpolate,
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
  withTiming,
} from "react-native-reanimated";

interface Props extends Pick<PanGestureHandlerProps, "simultaneousHandlers"> {
  index: number;
  selectedBlock: number;
  isScrolling: boolean;
  setSelectedBlock: (index: number) => void;
}

type ContextType = {
  translateX: number;
};

const TRANSLATE_X_THRESHOLD = 100;

const ItemBlock: React.FC<Props> = ({
  index,
  isScrolling,
  selectedBlock,
  setSelectedBlock,
  simultaneousHandlers,
}) => {
  const translateY = useSharedValue(100);
  const translateX = useSharedValue(0);

  const blockStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateY: translateY.value },
        { translateX: translateX.value },
      ],
    };
  });

  const actionStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateY: translateY.value },
        { translateX: interpolate(
          translateX.value,
          [0, -100],
          [-100, 1],
          Extrapolate.CLAMP
        ), },
        {
          scale: interpolate(
            translateX.value,
            [0, -100],
            [0, 1],
            Extrapolate.CLAMP
          ),
        },
      ],
      opacity: interpolate(
        translateX.value,
        [0, -100],
        [0.5, 1],
        Extrapolate.CLAMP
      ),
    };
  });

  useEffect(() => {
    if (selectedBlock > -1) {
      translateX.value = withSpring(0);
    }
    translateY.value = withDelay(index * 100, withTiming(0));
  }, [selectedBlock]);

  const onGestureEvent = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    ContextType
  >({
    onStart(_, context) {
      if (isScrolling) return;
      context.translateX = translateX.value;
      runOnJS(setSelectedBlock)(index);
    },
    onActive(event, context) {
      if (isScrolling) return;
      const moveX = event.translationX + context.translateX;
      translateX.value = moveX;
    },
    onEnd() {
      if (translateX.value < -TRANSLATE_X_THRESHOLD) {
        translateX.value = withSpring(-TRANSLATE_X_THRESHOLD);
      } else {
        translateX.value = withSpring(0);
      }
    },
  });

  return (
    <View className="relative flex justify-center">
      <Animated.View
        style={actionStyle}
        className={`w-20 h-20 bg-purple-${
          (index + 2) * 100
        } absolute right-4 rounded-lg`}
      />
      <PanGestureHandler
        onGestureEvent={onGestureEvent}
        simultaneousHandlers={simultaneousHandlers}
      >
        <Animated.View
          className="w-full px-4 py-2 relative flex justify-center"
          style={blockStyle}
        >
          <View
            className={`w-full h-24 bg-red-${(9 - index) * 100} rounded-xl`}
          />
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
};

export default ItemBlock;
