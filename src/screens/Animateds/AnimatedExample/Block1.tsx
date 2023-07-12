import React, { useRef } from "react";
import { Animated, Easing, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const Block1 = () => {
  const animatedValue = useRef(new Animated.Value(40)).current;

  const onClick = () => {
    animatedValue.setValue(40);
    Animated.timing(animatedValue, {
      toValue: 260,
      duration: 1500,
      easing: Easing.bounce,
      useNativeDriver: false,
    }).start();
  };

  return (
    <>
      <Animated.View
        className="w-28 h-28 mt-4 bg-red-200"
        style={{ marginLeft: animatedValue }}
      />
      <TouchableOpacity
        onPress={onClick}
        className="py-2 px-3 bg-red-300 mx-10 mt-4 rounded-lg"
      >
        <Text className="text-white text-center font-bold">Click</Text>
      </TouchableOpacity>
    </>
  );
};

export default Block1;
