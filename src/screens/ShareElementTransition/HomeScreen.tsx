import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Pressable, SafeAreaView, Text, View } from "react-native";
import Animated from "react-native-reanimated";

const HomeScreen = () => {
  const { navigate } = useNavigation();
  const onNavigate = () => {
    navigate("Modal");
  };
  return (
    <SafeAreaView>
      <View className="flex-1 p-4">
        <Pressable onPress={onNavigate}>
          <Animated.Image
            sharedTransitionTag="sharedTag"
            source={require("../Spotify/Image/marilyn.jpg")}
            className="w-full h-56 rounded-xl"
            resizeMode="cover"
          />
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
