import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";

const HeaderScroll = () => {
  const translateY = useSharedValue(0);
  const onScrollEvent = useAnimatedScrollHandler((event) => {
    translateY.value = event.contentOffset.y;
  });

  const styleBottomHeader = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            translateY.value,
            [0, 100],
            [0, -80],
            Extrapolate.CLAMP
          ),
        },
      ],
    };
  });

  const styleBottomIconHeader = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        translateY.value,
        [0, 60],
        [1, 0],
        Extrapolate.CLAMP
      ),
      height: interpolate(
        translateY.value,
        [0, 60],
        [56, 20],
        Extrapolate.CLAMP
      ),
      width: interpolate(
        translateY.value,
        [0, 60],
        [56, 20],
        Extrapolate.CLAMP
      ),
    };
  });

  const styledGoBackButton = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        translateY.value,
        [0, 100],
        [0, 1],
        Extrapolate.CLAMP
      ),
      display: translateY.value > 60 ? "flex" : "none",
    };
  });

  const onClick = () => {
    console.log("On click");
  };

  return (
    <View className="flex-1 bg-white">
      <Animated.ScrollView onScroll={onScrollEvent} scrollEventThrottle={16}>
        <View className="mt-48 px-4" style={{ height: 1000 }}>
          <Text>Helloo</Text>
        </View>
      </Animated.ScrollView>

      <Animated.View
        className="w-full h-44 absolute bg-purple-500"
        style={styleBottomHeader}
      >
        <View className="flex w-full h-full items-center justify-around py-5 flex-row">
          <Animated.View
            style={styleBottomIconHeader}
            className="w-14 h-14 bg-white rounded-full"
          />
          <Animated.View
            style={styleBottomIconHeader}
            className="w-14 h-14 bg-white rounded-full"
          />
          <Animated.View
            style={styleBottomIconHeader}
            className="w-14 h-14 bg-white rounded-full"
          />
          <Animated.View
            style={styleBottomIconHeader}
            className="w-14 h-14 bg-white rounded-full"
          />
        </View>
      </Animated.View>
      <Animated.View className="absolute" style={styledGoBackButton}>
        <SafeAreaView>
          <TouchableOpacity onPress={onClick}>
            <Text className="text-white font-bold text-xl px-4 py-2">
              Go back
            </Text>
          </TouchableOpacity>
        </SafeAreaView>
      </Animated.View>
    </View>
  );
};

export default HeaderScroll;
