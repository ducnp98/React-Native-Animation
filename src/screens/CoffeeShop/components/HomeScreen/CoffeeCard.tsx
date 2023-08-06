import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  Platform,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { themeColors } from "../..";
import MyIcon from "@app/commons/MyIcon";
import { CoffeeItem } from "../../data";
import Animated, {
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from "react-native-reanimated";
const { width, height } = Dimensions.get("window");
const ios = Platform.OS == "ios";

interface IProps {
  item: CoffeeItem;
  index: number;
  activeCard: Animated.SharedValue<number>;
}

const CoffeeCard: React.FC<IProps> = ({ item, activeCard, index }) => {
  const cardActiveAnimated = useDerivedValue(() => {
    return activeCard.value === index ? true : false;
  }, [index, activeCard.value]);

  const cardStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: withTiming(cardActiveAnimated.value ? 1: 0.9) }],
      opacity: withTiming(cardActiveAnimated.value ? 1 : 0.76)
    };
  });

  const navigation = useNavigation();
  return (
    <Animated.View className="" style={[{ width: width - 100 }, cardStyle]}>
      <View
        style={{
          borderRadius: 40,
          backgroundColor: themeColors.bgDark,
          height: ios ? height * 0.4 : height * 0.5,
        }}
      >
        <View
          style={{
            shadowColor: "black",
            shadowRadius: 30,
            shadowOffset: { width: 0, height: 40 },
            shadowOpacity: 0.8,
            marginTop: ios ? -(height * 0.08) : 15,
          }}
          className="flex-row justify-center"
        >
          <Image source={item.image} className="h-40 w-40" />
        </View>
        <View className={`px-5 flex-1 justify-between ${ios ? "mt-5" : ""}`}>
          <View className="space-y-3 mt-3">
            <Text className="text-3xl text-white font-semibold z-10">
              {item.name}
            </Text>
            <View
              style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
              className="flex-row items-center rounded-3xl p-1 px-2 space-x-1 w-16"
            >
              <MyIcon name="star" size={15} color="white" />
              <Text className="text-base font-semibold text-white">
                {item.stars}
              </Text>
            </View>
            <View className="flex-row space-x-1 z-10 mb-6">
              <Text className="text-base text-white font-semibold opacity-60">
                Volume
              </Text>
              <Text className="text-base text-white font-semibold">
                {` ${item.volume}`}
              </Text>
            </View>
          </View>

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
            <TouchableOpacity
              onPress={() => navigation.navigate("Product", { ...item })}
              style={{
                shadowColor: "black",
                shadowRadius: 40,
                shadowOffset: { width: -20, height: -10 },
                shadowOpacity: 1,
              }}
              className="p-4 bg-white rounded-full"
            >
              <MyIcon name="plus" size={25} color={themeColors.bgDark} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Animated.View>
  );
};

export default CoffeeCard;
