import React, { useState } from "react";
import { Dimensions, ScrollViewProps } from "react-native";
import Animated, { useAnimatedScrollHandler, useSharedValue } from "react-native-reanimated";
import { coffeeItems } from "../../data";
import CoffeeCard from "./CoffeeCard";

const { width } = Dimensions.get("window");

const CoffeeList = () => {
  const activeCard = useSharedValue(0)

  const scrollHandler = useAnimatedScrollHandler((e: ScrollViewProps) => {
    activeCard.value = Math.max(Math.floor((e.contentOffset?.x ?? 0) / (width - 150)), 0)
  })
  return (
    <Animated.ScrollView
      onScroll={scrollHandler}
      scrollEventThrottle={200}
      pagingEnabled={true}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      decelerationRate={"fast"}
      snapToInterval={width - 100}
      snapToAlignment={"center"}
      className="flex-1 mt-20 overflow-visible"
      contentInset={{
        top: 0,
        left: 10,
        bottom: 0,
        right: 10,
      }}
    >
       {coffeeItems.map((item, index) => (
        <CoffeeCard index={index} key={item.id} item={item} activeCard={activeCard} />
      ))}
    </Animated.ScrollView>
  );
};

export default CoffeeList;
