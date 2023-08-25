import MyIcon from "@app/commons/MyIcon";
import React, { memo } from "react";
import { Image, Text, View } from "react-native";

export const Header = memo(() => {
  return (
    <View className="mb-2">
      <View className="px-5">
        <MyIcon
          name="twitter"
          size={30}
          color="rgba(29, 155, 240,1)"
          style={{ alignSelf: "center" }}
        />
        <Image
          className="h-9 w-9 rounded-full -mt-9"
          source={{
            uri: "https://121clicks.com/wp-content/uploads/2022/08/best_dating_profile_picture_02.jpg",
          }}
        />
      </View>
      <View className="pb-3 mt-2" >
        <View className="flex flex-row items-center justify-between px-6 mt-5">
          <Text className='text-center font-bold text-sky-500 text-base'>For you</Text>
          <Text className='text-center font-bold text-gray-500 text-base'>Following</Text>
          <Text className='text-center font-bold text-gray-500 text-base'>Likes</Text>
        </View>
        <View className="w-16 h-1 bg-sky-500 ml-5 rounded-xl mt-2" />
      </View>
    </View>
  );
});
