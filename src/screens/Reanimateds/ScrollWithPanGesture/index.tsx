import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import {
  GestureHandlerRootView,
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from "react-native-gesture-handler";
import Animated, {
  cancelAnimation,
  useAnimatedGestureHandler,
  useDerivedValue,
  useSharedValue,
  withDecay,
  withDelay,
  withSpring,
} from "react-native-reanimated";
import Page, { PAGE_WIDTH } from "./Page";

const WIDTH = Dimensions.get("window").width;
const titles = ["What's", "up", "mobile", "devs?"];
const MAX_TRANSLATE_X = -PAGE_WIDTH * (titles.length - 1);

type ContextType = {
  x: number;
};


function ScrollWithPanGesture() {
  const translateX = useSharedValue(0);

  const clampedTranslateX = useDerivedValue(() => {
    return Math.max(Math.min(translateX.value, 0), MAX_TRANSLATE_X);
  });

  const panGestureEvent = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    ContextType
  >({
    onStart: (_, context) => {
      context.x = clampedTranslateX.value;
      cancelAnimation(translateX);
    },
    onActive: (event, context) => {
      translateX.value = event.translationX + context.x;
    },
    onEnd: (event) => {
      translateX.value = withDecay(
        { velocity: event.velocityX },
        (isFinish) => {
          const currentPage = Math.abs(Math.floor(clampedTranslateX.value / WIDTH))
          translateX.value = withDelay(
            200,
            withSpring(-WIDTH * currentPage, { duration: 2000 })
          );
        }
      );
    },
  });

  return (
    <View style={styles.container}>
      <PanGestureHandler onGestureEvent={panGestureEvent}>
        <Animated.View style={{ flexDirection: "row", height: 400 }}>
          {titles.map((title, index) => {
            return (
              <Page
                key={index.toString()}
                translateX={clampedTranslateX}
                index={index}
                title={title}
              />
            );
          })}
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
}

export default () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ScrollWithPanGesture />
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
