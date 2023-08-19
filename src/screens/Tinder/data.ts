import { ImageProps } from "react-native";

export interface tinderData {
  image: ImageProps;
  id: number;
  title: string;
}

export const TinderData: tinderData[] = [
  { image: require("./images/hulk.webp"), id: 1, title: "Hulk" },
  { image: require("./images/ironman.webp"), id: 2, title: "Ironman" },
  { image: require("./images/thor.jpeg"), id: 3, title: "Thor" },
  { image: require("./images/superman.webp"), id: 4, title: "Superman" },
  { image: require("./images/groot.webp"), id: 5, title: "Groot" },
  {
    image: require("./images/blackpanther.webp"),
    id: 6,
    title: "Black Panther",
  },
  { image: require("./images/drstrange.jpeg"), id: 7, title: "Dr Strange" },
  { image: require("./images/blackwidow.jpeg"), id: 8, title: "Black Widow" },
];
