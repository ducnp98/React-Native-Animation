import React, { useRef } from "react";
import { Animated, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const Block4 = () => {
  const animatedValue = useRef(new Animated.Value(0)).current;

  const opacityView = {
    opacity: animatedValue.interpolate({
      inputRange: [0, 100],
      outputRange: [1, 0.3],
      extrapolate: "clamp",
    }),
  };

  const blockView = {
    transform: [
      {
        translateY: animatedValue.interpolate({
          inputRange: [0, 50],
          outputRange: [0, -56],
          extrapolate: "clamp",
        }),
      },
      {
        translateX: animatedValue.interpolate({
          inputRange: [0, 50],
          outputRange: [0, 20],
          extrapolate: "clamp",
        }),
      },
      {
        scaleY: animatedValue.interpolate({
          inputRange: [0, 50],
          outputRange: [1, 0.7],
          extrapolate: "clamp",
        }),
      },
      {
        scaleX: animatedValue.interpolate({
          inputRange: [0, 50],
          outputRange: [1, 0.7],
          extrapolate: "clamp",
        }),
      },
    ],
  };

  return (
    <>
      <Animated.View
        className="w-full h-12 mt-6 bg-red-700"
        style={opacityView}
      />
      <Animated.View
        className="w-10 h-10 rounded-md mt-3 ml-3 bg-yellow-600"
        style={blockView}
      />
      <ScrollView
        scrollEventThrottle={16}
        onScroll={(e) => animatedValue.setValue(e.nativeEvent.contentOffset.y)}
      >
        <View style={{ height: 500 }} />
      </ScrollView>
    </>
  );
};

export default Block4;
