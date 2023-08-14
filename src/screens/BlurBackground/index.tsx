import { BlurView } from "@react-native-community/blur";
import React, { useEffect } from "react";
import { Dimensions, Image, StyleSheet, View } from "react-native";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";

const HEIGHT = Dimensions.get("screen").height;

const BlurBackground = () => {
  const viewTranslateX1 = useSharedValue(50);
  const viewTranslateY1 = useSharedValue(100);
  const viewTranslateX2 = useSharedValue(300);
  const viewTranslateY2 = useSharedValue(HEIGHT - 300);

  const view1Style = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: viewTranslateX1.value },
        { translateY: viewTranslateY1.value },
      ],
    };
  });

  const view2Style = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: viewTranslateX2.value },
        { translateY: viewTranslateY2.value },
      ],
    };
  });

  useEffect(() => {
    viewTranslateX1.value = withRepeat(
      withTiming(300, {
        duration: 10000,
        easing: Easing.bezier(0.02, 0.39, 0.9, 0.43),
      }),
      -1,
      true
    );
    viewTranslateY1.value = withRepeat(
      withTiming(HEIGHT - 100, {
        duration: 30000,
      }),
      -1,
      true
    );

    viewTranslateX2.value = withRepeat(
      withTiming(50, {
        duration: 10000,
        easing: Easing.bezier(0.02, 0.39, 0.9, 0.43),
      }),
      -1,
      true
    );
    viewTranslateY2.value = withRepeat(
      withTiming(100, {
        duration: 30000,
      }),
      -1,
      true
    );
  }, []);

  return (
    <View className="flex-1">
      <View className="flex-1">
        <Image
          className="absolute w-full h-full"
          source={require("./images/wallpaper.jpg")}
          resizeMode="cover"
        />
        <View className="absolute w-full h-full">
          <Animated.View
            style={view1Style}
            className="w-36 h-36 bg-rose-600 rounded-full opacity-50"
          />
          <Animated.View
            style={view2Style}
            className="w-36 h-36 bg-sky-600 rounded-full opacity-50"
          />
        </View>
        <BlurView style={styles.absolute} blurType={"light"} blurAmount={30} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  absolute: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

export default BlurBackground;
