import React, { useState } from "react";
import { Image, Text, TextInput, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Categories from "./Categories";
import Recipes from "./Recipes";
import MyImage from "./MyImage";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";

const HomeFoodRecipe = () => {
  const insets = useSafeAreaInsets();
  const [selectedCate, setSelectedCate] = useState<string>("");
  const scrollY = useSharedValue(0);

  const headerStyle = useAnimatedStyle(() => {
    return {
      height: interpolate(
        scrollY.value,
        [0, 50],
        [250, 130],
        Extrapolate.CLAMP
      ),
    };
  });

  const userNameStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollY.value,
            [0, 100],
            [0, -80],
            Extrapolate.CLAMP
          ),
        },
        {
          translateX: interpolate(
            scrollY.value,
            [0, 100],
            [0, 70],
            Extrapolate.CLAMP
          ),
        },
      ],
    };
  });

  const titleStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollY.value,
            [0, 100],
            [0, -100],
            Extrapolate.CLAMP
          ),
        },
        {
          translateX: interpolate(
            scrollY.value,
            [0, 100],
            [0, 70],
            Extrapolate.CLAMP
          ),
        },
      ],
      fontSize: interpolate(
        scrollY.value,
        [0, 100],
        [30, 14],
        Extrapolate.CLAMP
      ),
    };
  });

  const categoriesStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollY.value,
            [0, 100],
            [0, -70],
            Extrapolate.CLAMP
          ),
        },
      ],
    };
  });

  return (
    <View
      className="flex-1 bg-white"
      style={{
        paddingTop: insets.top || 16,
        // paddingBottom: insets.bottom || 16,
        paddingHorizontal: 16,
      }}
    >
      <Animated.View style={headerStyle}>
        <View className="flex-row justify-between items-center mb-6">
          <Image source={require("./images//user.png")} className="w-14 h-14" />
          <Image
            source={require("./images/notification.png")}
            className="w-10 h-10"
          />
        </View>
        <View className="space-y-3">
          <Animated.Text
            style={userNameStyle}
            className="text-base text-gray-400 font-bold"
          >
            Hello, Duc Nguyen!
          </Animated.Text>
          <Animated.Text
            style={titleStyle}
            className="text-4xl font-bold text-gray-600 "
          >
            <Text>Make your food at</Text>
            <Text className="text-amber-500"> home</Text>
          </Animated.Text>
        </View>
        <View className="bg-gray-200 rounded-full mt-8 pl-5 flex-row justify-between items-center">
          <TextInput
            className=" text-gray-500 font-bold"
            placeholder="Search any recipe you want..."
          />
          <View className="w-10 h-10 rounded-full justify-center flex items-center bg-white/70 m-2">
            <Image
              source={require("./images/search.png")}
              className="w-7 h-7"
            />
          </View>
        </View>
      </Animated.View>
      <Animated.View style={categoriesStyle}>
        <Categories selected={selectedCate} setSelected={setSelectedCate} />
      </Animated.View>
      <Recipes selectedCate={selectedCate} scrollY={scrollY} />
    </View>
  );
};

export default HomeFoodRecipe;
