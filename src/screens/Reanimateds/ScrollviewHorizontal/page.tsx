import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import Animated, { interpolate, useAnimatedStyle } from "react-native-reanimated";

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

interface IProps {
  index: number
  title: string
  translateY: Animated.SharedValue<number>
}

const Page: React.FC<IProps> = ({index, title, translateY}) => {
  const inputRange = [(index - 1) * height, index * height, (index + 1) * height];

  const roundStyle = useAnimatedStyle(() =>{
    return {
      borderRadius: interpolate(translateY.value, inputRange, [300, 50, 300]),
      transform: [
        {
          scale: interpolate(translateY.value, inputRange, [2.5, 1, 2.5])
        }
      ]
    }
  })

  const textStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(translateY.value, inputRange, [0, 1, 0]),
      transform: [
        {
          translateY: interpolate(translateY.value, inputRange, [100, 0, -100])
        }
      ]
    }
  })

  return (
  
      <View style={styles.container} className={`flex justify-center items-center bg-purple-${index + 1}00`}>
        <Animated.View style={roundStyle} className="bg-white w-44 h-44 flex items-center justify-center">
          <Animated.Text style={textStyle} className="font-bold text-4xl text-purple-400">{title}</Animated.Text>
        </Animated.View>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width,
    height
  }
})

export default Page;
