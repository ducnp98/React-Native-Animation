import React, { useEffect, useMemo, useRef, useState } from "react";
import { View } from "react-native";
import RNEChartsPro from "react-native-echarts-pro";
import {
  chartConfigOptions,
  chartHeight,
  chartWidth,
  step,
} from "./ConfigData";

const showGrid = true;
const xPerSecond = 30;
const yAxisMax = 30;
const yAxisMin = 0;

const LiveChart = () => {
  const refChart = useRef();
  const index = useRef(0);
  const intervalRef = useRef<any>(null);
  const ppgData = useRef<Array<number | null>>([]);
  const currentData = useRef<Array<Array<number | null>>>([]);

  const [randomPleth, setRandomPleth] = useState<number[]>([]);

  const options = useMemo(() => {
    return chartConfigOptions(showGrid, xPerSecond, yAxisMin, yAxisMax);
  }, [showGrid, xPerSecond, yAxisMax, yAxisMin]);

  useEffect(() => {
    const dataInterval = setInterval(() => {
      let arr: number[] = [];
      [...Array(30).keys()].map((x) => {
        arr.push(Math.floor(Math.random() * 11) + 10);
      });
      setRandomPleth(arr);
    }, 1000);

    return () => clearInterval(dataInterval)
  }, []);

  useEffect(() => {
    if (randomPleth.length) {
      ppgData.current = [...ppgData.current, ...randomPleth];
      if (ppgData.current.length > options.maxRhythm) {
        ppgData.current.splice(0, ppgData.current.length - options.maxRhythm);
      }
    }
  }, [JSON.stringify(randomPleth)]);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      if (ppgData.current.length === 0) return;

      const drawDataThisInterval = ppgData.current.splice(0, step);
      drawDataThisInterval.forEach((data, i) => {
        currentData.current[index.current] = [index.current, data];
        index.current = index.current + 1;
      });

      Array.from(Array(options.breakPointLength)).forEach(
        (_tmp, value: number) => {
          if (currentData.current[index.current + value + 1]) {
            currentData.current[index.current + value + 1] = [
              index.current + value + 1,
              null,
            ];
          }
        }
      );
      if (index.current >= options.maxRhythm) {
        index.current = 0;
      }
      // @ts-expect-error ref
      refChart.current?.setNewOption({
        series: [
          {
            data: [...currentData.current],
            type: "line",
            showSymbol: false,
            animation: false,
            lineStyle: {
              color: "#FADB14",
              width: 2,
            },
            smooth: true,
          },
        ],
      });
    }, options.intervalTimeout);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [options.breakPointLength, options.intervalTimeout, options.maxRhythm]);

  return (
    <View className="flex-1 bg-white justify-center items-center">
      <RNEChartsPro
        width={chartWidth}
        height={chartHeight}
        ref={refChart}
        option={options}
        backgroundColor={"#262626"}
        webViewSettings={{
          javaScriptEnabled: true,
          domStorageEnabled: true,
          startInLoadingState: true,
        }}
      />
    </View>
  );
};

export default LiveChart;
