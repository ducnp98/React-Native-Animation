import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { Text } from "react-native";
import { Image, StatusBar, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
} from "react-native-reanimated";

const WelcomeFoodRecipe = () => {
  const circle1 = useSharedValue(0);
  const circle2 = useSharedValue(0);

  const { reset } = useNavigation();

  useEffect(() => {
    circle1.value = withDelay(100, withSpring(180));
    circle2.value = withDelay(300, withSpring(250));

    setTimeout(() => {
      reset({
        index: 1,
        routes: [{ name: "HomeScreen" }],
      });
    }, 2000);
  }, [circle1, circle2]);

  const circle1Style = useAnimatedStyle(() => {
    return {
      padding: circle1.value,
    };
  });

  const circle2Style = useAnimatedStyle(() => {
    return {
      padding: circle2.value,
    };
  });

  return (
    <View className="flex-1 justify-center items-center bg-amber-500 space-y-10">
      <Animated.View
        className="w-52 h-52 bg-white/20 justify-center items-center rounded-full"
        style={[circle2Style]}
      >
        <Animated.View
          className="w-52 h-52 bg-white/20 justify-center items-center rounded-full"
          style={[circle1Style]}
        >
          <Image source={require("./images/logo.png")} className="w-40 h-40" />
        </Animated.View>
      </Animated.View>

      <View className="flex items-center space-y-1">
        <Text className="text-white text-6xl font-bold">Foody</Text>

        <Text className="text-white text-lg font-bold">
          Food is always right
        </Text>
      </View>
    </View>
  );
};

export default WelcomeFoodRecipe;
