import React from "react";
import { Text, View } from "react-native";
import { CoffeeItem } from "../../data";
import MyIcon from "@app/commons/MyIcon";

type Props = {
  item: CoffeeItem;
};

const CoffeeCardInfo = ({ item }: Props) => {
  return (
    <View className="space-y-3 mt-3">
      <Text className="text-3xl text-white font-semibold z-10">
        {item.name}
      </Text>
      <View
        style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
        className="flex-row items-center rounded-3xl p-1 px-2 space-x-1 w-16"
      >
        <MyIcon name="star" size={15} color="white" />
        <Text className="text-base font-semibold text-white">{item.stars}</Text>
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
  );
};

export default CoffeeCardInfo;
