import MyIcon from "@app/commons/MyIcon";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Dimensions, Image, Pressable, Text, View } from "react-native";
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";

const WIDTH = Dimensions.get("screen").width;

type Props = {};

const Radio = (props: Props) => {
  const { navigate } = useNavigation();
  const viewAnimated = useSharedValue(1);

  const viewStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: withSpring(
            viewAnimated.value,
            { duration: 700 },
            (finished) => {
              if (finished && viewAnimated.value !== 1) {
                runOnJS(navigate)("Detail");
              }
            }
          ),
        },
        {
          translateX: withSpring(viewAnimated.value === 1 ? 0 : -100)
        }
      ],
      opacity: withTiming(viewAnimated.value === 1 ? 1 : 0, {
        duration: 700,
      }),
    };
  });

  const onOpenRadio = () => {
    viewAnimated.value = 4;
    // navigate('Detail')
  };

  return (
    <>
      <View className="flex-row items-center mt-6 mb-3">
        <MyIcon name="headphones" color={"#9DB2BF"} size={17} />
        <Text className="text-sm text-gray-500 ml-2">Jump back in</Text>
      </View>
      <Animated.View style={viewStyle}>
        <Pressable
          onPress={onOpenRadio}
          className="w-full bg-black rounded-xl overflow-hidden mb-24"
          style={{ height: WIDTH }}
        >
          <Image
            source={require("../../Image/train.jpeg")}
            className="w-full h-full opacity-80"
            resizeMode="cover"
          />
        </Pressable>
      </Animated.View>
    </>
  );
};

export default Radio;
