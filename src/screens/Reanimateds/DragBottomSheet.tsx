import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  GestureHandlerRootView,
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from "react-native-gesture-handler";
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { WINDOW_HEIGHT } from "../../utils";

type ContextType = {
  translateY: number;
};

const BOTTOM_SHEET_MAX_HEIGHT = WINDOW_HEIGHT * 1;
const BOTTOM_SHEET_MIDDLE_HEIGHT = WINDOW_HEIGHT * 0.6;
const BOTTOM_SHEET_MIN_HEIGHT = WINDOW_HEIGHT * 0.1;

const DragBottomSheet = () => {
  const translateY = useSharedValue(0);
  const lastedDrag = useSharedValue(0);
  const lastedStatus = useSharedValue('down')

  const panGestureEvent = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    ContextType
  >({
    onStart: (event, context) => {
      context.translateY = translateY.value;
    },
    onActive: (event, context) => {
      translateY.value = event.translationY + context.translateY;
      lastedDrag.value = event.translationY;
    },
    onEnd: () => {
      const distanceDrag = lastedDrag.value;

      if (distanceDrag === 0) return;
      if (distanceDrag > 50) {
        if (lastedStatus.value === 'up') {
          translateY.value = withSpring(BOTTOM_SHEET_MIN_HEIGHT-BOTTOM_SHEET_MIDDLE_HEIGHT);
          lastedStatus.value = 'middle'
        } else {
          translateY.value = withSpring(0);
          lastedStatus.value = 'down'
        }
      } else {
        if (lastedStatus.value === 'down') {
          translateY.value = withSpring(BOTTOM_SHEET_MIN_HEIGHT-BOTTOM_SHEET_MIDDLE_HEIGHT);
          lastedStatus.value = 'middle'
        } else {
          translateY.value = withSpring(BOTTOM_SHEET_MIN_HEIGHT-BOTTOM_SHEET_MAX_HEIGHT +60);
          lastedStatus.value = 'up'
        }
      }
    },
  });

  const styleDrag = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: translateY.value,
        },
      ],
    };
  });

  return (
    <GestureHandlerRootView className="flex-1">
      <View className="flex-1 bg-white">
        <PanGestureHandler onGestureEvent={panGestureEvent}>
          <Animated.View
            className="bg-purple-300 w-full absolute rounded-t-xl"
            style={[styleDrag, styles.bottomSheet]}
          >
            <View className="flex items-center justify-center p-5">
              <View className="w-20 h-2 bg-white rounded-full" />
            </View>
          </Animated.View>
        </PanGestureHandler>
      </View>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  bottomSheet: {
    bottom: BOTTOM_SHEET_MIN_HEIGHT - BOTTOM_SHEET_MAX_HEIGHT,
    height: BOTTOM_SHEET_MAX_HEIGHT
  },
});

export default DragBottomSheet;
