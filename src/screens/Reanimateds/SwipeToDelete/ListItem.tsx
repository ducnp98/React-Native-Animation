import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
  PanGestureHandlerProps,
} from "react-native-gesture-handler";
import Animated, {
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { TaskInterface } from "./";

interface ListItemProps
  extends Pick<PanGestureHandlerProps, "simultaneousHandlers"> {
  task: TaskInterface;
  onDelete?: (task: TaskInterface) => void;
}

const LIST_ITEM_HEIGHT = 70;

const { width: SCREEN_WIDTH } = Dimensions.get("window");
const TRANSLATE_X_THRESHOLD = -SCREEN_WIDTH * 0.3;

type Context = {
  translateX: number
}

const ListItem: React.FC<ListItemProps> = ({
  task,
  onDelete,
  simultaneousHandlers,
}) => {
  const translateX = useSharedValue(0);
  const itemHeight = useSharedValue(LIST_ITEM_HEIGHT);
  const marginVertical = useSharedValue(10);
  const opacity = useSharedValue(1);

  const panGesture = useAnimatedGestureHandler<PanGestureHandlerGestureEvent, Context>({
    onStart: (event, context) => {
      context.translateX = translateX.value;
    },
    onActive: (event, context) => {
      translateX.value = event.translationX + context.translateX;
    },
    onEnd: () => {
      const shouldBeDismissed = translateX.value < TRANSLATE_X_THRESHOLD;
      if (shouldBeDismissed) {
        translateX.value = withTiming(-SCREEN_WIDTH);
        itemHeight.value = withTiming(0);
        marginVertical.value = withTiming(0);
        opacity.value = withTiming(0, undefined, (isFinished) => {
          if (isFinished && onDelete) {
            runOnJS(onDelete)(task);
          }
        });
      } else {
        translateX.value = withTiming(0);
      }
    },
  });

  const rStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: translateX.value,
      },
    ],
  }));

  const leftIconContainerStyle = useAnimatedStyle(() => {
    const opacity = withSpring(
      translateX.value < -SCREEN_WIDTH * 0.2 ? 1 : 0
    );
    return { opacity };
  });

  const rightIconContainerStyle = useAnimatedStyle(() => {
    const opacity = withSpring(
      translateX.value < SCREEN_WIDTH * 0.2 ? 0 : 1
    );
    return { opacity };
  });

  const rTaskContainerStyle = useAnimatedStyle(() => {
    return {
      height: itemHeight.value,
      marginVertical: marginVertical.value,
      opacity: opacity.value,
    };
  });

  return (
    <Animated.View className="w-full items-center" style={rTaskContainerStyle}>
      <Animated.View
        className="absolute items-center justify-center bg-red-500 rounded-xl"
        style={[styles.iconLeftContainer, leftIconContainerStyle]}
      >
        <Text className="text-white font-bold text-base">Delete</Text>
      </Animated.View>
      <Animated.View
        className="absolute items-center justify-center bg-green-500 rounded-xl"
        style={[styles.iconRightContainer, rightIconContainerStyle]}
      >
        <Text className="text-white font-bold text-base">Save</Text>
      </Animated.View>
      <PanGestureHandler
        simultaneousHandlers={simultaneousHandlers}
        onGestureEvent={panGesture}
      >
        <Animated.View
          className="w-11/12 justify-center pl-4 bg-white rounded-lg h-16"
          style={[styles.task, rStyle]}
        >
          <Text className="text-base">{task.title}</Text>
        </Animated.View>
      </PanGestureHandler>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  task: {
    shadowOpacity: 0.08,
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowRadius: 10,
    elevation: 5,
  },

  iconLeftContainer: {
    height: 60,
    width: LIST_ITEM_HEIGHT,
    right: "5%",
  },
  iconRightContainer: {
    height: 60,
    width: LIST_ITEM_HEIGHT,
    left: "5%",
  },
});

export default ListItem;
