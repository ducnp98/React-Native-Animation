import { Dimensions } from "react-native";

export const {width: WINDOW_WIDTH, height: WINDOW_HEIGHT } = Dimensions.get('window')

export const waitFor = async (timeout = 500) =>
  new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
