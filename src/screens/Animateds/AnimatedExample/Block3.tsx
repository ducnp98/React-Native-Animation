import React, { useRef } from "react";
import { Animated, Easing, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const Block3 = () => {
  const animatedValue = useRef(new Animated.ValueXY({x: 40, y: 20})).current;

  const onClick = () => {
    animatedValue.setValue({x: 40, y: 20});
    Animated.timing(animatedValue, {
      toValue: {
        x: 260,
        y: 100
      },
      duration: 1500,
      easing: Easing.bounce,
      useNativeDriver: false,
    }).start();
  };

  return (
    <>
      <Animated.View
        className="w-28 h-28 mt-4 bg-red-500"
        style={{ marginLeft: animatedValue.x, marginTop: animatedValue.y }}
      />
      <TouchableOpacity
        onPress={onClick}
        className="py-2 px-3 bg-red-600 mx-10 mt-4 rounded-lg"
      >
        <Text className="text-white text-center font-bold">Click</Text>
      </TouchableOpacity>
    </>
  );
};

export default Block3;
