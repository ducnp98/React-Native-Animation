import { View, Image, Dimensions, Platform } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { themeColors } from "../..";
import { CoffeeItem } from "../../data";
import Animated, {
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import CoffeeCardInfo from "./CoffeeCardInfo";
import CoffeePrice from "./CoffeePrice";

const ios = Platform.OS == "ios";
const { width, height } = Dimensions.get("window");

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
      transform: [{ scale: withTiming(cardActiveAnimated.value ? 1 : 0.9) }],
      opacity: withTiming(cardActiveAnimated.value ? 1 : 0.76),
    };
  });

  return (
    <Animated.View className="px-1" style={[{ width: width - 100 }, cardStyle]}>
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
          <CoffeeCardInfo item={item} />
          <CoffeePrice item={item} />
        </View>
      </View>
    </Animated.View>
  );
};

export default CoffeeCard;
