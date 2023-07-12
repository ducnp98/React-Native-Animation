import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

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

  return (
    <View className="flex-1 bg-white flex justify-center items-center">
      <View>
        <TouchableOpacity
          className="rounded-lg bg-slate-500 py-2 px-4 mb-2"
          onPress={goToAnimatedScreen}
        >
          <Text className="text-white text-base font-bold text-center">
            Animated
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="rounded-lg bg-slate-600 py-2 px-4 mb-2"
          onPress={goToReactHookScreen}
        >
          <Text className="text-white text-base font-bold text-center">
            React Hook
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="rounded-lg bg-slate-700 py-2 px-4 mb-2"
          onPress={goToReanimatedScreen}
        >
          <Text className="text-white text-base font-bold text-center">
            Reanimated
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
