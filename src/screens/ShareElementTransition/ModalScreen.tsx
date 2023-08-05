import React from "react";
import { ImageProps, Pressable, StyleSheet, Text, View } from "react-native";
import { BlurView } from "@react-native-community/blur";
import { useNavigation } from "@react-navigation/native";
import Animated, { FadeInDown, FadeInLeft } from "react-native-reanimated";
import { useRoute } from "@react-navigation/native"

const ModalScreen = () => {
  const { goBack } = useNavigation();
  const route = useRoute()
  const { image, sharedTag } = route.params as {image: ImageProps, sharedTag: string};

  return (
    <Pressable style={styles.container} onPress={() => goBack()}>
      <BlurView
        style={styles.absolute}
        blurType="light"
        blurAmount={20}
        reducedTransparencyFallbackColor="white"
      />
      <View className="h-full w-full justify-center px-6">
        <Animated.Image
          sharedTransitionTag={sharedTag}
          source={image}
          className="w-full h-56 rounded-xl"
          resizeMode="cover"
        />
        <Animated.View entering={FadeInLeft.duration(400)}>
          <Text className="text-3xl text-zinc-700 mt-4 font-semibold">
            React Native Shared Element Transition
          </Text>
        </Animated.View>
        <Animated.View
          entering={FadeInDown.duration(400).delay(600)}
          className="w-full h-64 bg-white rounded-2xl mt-6 p-4"
        >
          <Text>More cool React Native tutorials on Galaxies.dev!</Text>
        </Animated.View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  absolute: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

export default ModalScreen;
