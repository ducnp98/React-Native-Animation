import { Dimensions, PixelRatio } from "react-native";

const { width } = Dimensions.get("window");

const caching: Record<number, number> = {};

export const scaleDP = (size: number) => {
  const newSize = (size * width) / 375;
  return PixelRatio.roundToNearestPixel(newSize);
};

export const scaleSize = (size: number) => {
  if (!(size in caching)) {
    caching[size] = scaleDP(size);
  }
  return caching[size];
};
