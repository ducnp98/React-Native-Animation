import MyIcon from "../../../commons/MyIcon";
import React from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
  PanGestureHandlerProps,
} from "react-native-gesture-handler";
import Animated, {
  Extrapolate,
  Layout,
  SlideInLeft,
  SlideInRight,
  SlideOutLeft,
  SlideOutRight,
  interpolate,
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";

export interface Task {
  id: number;
  title: string;
}

interface Props extends Pick<PanGestureHandlerProps, "simultaneousHandlers"> {
  item: Task;
  onDelete: (id?: number) => void;
}

type Context = {
  translateX: number;
};

const { width: SCREEN_WIDTH } = Dimensions.get("window");

const TaskItem: React.FC<Props> = ({ item, onDelete }) => {
  const translateX = useSharedValue(0);

  const panGesture = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    Context
  >({
    onStart(event, context) {
      context.translateX = translateX.value;
    },
    onActive(event, context) {
      translateX.value = event.translationX + context.translateX;
    },
    onFinish() {
      const distance = translateX.value;
      console.log("distance", distance);
      if (distance > 0) {
        if (distance > 200) {
          if (onDelete) {
            runOnJS(onDelete)(item.id);
          }
          return;
        }
        translateX.value = distance < 70 ? withSpring(0) : withTiming(70);
      } else {
        if (distance < -200) {
          if (onDelete) {
            runOnJS(onDelete)(item.id);
          }
          return;
        }
        translateX.value = distance > -70 ? withSpring(0) : withTiming(-70);
      }
    },
  });

  const itemContainerStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
    };
  });

  const deleteIconStyle = useAnimatedStyle(() => {
    const opacity = withSpring(translateX.value < -SCREEN_WIDTH * 0.16 ? 1 : 0);
    return { opacity };
  });

  const saveIconStyle = useAnimatedStyle(() => {
    const opacity = withSpring(translateX.value >= SCREEN_WIDTH * 0.16 ? 1 : 0);
    return { opacity };
  });

  return (
    <Animated.View
      layout={Layout.stiffness(1)}
      entering={SlideInRight.duration(500)}
      exiting={SlideOutLeft.duration(500)}
      className="flex-row items-center"
    >
      <Animated.View style={deleteIconStyle} className='absolute right-5'>
        <TouchableOpacity
          onPress={() => onDelete(item.id)}
          className="w-14 h-14 bg-red-500 rounded-xl flex justify-center items-center "
        >
          <MyIcon name="delete" color="white" size={23} />
        </TouchableOpacity>
      </Animated.View>
      <Animated.View
        style={saveIconStyle}
        className="w-14 h-14 bg-green-500 rounded-xl flex justify-center items-center absolute left-5"
      >
        <MyIcon name="delete" color="white" size={23} />
      </Animated.View>
      <PanGestureHandler onGestureEvent={panGesture}>
        <Animated.View
          className="w-full items-center my-2"
          style={itemContainerStyle}
        >
          <View
            className="bg-white w-11/12 h-16 justify-center px-4 rounded-xl"
            style={styles.shadow}
          >
            <Text className="text-base text-gray-600">{item.title}</Text>
          </View>
        </Animated.View>
      </PanGestureHandler>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  shadow: {
    elevation: 5,
    shadowOpacity: 0.08,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowRadius: 10,
  },
});

export default TaskItem;
