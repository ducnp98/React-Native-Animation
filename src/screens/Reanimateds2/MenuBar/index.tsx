import React, { useRef } from "react";
import MenuItems from "./MenuItems";
import Lottie from "lottie-react-native";
import { Dimensions, SafeAreaView, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";

const WIDTH = Dimensions.get("screen").width;

const MenuBar = () => {
  const menuIconRef = useRef();
  const menuAnimated = useSharedValue(0);

  const menuStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withSpring(
            menuAnimated.value ? -50 : (-WIDTH * 3) / 4 - 10
          ),
        },
      ],
    };
  });

  const menuIconStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: withSpring(menuAnimated.value ? 170 : 0) }],
      backgroundColor: withSpring(
        menuAnimated.value ? "transparent" : "#22D3EE"
      ),
    };
  });

  const containerStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: withTiming(menuAnimated.value ? "#E7E5E4" : "white"),
    };
  });

  const onToggleMenu = () => {
    if (menuAnimated.value === 1) {
      // @ts-ignore
      menuIconRef.current.play(99, 0);
      menuAnimated.value = 0;
    } else {
      // @ts-ignore
      menuIconRef.current.play(0, 99);
      menuAnimated.value = 1;
    }
  };

  return (
    <Animated.View className="flex-1" style={containerStyle}>
      <TouchableWithoutFeedback className='flex-1' onPress={() => {menuAnimated.value = 0;}}>
        <SafeAreaView className="flex-1">
          <View className="flex-1">
            <Animated.View
              style={menuStyle}
              className="absolute left-0 top w-3/4 bg-cyan-400 h-full rounded-r-3xl"
            >
              <MenuItems menuAnimated={menuAnimated} />
            </Animated.View>
            <Animated.View
              className="p-2 bg-cyan-400 w-12 h-12 mx-4 rounded-lg flex items-center justify-center"
              style={menuIconStyle}
            >
              <TouchableOpacity onPress={onToggleMenu} className="">
                <Lottie
                  //@ts-ignore
                  ref={menuIconRef}
                  source={require("./menu_icon.json")}
                  style={{ width: 36, height: 36 }}
                  loop={false}
                  autoPlay={false}
                />
              </TouchableOpacity>
            </Animated.View>
          </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </Animated.View>
  );
};

export default MenuBar;
