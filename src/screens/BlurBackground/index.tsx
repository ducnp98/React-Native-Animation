import { CommonStyles } from "@app/commons/Styles/CommonStyles";
import { BlurView } from "@react-native-community/blur";
import React from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Animated, { useSharedValue, withSpring } from "react-native-reanimated";

const BlurBackground = () => {
  const modeAnimated = useSharedValue<"light" | "dark">("light");
  const clearAnimated = useSharedValue<number>(10);

  const onChangeMode = () => {
    modeAnimated.value = withSpring(
      modeAnimated.value === "light" ? "dark" : "light"
    );
  };

  const onChangeClear = () => {
    clearAnimated.value = withSpring(clearAnimated.value === 10 ? 60 : 10);
  };

  const BlurViewAnimatedView = Animated.createAnimatedComponent(BlurView)

  return (
    <View className="flex-1">
      <View className="flex-1">
        <Image
          className="absolute w-full h-full"
          source={require("./images/wallpaper.jpg")}
          resizeMode="cover"
        />
        <BlurViewAnimatedView
          style={styles.absolute}
          blurType={modeAnimated.value}
          blurAmount={clearAnimated.value}
        />
        <SafeAreaView className="mt-4 mx-4">
          <View className="flex-row justify-evenly">
            <TouchableOpacity onPress={onChangeMode} className="w-5/12 bg-white p-3 justify-center items-center rounded-xl">
              <Text className="text-lg font-medium text-gray-600">Mode</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onChangeClear} className="w-5/12 bg-white p-3 justify-center items-center rounded-xl">
              <Text className="text-lg font-medium text-gray-600">Clear</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
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
