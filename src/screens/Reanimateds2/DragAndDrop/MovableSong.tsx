import React, { useState } from "react";
import { View, useWindowDimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Song, { SONG_HEIGHT } from "./Song";
import Animated, {
  Easing,
  cancelAnimation,
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedReaction,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { PanGestureHandler } from "react-native-gesture-handler";
import MyIcon from "@app/commons/MyIcon";
import { clamp, objectMove } from "./utils";

interface IProps {
  id: string;
  artist: string;
  cover: string;
  title: string;
  positions: Animated.SharedValue<any>;
  scrollY: Animated.SharedValue<number>;
  songsCount: number;
  isEdit: boolean;
}

const MovableSong: React.FC<IProps> = (props) => {
  const { id, artist, cover, title, positions, scrollY, songsCount, isEdit } =
    props;
  const dimensions = useWindowDimensions();
  const insets = useSafeAreaInsets();
  const [moving, setMoving] = useState(false);
  const top = useSharedValue(positions.value[id] * SONG_HEIGHT);

  const dragIconAnimated = useDerivedValue(() => {
    return isEdit ? 50 : 0;
  }, [isEdit]);

  useAnimatedReaction(
    () => positions.value[id],
    (currentPosition, previousPosition) => {
      if (currentPosition !== previousPosition) {
        if (!moving) {
          top.value = withSpring(currentPosition * SONG_HEIGHT);
        }
      }
    },
    [moving]
  );

  const gestureHandler = useAnimatedGestureHandler({
    onStart() {
      runOnJS(setMoving)(true);
    },
    onActive(event) {
      const SCROLL_HEIGHT_THRESHOLD = SONG_HEIGHT;
      const positionY = event.absoluteY + scrollY.value;

      if (positionY <= scrollY.value + SCROLL_HEIGHT_THRESHOLD) {
        scrollY.value = withTiming(0, { duration: 1500 });
      } else if (
        positionY >=
        scrollY.value + dimensions.height - SCROLL_HEIGHT_THRESHOLD
      ) {
        const contentHeight = songsCount * SONG_HEIGHT;
        const containerHeight = dimensions.height - insets.top - insets.bottom;
        const maxScroll = contentHeight - containerHeight;
        scrollY.value = withTiming(maxScroll, { duration: 1500 });
      } else {
        cancelAnimation(scrollY);
      }

      top.value = withTiming(positionY - SONG_HEIGHT, {
        duration: 16,
      });

      const newPosition = clamp(
        Math.floor(positionY / SONG_HEIGHT),
        0,
        songsCount - 1
      );

      if (newPosition !== positions.value[id]) {
        positions.value = objectMove(
          positions.value,
          positions.value[id],
          newPosition
        );
      }
    },
    onFinish() {
      top.value = withTiming(positions.value[id] * SONG_HEIGHT);
      runOnJS(setMoving)(false);
    },
  });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      top: top.value,
      zIndex: moving ? 1 : 0,
      shadowColor: "black",
      shadowOffset: {
        height: 0,
        width: 0,
      },
      shadowOpacity: withSpring(moving ? 0.3 : 0),
      shadowRadius: 10,
    };
  }, [moving]);

  const dragIconStyle = useAnimatedStyle(() => {
    return {
      width: withTiming(dragIconAnimated.value, { easing: Easing.ease }),
    };
  });

  return (
    <Animated.View
      style={animatedStyle}
      className="bg-white absolute left-0 right-0"
    >
      <View className="flex-row items-center">
        <PanGestureHandler onGestureEvent={gestureHandler}>
          <Animated.View style={dragIconStyle}>
            <View className="w-12 h-12 flex justify-center items-center ml-2">
              <MyIcon name="menu" size={29} color={"#B7B7B7"} />
            </View>
          </Animated.View>
        </PanGestureHandler>
        <Song artist={artist} cover={cover} title={title} />
      </View>
    </Animated.View>
  );
};

export default MovableSong;
