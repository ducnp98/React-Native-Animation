import React from 'react'
import { OnboardingData } from './data'
import Animated, { interpolate, SharedValue, useAnimatedStyle } from 'react-native-reanimated'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import LottieView from "lottie-react-native";

type Props = {
  item: OnboardingData
  index: number
  translateX: SharedValue<number>
}

const SCREEN_WIDTH = Dimensions.get('window').width

const OnboardingItem = ({item, index, translateX}: Props) => {
  const circleAnimation = useAnimatedStyle(() => {
    const scale = interpolate(
      translateX.value,
      [
        (index - 1) * SCREEN_WIDTH,
        index * SCREEN_WIDTH,
        (index + 1) * SCREEN_WIDTH,
      ],
      [1, 4, 4],
      'clamp'
    );

    return {
      transform: [{ scale: scale }],
    };
  });

  const lottieAnimationStyle = useAnimatedStyle(() => {
    const translateYAnimation = interpolate(
      translateX.value,
      [
        (index - 1) * SCREEN_WIDTH,
        index * SCREEN_WIDTH,
        (index + 1) * SCREEN_WIDTH,
      ],
      [200, 0, -200],
      'clamp'
    );

    return {
      transform: [{ translateY: translateYAnimation }],
    };
  });
  
  return (
    <Animated.View style={{ width: SCREEN_WIDTH }} >
      <View style={styles.itemCircleContainer}>
        <Animated.View
          style={[
            {
              width: SCREEN_WIDTH,
              height: SCREEN_WIDTH,
              borderRadius: SCREEN_WIDTH / 2,
              backgroundColor: item.backgroundColor,
            },
            circleAnimation
          ]}
        />
      </View>
      <Animated.View style={[styles.itemContainer, lottieAnimationStyle]}>
        <LottieView
          source={item.animation}
          style={{
            width: SCREEN_WIDTH * 0.9,
            height: SCREEN_WIDTH * 0.9,
          }}
          autoPlay
          loop
        />
        <Text style={[styles.itemTitle, { color: item.textColor }]}>
          {item.text}
        </Text>
      </Animated.View>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 90
  },
  itemTitle: {
    fontSize: 24,
    fontWeight: '700',
    marginTop: 24
  },
  itemCircleContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
})

export default OnboardingItem