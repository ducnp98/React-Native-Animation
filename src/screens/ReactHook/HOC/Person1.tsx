import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { HOCcomponent } from "./HOCcomponent";

function Person1({
  money,
  onIncrease,
}: {
  money: number;
  onIncrease: () => void;
}) {
  return (
    <View className="my-3 flex items-center">
      <Text className="text-lg font-bold text-gray-500">
        This is Miley {money}
      </Text>
      <TouchableOpacity
        onPress={onIncrease}
        className="px-5 py-2 bg-red-500 rounded-md mt-2"
      >
        <Text className="text-base font-bold text-white">Click</Text>
      </TouchableOpacity>
    </View>
  );
}

export default HOCcomponent(Person1);
