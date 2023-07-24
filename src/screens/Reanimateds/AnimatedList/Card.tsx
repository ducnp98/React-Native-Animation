import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Animated, { Layout, RollInLeft, RollInRight, RollOutRight, SlideInLeft, SlideOutRight } from "react-native-reanimated";

type Props = {
  id: number;
  title: string;
  description: string;
  posterUrl: string;
};

const Card: React.FC<Props> = ({ id, title, description, posterUrl }) => {
  return (
    <Animated.View
      style={[style.shadow]}
      layout={Layout.stiffness(1)}
      entering={SlideInLeft.duration(500)}
      exiting={SlideOutRight.duration(500)}
      className="border border-gray-200 rounded-2xl p-4 my-8"
    >
      <Text className="text-3xl font-extrabold text-gray-700 mb-2">
        {title}
      </Text>
      <Text className="text-base text-gray-500">{description}</Text>
      <Image
        source={{ uri: posterUrl }}
        className="h-80 w-full mt-5 rounded-2xl"
      />
    </Animated.View>
  );
};

const style = StyleSheet.create({
  shadow: {
    backgroundColor: "white",
    elevation: 8,
    shadowColor: "gray",
    shadowRadius: 6,
    shadowOffset: { height: 6, width: 0 },
    shadowOpacity: 0.1,
  },
});

export default Card;
