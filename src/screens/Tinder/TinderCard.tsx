import React from "react";
import { tinderData } from "./data";
import { PanGestureHandlerProps } from "react-native-gesture-handler";
import {
  Dimensions,
  GestureResponderHandlers,
  Image,
  Text,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import TinderLike from "./TinderLike";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";

const { height, width } = Dimensions.get("window");

interface Props extends GestureResponderHandlers {
  item: tinderData;
  isFirst: boolean;
  swipe: Animated.SharedValue<{ x: number; y: number }>;
}

const TinderCard = ({ item, isFirst, swipe, ...rest }: Props) => {
  const rotate = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotate:
            interpolate(swipe.value.x, [-100, 0, 100], [8, 0, -8]) + "deg",
        },
        {
          translateX: swipe.value.x,
        },
        {
          translateY: swipe.value.y,
        },
      ],
      opacity: interpolate(swipe.value.x, [-300, -100, 0, 100, 300], [0.5, 1, 1, 1, 0.5]),
    };
  });

  const likeOpacity = useAnimatedStyle(() => {
    return {
      opacity: interpolate(swipe.value.x, [10, 100], [0, 1], Extrapolate.CLAMP),
    };
  });

  const rejectOpacity = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        swipe.value.x,
        [-100, -10],
        [1, 0],
        Extrapolate.CLAMP
      ),
    };
  });

  return (
    <Animated.View
      className="absolute top-2 justify-center items-center self-center"
      style={[{ width: width - 20, height: height - 200 }, isFirst && rotate]}
      {...rest}
    >
      <Image source={item.image} className="h-full w-full rounded-xl" />
      {isFirst ? (
        <>
          <Animated.View
            className="absolute top-26 left-5"
            style={[likeOpacity]}
          >
            <TinderLike type={"Like"} />
          </Animated.View>
          <Animated.View
            className="absolute top-26 right-5"
            style={[rejectOpacity]}
          >
            <TinderLike type={"Nope"} />
          </Animated.View>
        </>
      ) : null}
      <LinearGradient
        colors={["transparent", "transparent", "rgba(0,0,0,0.5)"]}
        className="w-full h-full absolute rounded-lg"
      >
        <Text className="absolute bottom-5 left-7 text-3xl text-white">
          {item.title}
        </Text>
      </LinearGradient>
    </Animated.View>
  );
};

export default TinderCard;
