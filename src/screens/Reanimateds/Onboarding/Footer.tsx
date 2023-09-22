import React, { useEffect } from "react";
import { Dimensions, Text, TouchableOpacity, View } from "react-native";
import { slides } from ".";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

const { height, width } = Dimensions.get("window");

const buttonClass =
  "flex-1 h-12 rounded-xl bg-white justify-center items-center";

type Props = {
  currentSlideIndex: number;
  goToNextSlide: () => void;
  skip: () => void;
};

const Footer: React.FC<Props> = ({
  goToNextSlide,
  skip,
  currentSlideIndex,
}) => {
  const isGetStatedButton = useSharedValue(true);

  const getStatedButtonAnimated = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: withSpring(isGetStatedButton.value ? 0 : width) },
      ],
    };
  });

  const actionButtonAnimated = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: withSpring(isGetStatedButton.value ? -width : 0) },
      ],
    };
  });

  useEffect(() => {
    isGetStatedButton.value = currentSlideIndex == slides.length - 1;
  }, [currentSlideIndex, slides.length]);

  return (
    <View
      style={{
        height: height * 0.25,
        justifyContent: "space-between",
        paddingHorizontal: 20,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 20,
        }}
      >
        {slides.map((_, index) => (
          <View
            key={index}
            className="h-1 w-3 bg-slate-300 mx-2 rounded-full"
            style={[
              currentSlideIndex == index && {
                backgroundColor: "white",
                width: 25,
              },
            ]}
          />
        ))}
      </View>

      <View style={{ marginBottom: 20 }}>
        <Animated.View className="h-12 absolute w-full" style={getStatedButtonAnimated}>
          <TouchableOpacity className={buttonClass} onPress={() => {}}>
            <Text className="font-bold text-base">GET STARTED</Text>
          </TouchableOpacity>
        </Animated.View>
        <Animated.View className="flex-row" style={actionButtonAnimated}>
          <TouchableOpacity
            activeOpacity={0.8}
            className={`${buttonClass} border-white border bg-transparent`}
            onPress={skip}
          >
            <Text className="font-bold text-base text-white">SKIP</Text>
          </TouchableOpacity>
          <View className="w-4" />
          <TouchableOpacity
            activeOpacity={0.8}
            className={buttonClass}
            onPress={goToNextSlide}
          >
            <Text className="font-bold text-base">NEXT</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </View>
  );
};

export default Footer;
