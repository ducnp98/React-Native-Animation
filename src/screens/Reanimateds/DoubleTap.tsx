import React, { useCallback, useRef } from "react";
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  ImageBackground,
} from "react-native";
import {
  TapGestureHandler,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
  withTiming,
} from "react-native-reanimated";

const AnimatedImage = Animated.createAnimatedComponent(Image);

const DoubleTap = () => {
  const scale = useSharedValue(0);
  const opacity = useSharedValue(1);

  const doubleTapRef = useRef();

  const rStyle = useAnimatedStyle(() => ({
    transform: [{ scale: Math.max(scale.value, 0) }],
  }));

  const rTextStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  const onDoubleTap = useCallback(() => {
    scale.value = withSpring(1, undefined, (isFinished) => {
      if (isFinished) {
        scale.value = withDelay(500, withSpring(0));
      }
    });
  }, []);

  const onSingleTap = useCallback(() => {
    opacity.value = withTiming(0, { duration: 1000 }, (isFinished) => {
      if (isFinished) {
        opacity.value = withDelay(500, withTiming(1));
      }
    });
  }, []);

  return (
    <View className="flex-1 bg-white items-center justify-center">
      <TapGestureHandler waitFor={doubleTapRef} onActivated={onSingleTap}>
        <TapGestureHandler
          maxDelayMs={250}
          ref={doubleTapRef}
          numberOfTaps={2}
          onActivated={onDoubleTap}
        >
          <Animated.View>
            <ImageBackground
              source={require("../../assets/images/image.jpeg")}
              style={[styles.image]}
            >
              <AnimatedImage
                source={require("../../assets/images/heart.png")}
                style={[
                  styles.image,
                  {
                    shadowOffset: { width: 0, height: 20 },
                    shadowOpacity: 0.35,
                    shadowRadius: 35,
                  },
                  rStyle,
                ]}
                resizeMode={"center"}
              />
            </ImageBackground>
            <Animated.Text
              className="text-4xl text-center mt-8"
              style={rTextStyle}
            >
              🐢🐢🐢🐢
            </Animated.Text>
          </Animated.View>
        </TapGestureHandler>
      </TapGestureHandler>
    </View>
  );
};

export default () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <DoubleTap />
    </GestureHandlerRootView>
  );
};

const { width: SIZE } = Dimensions.get("window");

const styles = StyleSheet.create({
  image: {
    width: SIZE,
    height: SIZE,
  },
});
