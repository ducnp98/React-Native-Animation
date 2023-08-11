import { CommonStyles } from "@app/commons/Styles/CommonStyles";
import React from "react";
import {
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

const InputSelection = () => {
  const inputAnimated = useSharedValue(false);

  const inputBorderStyle = useAnimatedStyle(() => {
    return {
      borderColor: withTiming(inputAnimated.value ? "#9CB4CC" : "#D1D1D1"),
      borderWidth: withTiming(inputAnimated.value ? 2 : 1),
    };
  });

  const labelInputStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: withTiming(inputAnimated.value ? -22 : 0),
        },
        {
          translateX: withTiming(inputAnimated.value ? 5 : 0),
        },
      ],
      color: withTiming(inputAnimated.value ? "#9CB4CC" : "#B7B7B7"),
      zIndex: -1,
    };
  });

  const extensionStyle = useAnimatedStyle(() => {
    return {
      height: withTiming(inputAnimated.value ? 150 : 0),
      opacity: withTiming(inputAnimated.value ? 1 : 0),
      marginTop: withTiming(inputAnimated.value ? 10 : 0),
      paddingHorizontal: withTiming(inputAnimated.value ? 16 : 0),
      paddingVertical: withTiming(inputAnimated.value ? 8 : 0),
    };
  });

  return (
    <View>
      <Pressable>
        <Animated.View className=" rounded-xl" style={inputBorderStyle}>
          <TextInput
            className="h-10 px-4 "
            onFocus={() => (inputAnimated.value = true)}
            onBlur={() => (inputAnimated.value = false)}
          />
          <Animated.Text
            className="absolute top-3 left-3 bg-white px-0.5 text-gray-600 font-medium"
            style={labelInputStyle}
          >
            Text input
          </Animated.Text>
        </Animated.View>
      </Pressable>
      <Animated.View
        style={[extensionStyle, CommonStyles.shadow]}
        className="w-full rounded-xl border overflow-hidden"
      >
        <FlatList
          data={Array.from(Array(5), (x, i) => i)}
          renderItem={({ item }) => (
            <TouchableOpacity className="py-2">
              <Text className="text-sm text-gray-500">
                This is option {item}
              </Text>
            </TouchableOpacity>
          )}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.toString()}
        />
      </Animated.View>
    </View>
  );
};

export default InputSelection;
