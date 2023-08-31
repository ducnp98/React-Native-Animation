import {
  Text,
  StyleSheet,
  View,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from "react-native";
import React, { useState } from "react";
import {
  FlatList,
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from "react-native-gesture-handler";
import Lottie from "lottie-react-native";
import Animated, {
  Extrapolate,
  interpolate,
  runOnJS,
  scrollTo,
  useAnimatedGestureHandler,
  useAnimatedRef,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import MyIcon from "@app/commons/MyIcon";
import { SafeAreaView } from "react-native-safe-area-context";

const REFRESH_AREA_HEIGHT = 130;

type ContextType = {
  startY: number;
};

export default function PullToRefresh() {
  const [toggleLottie, setToggleLottie] = useState(false);
  const [toggleGesture, setToggleGesture] = useState(true);
  const [gestureActive, setGestureActive] = useState(false);

  const flatListRef = useAnimatedRef();

  const translationY = useSharedValue(0);
  const pullUpTranslate = useSharedValue(0);

  const fetchData = () => {
    setTimeout(() => {
      translationY.value = withTiming(0, { duration: 700 }, (finished) => {
        pullUpTranslate.value = 0;

        runOnJS(setToggleLottie)(false);
      });
    }, 3000);
  };

  const pullUpAnimation = () => {
    pullUpTranslate.value = withDelay(
      0,
      withTiming(
        pullUpTranslate.value === 0 ? -100 : 0,
        { duration: 200 },
        (finished) => {
          if (finished) {
            runOnJS(setToggleLottie)(true);
            runOnJS(fetchData)();
          }
        }
      )
    );
  };

  const gestureHandler = useAnimatedGestureHandler<
  PanGestureHandlerGestureEvent,
  ContextType
  >({
    onStart: (_, ctx) => {
      ctx.startY = translationY.value;
      runOnJS(setGestureActive)(true);
    },
    onActive: (event, ctx) => {
      const total = ctx.startY + event.translationY;

      if (total < REFRESH_AREA_HEIGHT) {
        translationY.value = withTiming(total);
      } else {
        translationY.value = withSpring(REFRESH_AREA_HEIGHT, { duration: 800});
      }

      if (total < 0) {
        translationY.value = 0;
        scrollTo(flatListRef, 0, total * -1, false);
      }
    },
    onEnd: () => {
      runOnJS(setGestureActive)(false);
      if (translationY.value <= REFRESH_AREA_HEIGHT - 1) {
        translationY.value = withTiming(0, { duration: 200 });
      } else {
        runOnJS(pullUpAnimation)();
      }
      if (!(translationY.value > 0)) {
        runOnJS(setToggleGesture)(false);
      }
    },
  });

  const handleOnScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const position = event.nativeEvent.contentOffset.y;
    if (position === 0) {
      setToggleGesture(true);
    } else if (position > 0 && toggleGesture && !gestureActive) {
      setToggleGesture(false);
    }
  };

  const animatedSpace = useAnimatedStyle(() => {
    return {
      height: translationY.value,
    };
  });

  const pullDownIconSection = useAnimatedStyle(() => {
    const rotate = interpolate(
      translationY.value,
      [0, REFRESH_AREA_HEIGHT],
      [0, 180]
    );
    return {
      transform: [{ rotate: `${rotate}deg` }],
    };
  });

  const pullUpTranslateStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      translationY.value,
      [58, REFRESH_AREA_HEIGHT],
      [0, 1]
    );

    return {
      opacity,
      transform: [
        {
          translateY: pullUpTranslate.value,
        },
      ],
    };
  });

  const statusBarStyle = useAnimatedStyle(() => {
    const translate = interpolate(
      translationY.value,
      [80, REFRESH_AREA_HEIGHT],
      [0, -70],
      {
        extrapolateLeft: Extrapolate.CLAMP,
        extrapolateRight: Extrapolate.CLAMP,
      }
    );

    return {
      transform: [
        {
          translateY: translate,
        },
      ],
    };
  });

  return (
    <>
      <Animated.View className="h-14 bg-rose-600" style={statusBarStyle} />
      <SafeAreaView className="flex-1 bg-slate-100" edges={["left", "right"]}>
        <View className="flex-1 mx-4 mb-4">
          <Animated.View
            className="h-36 items-center justify-center w-full overflow-hidden bg-slate-300"
            style={[animatedSpace]}
          >
            <Animated.View
              className="justify-center items-center"
              style={[pullUpTranslateStyle]}
            >
              <Animated.View style={pullDownIconSection}>
                <MyIcon
                  name="arrow-up-circle-outline"
                  color="black"
                  size={35}
                />
              </Animated.View>
              <Text>Pull Down to Refresh</Text>
            </Animated.View>
            {toggleLottie && (
              <>
                <Lottie
                  source={require("./circlesRotate.json")}
                  style={styles.lottieView}
                  autoPlay
                />
              </>
            )}
          </Animated.View>

          <FlatList
            //@ts-ignore
            ref={flatListRef}
            data={[...Array(5).keys()]}
            onScroll={(e) => handleOnScroll(e)}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item.toString()}
            renderItem={({ item }) => <View className={`bg-red-${5 - item}00 w-full h-52 rounded-lg my-2`} />}
          />
          {toggleGesture && (
            <PanGestureHandler onGestureEvent={gestureHandler}>
              <Animated.View className="absolute top-0 left-0 h-52 z-50 w-full" />
            </PanGestureHandler>
          )}
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  lottieView: {
    width: 80,
    height: 80,
    backgroundColor: "transparent",
    marginTop: -15,
  },
});
