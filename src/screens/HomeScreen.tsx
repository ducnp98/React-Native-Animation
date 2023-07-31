import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const textStyle = "text-white text-base font-bold text-center";

const HomeScreen = () => {
  const { navigate } = useNavigation();
  const goToAnimatedScreen = () => {
    navigate("AnimatedStack", {
      screen: "AnimatedScreen",
    });
  };

  const goToReactHookScreen = () => {
    navigate("ReactHookStack", {
      screen: "ReactHook",
    });
  };

  const goToReanimatedScreen = () => {
    navigate("ReanimatedStack", {
      screen: "ReanimatedScreen",
    });
  };

  const goToNavigationScreen = () => {
    navigate("NavigationStack", {
      screen: "Navigation",
    });
  };

  return (
    <View className="flex-1 bg-white flex justify-center items-center">
      <View>
        <TouchableOpacity
          className="rounded-lg bg-slate-500 py-2 px-4 mb-2"
          onPress={goToAnimatedScreen}
        >
          <Text className={textStyle}>Animated</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="rounded-lg bg-slate-600 py-2 px-4 mb-2"
          onPress={goToReactHookScreen}
        >
          <Text className={textStyle}>React Hook</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="rounded-lg bg-slate-700 py-2 px-4 mb-2"
          onPress={goToReanimatedScreen}
        >
          <Text className={textStyle}>Reanimated</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="rounded-lg bg-slate-800 py-2 px-4 mb-2"
          onPress={goToNavigationScreen}
        >
          <Text className="text-white text-base font-bold text-center">
            Navigation
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
