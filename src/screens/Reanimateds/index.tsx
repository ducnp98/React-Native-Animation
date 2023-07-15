import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const ReanimatedScreen = () => {
  const { navigate } = useNavigation();
  const goToScreen = (screen: string) => {
    navigate(screen);
  };

  return (
    <View className="flex-1 bg-white flex justify-center items-center">
      <View>
        <TouchableOpacity
          onPress={() => goToScreen("Begin")}
          className="py-2 px-3 bg-purple-200 rounded-lg mb-2"
        >
          <Text className="text-white text-base font-bold text-center">
            Begin
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => goToScreen("BasicGesture")}
          className="py-2 px-3 bg-purple-300 rounded-lg mb-2"
        >
          <Text className="text-white text-base font-bold text-center">
            Basic Gesture
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => goToScreen("DragBottomSheet")}
          className="py-2 px-3 bg-purple-400 rounded-lg mb-2"
        >
          <Text className="text-white text-base font-bold text-center">
            Drag Bottom Sheet
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => goToScreen("ScrollView")}
          className="py-2 px-3 bg-purple-500 rounded-lg mb-2"
        >
          <Text className="text-white text-base font-bold text-center">
            Scroll View
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => goToScreen("HeaderScroll")}
          className="py-2 px-3 bg-purple-600 rounded-lg mb-2"
        >
          <Text className="text-white text-base font-bold text-center">
            Header Scroll
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => goToScreen("SwipeToUnlock")}
          className="py-2 px-3 bg-purple-700 rounded-lg mb-2"
        >
          <Text className="text-white text-base font-bold text-center">
            Swipe To Unlock
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => goToScreen("ScrollviewHorizontal")}
          className="py-2 px-3 bg-purple-800 rounded-lg mb-2"
        >
          <Text className="text-white text-base font-bold text-center">
            Scroll view Horizontal
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => goToScreen("ColorInterpolate")}
          className="py-2 px-3 bg-purple-900 rounded-lg mb-2"
        >
          <Text className="text-white text-base font-bold text-center">
            Color Interpolate
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => goToScreen("PinchGesture")}
          className="py-2 px-3 bg-fuchsia-950 rounded-lg mb-2"
        >
          <Text className="text-white text-base font-bold text-center">
            PinchGesture
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => goToScreen("DoubleTap")}
          className="py-2 px-3 bg-fuchsia-900 rounded-lg mb-2"
        >
          <Text className="text-white text-base font-bold text-center">
            Double tap
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ReanimatedScreen;
