import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  interpolate,
  Extrapolate,
  withSpring,
  runOnJS,
  withTiming,
} from "react-native-reanimated";
import { AnimatedCircle } from "./AnimatedCircle";
import MyIcon from "@app/commons/MyIcon";

const AddToCart = () => {
  const cartCounter = useSharedValue(0);
  const [cart, setCart] = useState(0);
  const rotateAnimated = useSharedValue(0);

  const cartCounterStyle = useAnimatedStyle(() => {
    return {
      opacity: cartCounter.value,
      transform: [{ scale: cartCounter.value }],
    };
  });

  const cartStyle = useAnimatedStyle(() => {
    const tranX = interpolate(
      cartCounter.value,
      [0, 0.2, 0.4, 0.6, 0.8, 1],
      [0, -20, 20, -20, 20, 0],
      {
        extrapolateLeft: Extrapolate.CLAMP,
        extrapolateRight: Extrapolate.CLAMP,
      }
    );
    return {
      transform: [{ translateX: withSpring(tranX) }],
    };
  });

  const addToCartAnimated = () => {
    cartCounter.value = 0;
    setCart((pre) => pre + 1);
    cartCounter.value = withSpring(1, { duration: 600 });
  };

  const handleAddToCart = () => {
    rotateAnimated.value = withTiming(180, { duration: 800 }, (_) => {
      rotateAnimated.value = 0;
      runOnJS(addToCartAnimated)();
    });
  };

  return (
      <View className="flex-1 flex-row justify-between px-4 items-center">
        <View className="py-1 mx-1 items-center w-4/12">
          <Animated.View className="relative" style={cartStyle}>
            <MyIcon name="cart" color="black" size={30} />
            <Animated.View
              style={[cartCounterStyle]}
              className="w-6 h-6 -top-3 left-4 absolute bg-red-500 justify-center items-center rounded-full"
            >
              <Text className="text-white font-bold text-sx">{cart}</Text>
            </Animated.View>
          </Animated.View>
        </View>
        <View className="w-6/12">
          <TouchableOpacity
            onPress={handleAddToCart}
            className="bg-gray-800 rounded-lg px-2 py-3"
          >
            <View>
              <Text className="text-white text-center font-bold">
                Add To Cart
              </Text>
              <AnimatedCircle rotateAnimated={rotateAnimated} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
  );
};

export default AddToCart;
