import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { CommonStyles } from "@app/commons/Styles/CommonStyles";
import Animated, {
  measure,
  useAnimatedRef,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from "react-native-reanimated";

type Props = {
  title: string;
};

const AccordingItem = ({ title }: Props) => {
  const contentViewRef = useAnimatedRef<View>();
  const [isShowMore, setIsShowMore] = useState(false);

  const accordingAnimated = useDerivedValue(() => {
    return isShowMore ? 1 : 0;
  });
  const onToggleMore = () => {
    setIsShowMore((pre) => !pre);
  };

  const accordingStyle = useAnimatedStyle(() => {
    const layout = measure(contentViewRef);
    const contentHeight = layout?.height ?? 0;
    return {
      height: withTiming(
        accordingAnimated.value === 1 ? contentHeight + 78 : 60,
        { duration: 400 }
      ),
      overflow: "hidden",
    };
  });
  return (
    <View style={CommonStyles.shadow} className="mx-4 my-2 bg-white rounded-xl">
      <Animated.View style={[accordingStyle]}>
        <View className="flex-row justify-between items-center p-4">
          <Text className="text-base text-yellow-600 font-bold">{title}</Text>
          <TouchableOpacity onPress={onToggleMore}>
            <Animated.Text className="text-xs text-gray-500">
              {isShowMore ? "Show less" : "Show more"}
            </Animated.Text>
          </TouchableOpacity>
        </View>
        <View className="z-0 absolute top-16 px-4" style={{ zIndex: -1 }}>
          <View ref={contentViewRef}>
            <Text className="text-sm text-gray-600">
              Losum 5mg Tablet provides relief from symptoms such as blocked or
              runny nose, sneezing, and itchy or watery eyes. This will make it
              easier for you to go about your daily activities. It can also give
              relief from allergic reactions after insect bites and symptoms of
              hives and eczema such as rash, swelling, itching, and irritation.
              This will improve the appearance of your skin and you may find
              that your mood and self-confidence improve as well. It rarely has
              any serious side effects and you may only need to take it on days
              you have symptoms. Moreover, Losum 5mg Tablet may make you feel
              less sleepy as compared to other antihistamine medicines. If you
              are taking it to prevent getting symptoms you should use it
              regularly to get the most benefit.
            </Text>
          </View>
        </View>
      </Animated.View>
    </View>
  );
};

export default AccordingItem;
