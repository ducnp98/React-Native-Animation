import React from "react";
import Animated, {
  Extrapolate,
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from "react-native-reanimated";

type Props = {
  dataSize: number;
  layout: any;
  activeIndex: number;
};

const ShadowBoxAnimated = ({ layout, activeIndex, dataSize }: Props) => {
  const xOffset = useDerivedValue(() => {
    if (layout.length !== dataSize) return 0;
    return [...layout].find(({ index }) => index === activeIndex)?.x - 14;
  }, [activeIndex, layout]);

  const rangeTranslate = useDerivedValue(() => {
    if (layout.length !== dataSize) return [];
    return [...layout]
      .map((x) => x?.x)
      .sort((a, b) => Math.floor(a) - Math.floor(b));
  }, [activeIndex, layout]);

  const shadowBoxViewStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: withTiming(xOffset.value, { duration: 250 }) }],
      backgroundColor:
        rangeTranslate.value.length === dataSize
          ? interpolateColor(xOffset.value, rangeTranslate.value, [
              "#D0BFFF",
              "#FFCACC",
              "#E9FFC2",
              "#FFD89C",
              "#D7C0AE",
              "#537188",
            ])
          : "gray",
    };
  });

  return (
    <Animated.View
      style={shadowBoxViewStyle}
      className="w-10 h-12 bg-slate-600 absolute rounded-2xl"
    />
  );
};

export default ShadowBoxAnimated;
