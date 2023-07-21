import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  Easing,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import Square from './Square';

export const N = 12;
export const SQUARE_SIZE = 12;

const ClockLoader = () => {
  const progress = useSharedValue(0);

  useEffect(() => {
    progress.value = withRepeat(
      withTiming(4 * Math.PI, {
        duration: 60000,
        easing: Easing.linear,
      }),
      -1
    );
  }, []);

  return (
    <View className='flex-1 bg-slate-900 justify-center items-center'>
      {new Array(N).fill(0).map((_, index) => {
        return <Square key={index} progress={progress} index={index} />;
      })}
    </View>
  );
}

export default ClockLoader
