import React, { useRef } from "react";
import { Animated, Easing, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const Block2 = () => {
  const animatedValue = useRef(new Animated.Value(0)).current;

  const onClick = () => {
    animatedValue.setValue(0);
    Animated.timing(animatedValue, {
      toValue: 100,
      duration: 1500,
      easing: Easing.bounce,
      useNativeDriver: true,
    }).start();
  };

  return (
    <>
      <Animated.View
        className="w-28 h-28 mt-4 bg-red-400"
        style={{ marginLeft: 40, transform: [{ translateY: animatedValue }] }}
      />
      <TouchableOpacity
        onPress={onClick}
        className="py-2 px-3 bg-red-500 mx-10 mt-4 rounded-lg"
      >
        <Text className="text-white text-center font-bold">Click</Text>
      </TouchableOpacity>
    </>
  );
};

export default Block2;
