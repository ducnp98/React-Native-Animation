import React from "react";
import { Dimensions, Image, Text, View } from "react-native";
import { ItemSlide } from ".";

const { width } = Dimensions.get("window");

const Slide = ({ item }: { item: ItemSlide }) => {
  return (
    <View className="items-center">
      <Image
        source={item?.image}
        style={{ height: "60%", width, resizeMode: "contain" }}
      />
      <View>
        <Text className="text-white text-2xl font-bold mt-8 text-center">
          {item?.title}
        </Text>
        <Text className="text-white text-base mt-3 max-w-8/10 text-center leading-6">
          {item?.subtitle}
        </Text>
      </View>
    </View>
  );
};
export default Slide;
