import React from "react";
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";
import Page from "./page";

const views = ["Adidas", "Nike", "Converse", "Fila"];

const ScrollviewHorizontal = () => {
  const translateY = useSharedValue(0);

  const onScrollHandler = useAnimatedScrollHandler((event) => {
    translateY.value = event.contentOffset.y;
  });

  return (
    <Animated.ScrollView
      pagingEnabled
      className="flex-1"
      scrollEventThrottle={16}
      onScroll={onScrollHandler}
    >
      {views.map((title, index) => {
        return <Page key={index} index={index} title={title} translateY={translateY} />;
      })}
    </Animated.ScrollView>
  );
};

export default ScrollviewHorizontal;
