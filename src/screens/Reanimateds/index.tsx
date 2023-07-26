import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const ReanimatedScreen = () => {
  const { navigate } = useNavigation();
  const goToScreen = (screen: string) => {
    navigate(screen);
  };

  return (
    <SafeAreaView className="flex-1 bg-white flex justify-center items-center">
      <ScrollView className="flex-1 w-full px-20">
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
        <TouchableOpacity
          onPress={() => goToScreen("ScrollWithPanGesture")}
          className="py-2 px-3 bg-fuchsia-800 rounded-lg mb-2"
        >
          <Text className="text-white text-base font-bold text-center">
            Scroll With PanGesture
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => goToScreen("ColorPicker")}
          className="py-2 px-3 bg-fuchsia-700 rounded-lg mb-2"
        >
          <Text className="text-white text-base font-bold text-center">
            ColorPicker
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => goToScreen("CircleProgressBar")}
          className="py-2 px-3 bg-fuchsia-600 rounded-lg mb-2"
        >
          <Text className="text-white text-base font-bold text-center">
            CircleProgressBar
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => goToScreen("SwipeToDelete")}
          className="py-2 px-3 bg-fuchsia-500 rounded-lg mb-2"
        >
          <Text className="text-white text-base font-bold text-center">
            Swipe To Delete
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => goToScreen("RippleEffect")}
          className="py-2 px-3 bg-fuchsia-400 rounded-lg mb-2"
        >
          <Text className="text-white text-base font-bold text-center">
            RippleEffect
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => goToScreen("MenuPerspective")}
          className="py-2 px-3 bg-fuchsia-300 rounded-lg mb-2"
        >
          <Text className="text-white text-base font-bold text-center">
            Menu Perspective
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => goToScreen("SliderCounter")}
          className="py-2 px-3 bg-fuchsia-200 rounded-lg mb-2"
        >
          <Text className="text-white text-base font-bold text-center">
            SliderCounter
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => goToScreen("ClockLoader")}
          className="py-2 px-3 bg-red-200 rounded-lg mb-2"
        >
          <Text className="text-white text-base font-bold text-center">
            Clock Loader
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => goToScreen("LayoutAnimation")}
          className="py-2 px-3 bg-red-300 rounded-lg mb-2"
        >
          <Text className="text-white text-base font-bold text-center">
            Layout Animation
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => goToScreen("FlatListAnimated")}
          className="py-2 px-3 bg-red-400 rounded-lg mb-2"
        >
          <Text className="text-white text-base font-bold text-center">
            FlatList Animated
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => goToScreen("TabNavigation")}
          className="py-2 px-3 bg-red-500 rounded-lg mb-2"
        >
          <Text className="text-white text-base font-bold text-center">
            Tab Navigation
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => goToScreen("AnimatedList")}
          className="py-2 px-3 bg-red-600 rounded-lg mb-2"
        >
          <Text className="text-white text-base font-bold text-center">
            Animated List
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => goToScreen("SwipeForMore")}
          className="py-2 px-3 bg-red-700 rounded-lg mb-2"
        >
          <Text className="text-white text-base font-bold text-center">
            Swipe For More
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ReanimatedScreen;
