import MyIcon from "../../commons/MyIcon";
import React, { useEffect, useRef, useState } from "react";
import { Animated, Easing, Image, Text, TouchableOpacity, View } from "react-native";

const DoubleTapMessage = () => {
  const animatedIconValue = useRef(new Animated.Value(0)).current;
  const animatedBackgroundValue = useRef(new Animated.Value(0)).current;
  const [isHearted, setIsHearted] = useState(true);

  const onClick = () => {
    setIsHearted(pre => !pre)
  };

  useEffect(() => {
    Animated.sequence([
      Animated.timing(animatedIconValue, {
        toValue: -40,
        duration: 300,
        easing: Easing.ease,
        useNativeDriver: true,
      }),

      Animated.timing(animatedIconValue, {
        toValue: 0,
        duration: 300,
        easing: Easing.ease,
        useNativeDriver: true,
      }),
      Animated.timing(animatedIconValue, {
        toValue: isHearted ? 0 : 1,
        duration: 300,
        useNativeDriver: true,
      })
    ]).start();


    Animated.timing(animatedBackgroundValue, {
      toValue: isHearted ? 0 : 1,
      duration: 600,
      useNativeDriver: true,
    }).start();
  }, [isHearted])

  const iconAnimatedConfig = {
    transform: [
      { translateY: animatedIconValue },
    ],
    opacity: animatedBackgroundValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
    }),
  };

  const backgroundAnimatedConfig = {
    opacity: animatedBackgroundValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
    }),
  };

  return (
    <>
      <View className="flex-1 flex justify-center bg-blue-200">
        <TouchableOpacity onPress={onClick}>
          <View className="flex flex-row px-4 gap-3">
            <Image
              source={require("../../assets/images/iphone.jpg")}
              className="w-14 h-14 rounded-full"
            />
            <View className="flex-1 ">
              <View className="bg-sky-500 rounded-md p-2">
                <Text className="text-white font-bold text-base">
                  You should tap on the heart icon
                </Text>
                <TouchableOpacity className="absolute bottom-[-10px] right-[-5px]">
                  <Animated.View
                    style={backgroundAnimatedConfig}
                    className="bg-[#ffffffbd] rounded-full h-[22px] w-[22px] absolute"
                  />
                  <Animated.View style={iconAnimatedConfig} className="p-0.5">
                    <MyIcon name="heart" size={18} color="#ff4c4c" />
                  </Animated.View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default DoubleTapMessage;
