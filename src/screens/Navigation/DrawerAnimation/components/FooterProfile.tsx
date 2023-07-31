import React from "react";
import { Text, View } from "react-native";
import Animated, {
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
} from "react-native-reanimated";
import ProfileItem from "./ProfileItem";
import { ProfileMenu } from "../data";

type Props = {
  progress: Animated.SharedValue<number>;
};

const FooterProfile = ({ progress }: Props) => {
  const viewRef = useAnimatedRef<View>();

  const menuStyles = useAnimatedStyle(() => {
    const scaleY = interpolate(progress.value, [0, 1], [0, 1]);
    return {
      transform: [{ scaleY }],
    };
  });

  return (
    <View ref={viewRef}>
      <Animated.View
        className="bg-white rounded-xl px-4 py-2 mx-2"
        style={[menuStyles]}
      >
        <View className="my-2">
          <Text className="text-lg text-gray-500">Kelsey Van</Text>
          <Text className="text-gray-400 text-sm">kelseyvan@gmail.com</Text>
        </View>
        <View className="w-full h-0.5 bg-gray-200 px-2" />
        {ProfileMenu.map((_, i) => (
          <ProfileItem
            key={i}
            label={_.label}
            onPress={undefined}
            icon={_.icon}
          />
        ))}
        <Text className="mt-3 text-gray-500">v1.0.0 - Terms & Condition</Text>
      </Animated.View>
    </View>
  );
};

export default FooterProfile;
