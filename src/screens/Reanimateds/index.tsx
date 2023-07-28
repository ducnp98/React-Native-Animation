import { useNavigation } from "@react-navigation/native";
import React from "react";
import { SafeAreaView, ScrollView, Text, TouchableOpacity } from "react-native";

const buttonStyle = "py-2 px-3 rounded-lg mb-2";
const textStyle = "text-white text-base font-bold text-center";

const ReanimatedScreen = () => {
  const { navigate } = useNavigation();
  const goToScreen = (screen: string) => {
    navigate(screen);
  };

  return (
    <SafeAreaView className="flex-1 bg-white flex justify-center items-center">
      <ScrollView className="flex-1 w-full px-20 my-4">
        <TouchableOpacity
          onPress={() => goToScreen("Begin")}
          className={`${buttonStyle} bg-purple-200`}
        >
          <Text className={textStyle}>Begin</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => goToScreen("BasicGesture")}
          className={`${buttonStyle} bg-purple-300`}
        >
          <Text className={textStyle}>Basic Gesture</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => goToScreen("DragBottomSheet")}
          className={`${buttonStyle} bg-purple-400`}
        >
          <Text className={textStyle}>Drag Bottom Sheet</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => goToScreen("ScrollView")}
          className={`${buttonStyle} bg-purple-500`}
        >
          <Text className={textStyle}>Scroll View</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => goToScreen("HeaderScroll")}
          className={`${buttonStyle} bg-purple-600`}
        >
          <Text className={textStyle}>Header Scroll</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => goToScreen("SwipeToUnlock")}
          className={`${buttonStyle} bg-purple-700`}
        >
          <Text className={textStyle}>Swipe To Unlock</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => goToScreen("ScrollviewHorizontal")}
          className={`${buttonStyle} bg-purple-800`}
        >
          <Text className={textStyle}>Scroll view Horizontal</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => goToScreen("ColorInterpolate")}
          className={`${buttonStyle} bg-purple-900`}
        >
          <Text className={textStyle}>Color Interpolate</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => goToScreen("PinchGesture")}
          className={`${buttonStyle} bg-fuchsia-950`}
        >
          <Text className={textStyle}>PinchGesture</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => goToScreen("DoubleTap")}
          className={`${buttonStyle} bg-fuchsia-900`}
        >
          <Text className={textStyle}>Double tap</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => goToScreen("ScrollWithPanGesture")}
          className={`${buttonStyle} bg-fuchsia-800`}
        >
          <Text className={textStyle}>Scroll With PanGesture</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => goToScreen("ColorPicker")}
          className={`${buttonStyle} bg-fuchsia-700`}
        >
          <Text className={textStyle}>ColorPicker</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => goToScreen("CircleProgressBar")}
          className={`${buttonStyle} bg-fuchsia-600`}
        >
          <Text className={textStyle}>CircleProgressBar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => goToScreen("SwipeToDelete")}
          className={`${buttonStyle} bg-fuchsia-500`}
        >
          <Text className={textStyle}>Swipe To Delete</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => goToScreen("RippleEffect")}
          className={`${buttonStyle} bg-fuchsia-400`}
        >
          <Text className={textStyle}>RippleEffect</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => goToScreen("MenuPerspective")}
          className={`${buttonStyle} bg-fuchsia-300`}
        >
          <Text className={textStyle}>Menu Perspective</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => goToScreen("SliderCounter")}
          className={`${buttonStyle} bg-fuchsia-200`}
        >
          <Text className={textStyle}>SliderCounter</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => goToScreen("ClockLoader")}
          className={`${buttonStyle} bg-red-200`}
        >
          <Text className={textStyle}>Clock Loader</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => goToScreen("LayoutAnimation")}
          className={`${buttonStyle} bg-red-300`}
        >
          <Text className={textStyle}>Layout Animation</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => goToScreen("FlatListAnimated")}
          className={`${buttonStyle} bg-red-400`}
        >
          <Text className={textStyle}>FlatList Animated</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => goToScreen("TabNavigation")}
          className={`${buttonStyle} bg-red-500`}
        >
          <Text className={textStyle}>Tab Navigation</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => goToScreen("AnimatedList")}
          className={`${buttonStyle} bg-red-600`}
        >
          <Text className={textStyle}>Animated List</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => goToScreen("SwipeForMore")}
          className={`${buttonStyle} bg-red-700`}
        >
          <Text className={textStyle}>Swipe For More</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => goToScreen("Onboarding")}
          className={`${buttonStyle} bg-red-800`}
        >
          <Text className={textStyle}>Onboarding</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => goToScreen("LottieScreen")}
          className={`${buttonStyle} bg-red-900`}
        >
          <Text className={textStyle}>LottieScreen</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ReanimatedScreen;
