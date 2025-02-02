import MyIcon from '@app/commons/MyIcon'
import tailwindColors from '@app/utils/colors'
import React, { useState } from 'react'
import { ActivityIndicator, Dimensions, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Animated, { Extrapolate, interpolate, interpolateColor, runOnJS, useAnimatedStyle, useSharedValue, withDelay, withSpring, withTiming } from 'react-native-reanimated'

const { width } = Dimensions.get("window");

const AddCartItem = () => {
  const [count, setCount] = useState(0)
  const buttonTextAnimated = useSharedValue(1)
  const rotateAnimated = useSharedValue(0)
  const badgeBuzzAnimated = useSharedValue(0)

  const onPress = () => {
    badgeBuzzAnimated.value = 0;
    buttonTextAnimated.value = withTiming(0.5, { duration: 500 }, (isFinished) => {
      if (isFinished) {
        buttonTextAnimated.value = withDelay(2800, withTiming(1, { duration: 500 }));
      }
    });
    rotateAnimated.value = withTiming(20, { duration: 500 }, (isFinished) => {
      if (isFinished) {
        rotateAnimated.value = withDelay(2000, withTiming(180, { duration: 800 }, (isDone) => {
          if (isDone) {
            rotateAnimated.value = 0
            badgeBuzzAnimated.value = withSpring(1, { duration: 600 });
            runOnJS(setCount)(count + 1)
          }
        }))
      }
    })
  }

  const buttonTextAnimatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        { scale: buttonTextAnimated.value },
        { translateY: (buttonTextAnimated.value - 1) * 100 },
      ]
    }
  })

  const rotateAnimatedStyles = useAnimatedStyle(() => {
    const scale = interpolate(
      rotateAnimated.value,
      [20, 45, 90, 135, 180],
      [1, 1.3, 1.5, 1.3, 1],
      'clamp'
    );

    const backgroundColor = interpolateColor(
      rotateAnimated.value,
      [20, 45, 90, 135, 180],
      [
        tailwindColors['bg-gray'][300],
        tailwindColors['bg-gray'][200],
        tailwindColors['bg-red'][200],
        tailwindColors['bg-red'][400],
        tailwindColors['bg-red'][600]
      ],
    );

    return {
      transform: [
        { translateX: -1 * (width / 3.5) },
        { rotateZ: `-${rotateAnimated.value}deg` },
        { translateX: width / 3.2 },
        { scale: scale },
      ],
      backgroundColor
    }
  })

  const loadingButtonAnimatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        { translateY: (buttonTextAnimated.value - 1) * 57 + 43 }
      ]
    }
  })

  const badgeBuzzAnimatedStyles = useAnimatedStyle(() => {
    const tranX = interpolate(
      badgeBuzzAnimated.value,
      [0, 0.2, 0.4, 0.6, 0.8, 1],
      [0, -40, 40, -40, 40, 0],
      {
        extrapolateLeft: 'clamp',
        extrapolateRight: 'clamp',
      }
    );
    return {
      transform: [{ translateX: withSpring(tranX) }],
    };
  })

  return (
    <View style={styles.container}>
      <View style={styles.wrap}>
        <Animated.View style={badgeBuzzAnimatedStyles}>
          <MyIcon name="cart" color="black" size={30} />
          <View style={styles.circle}><Text style={styles.circleTitle}>{count}</Text></View>
        </Animated.View>

        <View style={styles.addCartContainer}>
          <Animated.View style={[styles.rotateCircle, rotateAnimatedStyles]} />
          <Pressable style={styles.addToCartButton} onPress={onPress}>
            <Animated.Text style={[styles.addToCartButtonTitle, buttonTextAnimatedStyles]}>Add to cart</Animated.Text>
            <Animated.View style={[styles.loadingIconWrap, loadingButtonAnimatedStyles]}>
              <ActivityIndicator />
            </Animated.View>
          </Pressable>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: tailwindColors['bg-white']
  },
  wrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 32,
    alignItems: 'center',
  },
  addToCartButton: {
    backgroundColor: tailwindColors['bg-gray'][300],
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 10,
    overflow: 'hidden',
    zIndex: 10,
    alignItems: 'center'
  },
  addToCartButtonTitle: {
    color: tailwindColors['bg-gray'][800],
    fontSize: 16,
    fontWeight: '600'
  },
  circle: {
    width: 18,
    height: 18,
    backgroundColor: tailwindColors['bg-red'][600],
    borderRadius: 16,
    position: 'absolute',
    bottom: -8,
    right: -5,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: tailwindColors['bg-white'],
  },
  circleTitle: {
    color: tailwindColors['bg-white'],
    fontWeight: '900',
    fontSize: 10,
  },
  rotateCircle: {
    backgroundColor: tailwindColors['bg-gray'][300],
    width: 18,
    height: 18,
    borderRadius: 20,
    position: 'absolute',
    zIndex: 1,
  },
  addCartContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  loadingIconWrap: {
    position: 'absolute',
  }
})

export default AddCartItem