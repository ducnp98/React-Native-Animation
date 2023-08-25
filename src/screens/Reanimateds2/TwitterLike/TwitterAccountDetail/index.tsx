import MyIcon from "@app/commons/MyIcon";
import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect } from "react";
import { Image, Pressable, Text, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";

const TwitterAccountDetail = () => {
  const route = useRoute();
  const { goBack } = useNavigation();
  const imageAnimated = useSharedValue(1);
  const { tag, name, image } = route.params as {
    tag: string;
    name: string;
    image: string;
  };

  useEffect(() => {
    imageAnimated.value = withDelay(300, withTiming(1.7));
  }, []);

  const imageStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: imageAnimated.value }],
    };
  });

  return (
    <SafeAreaView edges={["left", "right"]} className="flex-1 bg-black">
      <View className="flex-1 bg-white mt-10">
        <View className="w-full h-44 relative">
          <Pressable className="z-10 absolute p-4" onPress={goBack}>
            <MyIcon name="arrow-left" color="white" size={30} />
          </Pressable>
          <Image
            className="w-full h-full"
            source={{
              uri: "https://atpsoftware.vn/wp-content/uploads//2018/07/twitter-logo.jpeg",
            }}
          />
          <View className="border-white border-2 w-28 h-28 flex justify-center items-center absolute rounded-full -bottom-14 left-4">
            <Animated.Image
              style={imageStyle}
              sharedTransitionTag={tag}
              className="w-16 h-16 rounded-full"
              source={{
                uri: image,
              }}
            />
          </View>
        </View>
        <View className="flex-row justify-end px-4 py-3">
          <Pressable className="h-10 w-10 border-2 border-sky-500 rounded-full flex justify-center items-center">
            <MyIcon name="heart-outline" size={26} color="#008fcc" />
          </Pressable>
          <Pressable className="h-10 border-2 bg-sky-500 ml-2 border-sky-500 rounded-full flex justify-center items-center">
            <Text className="text-base text-white px-4 font-bold">
              Following
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default TwitterAccountDetail;
