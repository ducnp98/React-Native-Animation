import { Dimensions } from "react-native";
import { scaleSize } from "./utils";

export const step = 2;
export const displaySeconds = 2;
export const numberOfSmallBlock = 5;
export const splitLineWidth = scaleSize(1.5);
export const minorLineWidth = scaleSize(0.75);
export const chartWidth = Dimensions.get("window").width - 32;
export const chartHeight = chartWidth / displaySeconds;


export const chartConfigOptions = (
  showGrid: boolean,
  xPerSecond: number,
  yAxisMin: number,
  yAxisMax: number
) => {
  const maxRhythm = xPerSecond * displaySeconds;

  return {
    grid: {
      show: true,
      width: chartWidth,
      height: chartHeight,
      top: -1,
      left: -1,
    },
    xAxis: {
      show: showGrid,
      min: 0,
      max: maxRhythm,
      interval: xPerSecond / numberOfSmallBlock,
      minorSplitLine: {
        show: showGrid,
        lineStyle: {
          color: "#333",
          width: minorLineWidth,
        },
      },
      splitLine: {
        show: showGrid,
        lineStyle: {
          color: "#595959",
          width: splitLineWidth,
        },
      },
    },
    yAxis: {
      show: showGrid,
      min: showGrid ? yAxisMin : "dataMin",
      max: showGrid ? yAxisMax : "dataMax",
      interval: (yAxisMax - yAxisMin) / numberOfSmallBlock,
      minorSplitLine: {
        show: showGrid,
        lineStyle: {
          color: "#333",
          width: minorLineWidth,
        },
      },
      splitLine: {
        show: showGrid,
        lineStyle: {
          color: "#595959",
          width: splitLineWidth,
        },
      },
    },
    maxRhythm,
    intervalTimeout: (step * 1000) / xPerSecond,
    breakPointLength:
      (xPerSecond - (xPerSecond % numberOfSmallBlock)) / numberOfSmallBlock,
  };
};
