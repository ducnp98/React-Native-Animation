import React from "react";
import { ScrollView, Text, TouchableOpacity } from "react-native";

type Props = {};

const Menu = (props: Props) => {
  return (
    <ScrollView
      horizontal
      className="flex-row my-5"
      showsHorizontalScrollIndicator={false}
    >
      <TouchableOpacity className="py-2 px-4 bg-gray-900 rounded-full mr-2">
        <Text className="text-white text-sm font-semibold">Music</Text>
      </TouchableOpacity>
      <TouchableOpacity className="py-2 px-4 bg-gray-900 rounded-full mr-2">
        <Text className="text-white text-sm">Podcasts & Shows</Text>
      </TouchableOpacity>
      <TouchableOpacity className="py-2 px-4 bg-gray-900 rounded-full mr-2">
        <Text className="text-white text-sm">Rock & roll</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Menu;
