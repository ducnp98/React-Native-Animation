import React from "react";
import { Image, Platform, Pressable, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { CoffeeItem } from "../../data";
import { themeColors } from "../..";
import MyIcon from "@app/commons/MyIcon";
import Animated, {
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withDelay,
  withSequence,
  withSpring,
  withTiming,
} from "react-native-reanimated";

type Props = {
  item: CoffeeItem;
};

const ios = Platform.OS == "ios";

const CoffeePrice = ({ item }: Props) => {
  const isAdding = useSharedValue(false);
  const isChecking = useSharedValue(false);

  const addButtonStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: withSequence(
            withTiming(isAdding.value ? -100 : 0),
            withTiming(0, undefined, (finished) => {
              if (finished) {
                isAdding.value = false;
              }
            })
          ),
        },
        {
          scale: withSequence(
            withTiming(isAdding.value ? 1 : 0.5),
            withTiming(0.5)
          ),
        },
      ],
    };
  });

  const checkButton = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotate: withTiming(isChecking.value ? "360deg" : "0deg"),
        },
      ],
      opacity: withSequence(
        withDelay(1000, 
          withTiming(1, undefined, (finished) => {
            if (finished)  {
              isChecking.value = false
            }
          })
          )
      ),
    };
  });

  const addToCart = () => {
    isAdding.value = true;
    isChecking.value = true;
  };

  return (
    <View
      style={{
        backgroundColor: ios ? themeColors.bgDark : "transparent",
        shadowColor: themeColors.bgDark,
        shadowRadius: 25,
        shadowOffset: { width: 0, height: 40 },
        shadowOpacity: 0.8,
      }}
      className="flex-row justify-between items-center mb-5"
    >
      <Text className="text-white font-bold text-lg">$ {item.price}</Text>
      <Animated.View
        style={addButtonStyle}
        className="h-14 w-14 absolute right-0 rounded-full"
      >
        <Image source={item.image} className="h-full w-full" />
      </Animated.View>
      <Pressable
        onPress={addToCart}
        style={{
          shadowColor: "black",
          shadowRadius: 40,
          shadowOffset: { width: -20, height: -10 },
          shadowOpacity: 1,
        }}
        className="p-4 bg-white rounded-full"
      >
        <Animated.View style={checkButton}>
          <MyIcon name={'plus'} size={25} color={themeColors.bgDark} />
        </Animated.View>
      </Pressable>
    </View>
  );
};

export default CoffeePrice;
