import MyIcon from "@app/commons/MyIcon";
import React, { useRef } from "react";
import { Pressable, SafeAreaView, Text, View } from "react-native";
import { TapGestureHandler } from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from "react-native-reanimated";

const NotionHeader = () => {
  const doubleTapRef = useRef();
  const isOpen = useSharedValue(false);
  const isHover = useSharedValue(false);

  const menuAnimatedStyle = useAnimatedStyle(() => {
    return {
      width: withTiming(isOpen.value ? 208 : 0),
    };
  });

  const menuButtonStyled = useAnimatedStyle(() => {
    return {
      opacity: withTiming(isOpen.value ? 0 : 1),
    };
  });

  const menuContainerAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: isHover.value ? withTiming(0) : isOpen.value
            ? withTiming(0)
            : withDelay(500, withTiming(-208)),
        },
        { translateY: isOpen.value ? withTiming(0) : withTiming(65) },
      ],
    };
  });

  const onOpenMenu = () => {
    isHover.value = false;
    isOpen.value = true;
  };

  const onCloseMenu = () => {
    isOpen.value = false;
    isHover.value = false;
  };

  const onHoverMenu = () => {
    isHover.value = !isHover.value;
  };

  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1 flex-row">
        <Animated.View
          style={menuAnimatedStyle}
          className="h-full bg-gray-200"
        />
        <View className="flex-1">
          <View className="bg-blue-100 flex-row justify-between px-6 items-center">
            <TapGestureHandler waitFor={doubleTapRef} onActivated={onOpenMenu}>
              <TapGestureHandler
                maxDelayMs={250}
                ref={doubleTapRef}
                numberOfTaps={2}
                onActivated={onHoverMenu}
              >
                <View className="flex-row items-center gap-1 py-4 ">
                  <Animated.View style={menuButtonStyled}>
                    <MyIcon size={20} name="chevron-double-right" />
                  </Animated.View>
                  <Text className="text-gray-500 text-base font-bold">
                    Notion header
                  </Text>
                </View>
              </TapGestureHandler>
            </TapGestureHandler>
            <Text className="text-gray-500 text-sm ml-8">User</Text>
          </View>
        </View>
        <Animated.View
          style={[menuContainerAnimatedStyle]}
          className="w-52 h-5/6 p-4 absolute bg-gray-200 rounded-lg"
        >
          <View className="flex-row justify-between items-center">
            <View className="flex-row items-center gap-1">
              <Text className="text-base text-gray-600">Duc Nguyen</Text>
              <MyIcon size={20} name="unfold-more-horizontal" />
            </View>
            <Pressable onPress={onCloseMenu}>
              <MyIcon size={20} name="chevron-double-left" />
            </Pressable>
          </View>
        </Animated.View>
      </View>
    </SafeAreaView>
  );
};

export default NotionHeader;
