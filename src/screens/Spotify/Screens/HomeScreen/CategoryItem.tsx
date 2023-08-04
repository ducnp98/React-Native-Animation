import MyIcon from "@app/commons/MyIcon";
import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { Category } from "../../data";

type Props = {
  index: number;
  category: Category;
};
const CategoryItem = ({ category, index }: Props) => {
  return (
    <View className={`${index % 2 === 0 ? "pr-2" : "pl-2"} flex-1`}>
      <Pressable className={`flex-row items-center rounded-md bg-gray-900`}>
        <LinearGradient
          colors={["#33006F", "#FFFFFF"]}
          className="rounded-l-md"
        >
          <Pressable className="w-14 h-14 justify-center items-center flex">
            {category.icon ? (
              <MyIcon name={category.icon} size={28} color="white" />
            ) : (
              <Image
                className="h-14 w-14 rounded-l-md"
                source={category.image}
              />
            )}
          </Pressable>
        </LinearGradient>
        <Text className="text-white ml-2 text-xs font-bold">
          {category.title}
        </Text>
      </Pressable>
      {/* <Pressable className="flex-row items-center rounded-md bg-gray-900 flex-1">
        <Image
          className="h-14 w-14 rounded-l-md"
          source={require("../Image/hiphop.jpg")}
        />
        <Text className="text-white ml-2 text-xs font-bold">
          Hiphop Tamhiza
        </Text>
      </Pressable> */}
    </View>
  );
};

export default CategoryItem;
