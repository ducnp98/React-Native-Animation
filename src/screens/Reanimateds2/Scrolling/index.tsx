import { useThemeContext } from "../../../../App";
import React, { useReducer, useRef, useState } from "react";
import {
  Dimensions,
  LayoutChangeEvent,
  StyleSheet,
  Text,
  View,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import Animated, {
  runOnJS,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withDelay,
  withTiming,
} from "react-native-reanimated";
import { Svg } from "react-native-svg";
import TabButton from "./TabButton";
import { tabsData } from "./data";

const HEIGHT = Dimensions.get("screen").height;
const WIDTH = Dimensions.get("screen").width;
const AnimatedSvg = Animated.createAnimatedComponent(Svg);

const Scrolling = () => {
  const scrollViewRef = useRef(null);
  const { isScrolling, setIsScrolling } = useThemeContext();
  const footerAnimated = useSharedValue(1);
  const [activeIndex, setActiveIndex] = useState(0);

  const footerStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(footerAnimated.value),
      transform: [{ translateY: withTiming(footerAnimated.value ? 0 : 100) }],
    };
  });

  const onScrollTo = (index: number) => {
    //@ts-ignore
    scrollViewRef?.current.scrollTo({
      x: 0,
      y: HEIGHT * index,
      animated: true,
    });
  };

  const handler = useAnimatedScrollHandler({
    onBeginDrag() {
      footerAnimated.value = 0;
      setIsScrolling && runOnJS(setIsScrolling)(true);
    },
    onScroll(event, context) {
      const offsetY = event.contentOffset.y;
      const int = Math.floor(offsetY / (HEIGHT - 30));
      runOnJS(setActiveIndex)(int);
    },
    onEndDrag: () => {
      footerAnimated.value = withDelay(
        500,
        withTiming(1, undefined, (isFinished) => {
          if (isFinished && setIsScrolling) {
            runOnJS(setIsScrolling)(false);
          }
        })
      );
    },
  });

  const reducer = (state: any, action: { x: number; index: number }) => {
    return [...state, { x: action.x, index: action.index }];
  };

  const [layout, dispatch] = useReducer(reducer, []);

  const handleLayout = (event: LayoutChangeEvent, index: number) => {
    dispatch({ x: event.nativeEvent.layout.x, index });
  };

  const xOffset = useDerivedValue(() => {
    if (layout.length !== 4) return 0;
    return [...layout].find(({ index }) => index === activeIndex)?.x - 4;
  }, [activeIndex, layout]);

  const shadowStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: withTiming(xOffset.value, { duration: 250 }) }],
    };
  });

  const onPressButton = (index: number) => {
    setActiveIndex(index);
    onScrollTo(index);
  };

  return (
    <SafeAreaView
      className="flex-1 flex items-center"
      edges={["right", "left", "top"]}
    >
      <View className="h-10 w-1/2 flex justify-center items-center rounded-lg bg-rose-400 my-4">
        <Text className="text-white text-lg font-semibold">
          Is scrolling: {isScrolling ? "YES" : "NO"}
        </Text>
      </View>
      <Animated.ScrollView
        ref={scrollViewRef}
        onScroll={handler}
        style={{ flex: 1 }}
        scrollEventThrottle={16}
      >
        <LinearGradient
          style={{ width: WIDTH, height: HEIGHT * 4 }}
          colors={["#FFCACC", "#B2A4FF", "#A7727D", "#867070"]}
          start={{ x: 1, y: 0 }}
          end={{ x: 1, y: 1 }}
          className="w-full h-10"
        />
      </Animated.ScrollView>
      <Animated.View
        style={footerStyle}
        className="w-full absolute bottom-0 bg-white"
      >
        <View className="mb-5 flex-row py-4 justify-around">
          <AnimatedSvg
            height={60}
            width={110}
            className="absolute left-0"
            style={shadowStyle}
          >
            <View
              style={style.shadow}
              className="bg-white w-16 h-16 rounded-2xl mt-3"
            />
          </AnimatedSvg>
          {tabsData.map((item, index) => (
            <TabButton
              key={index}
              icon={item.icon}
              index={item.index}
              color={item.color}
              onLayout={handleLayout}
              onPressButton={onPressButton}
            />
          ))}
        </View>
      </Animated.View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  shadow: {
    backgroundColor: "white",
    elevation: 8,
    shadowColor: "black",
    shadowRadius: 3,
    shadowOffset: { height: 6, width: 1 },
    shadowOpacity: 0.2,
    borderWidth: 1,
    borderColor: "#EEEEEE",
  },
});

export default Scrolling;
