import React, { memo } from "react";
import { Text, TextInputProps, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

interface Props extends TextInputProps {
  error?: string;
  isTouched?: boolean;
}

export const InputCustom = ({ error, isTouched, ...res }: Props) => {
  const viewStyle = useAnimatedStyle(() => {
    return {
      height: withTiming(isTouched && error ? 75 : 48, { duration: 700 }),
    };
  });

  return (
    <Animated.View
      style={viewStyle}
      className='relative h-20 flex justify-end my-1'
    >
      <TextInput
        {...res}
        className={`border ${isTouched && error ? 'border-red-500' : 'border-gray-300'}  rounded-xl px-4 py-3 bg-white absolute h-12 w-full top-0 z-10`}
      />
      {isTouched ? (
        <Text className="text-red-500 px-2 mt-2 z-1">{error}</Text>
      ) : null}
    </Animated.View>
  );
};

export default InputCustom;
