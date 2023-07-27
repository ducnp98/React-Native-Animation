import React from "react";
import { ImageProps } from "react-native";
import OnboardingScreen from "./OnboardingScreen";

export interface ItemSlide {
  id: string;
  image: ImageProps;
  title: string;
  subtitle: string;
}

export const slides: ItemSlide[] = [
  {
    id: "1",
    image: require("./images/image1.png"),
    title: "Best Digital Solution",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: "2",
    image: require("./images/image2.png"),
    title: "Achieve Your Goals",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: "3",
    image: require("./images/image3.png"),
    title: "Increase Your Value",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const Onboarding = () => {
  return <OnboardingScreen />;
};

export default Onboarding;
