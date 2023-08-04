import { ImageProps } from "react-native";

export interface Category {
  id: number;
  title: string;
  image: ImageProps;
  icon: string;
}

export const Catagories: Category[] = [
  {
    id: 1,
    title: "Hiphop Tamhiza",
    image: "",
    icon: "heart",
  },
  {
    id: 2,
    title: "Rock & Roll",
    image: require("./Image/hiphop.jpg"),
    icon: "",
  },
  {
    id: 3,
    title: "Rock & Roll",
    image: require("./Image/demi.jpg"),
    icon: "",
  },
  {
    id: 4,
    title: "Rock & Roll",
    image: require("./Image/gaga.png"),
    icon: "",
  },
  {
    id: 5,
    title: "Hiphop Tamhiza",
    image: require("./Image/marilyn.jpg"),
    icon: "",
  },
  {
    id: 6,
    title: "Rock & Roll",
    image: require("./Image/mariah.png"),
    icon: "",
  },
];
