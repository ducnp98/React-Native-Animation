import tailwindColors from '@app/utils/colors'
import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { GestureEvent, GestureHandlerRootView, PanGestureHandler, PanGestureHandlerEventPayload, PanGestureHandlerGestureEvent } from 'react-native-gesture-handler'
import Animated, { clamp, runOnJS, useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated'

type ContextType = {
  translateX: number
  translateY: number
}

const BUTTON_WIDTH = 180

const Counter = () => {
  const [count, setCount] = useState(0)
  const countButtonX = useSharedValue(0)
  const countButtonY = useSharedValue(0)
  const MAX_SLIDE_OFFSET = BUTTON_WIDTH * 0.3;



  const onGestureEvent = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    ContextType
  >({
    onStart: () => { },
    onActive: (event, context) => {
      countButtonX.value = clamp(event.translationX, -MAX_SLIDE_OFFSET, MAX_SLIDE_OFFSET)
      countButtonY.value = clamp(event.translationY, 0, MAX_SLIDE_OFFSET)
    },
    onEnd: () => {
      if (countButtonX.value === MAX_SLIDE_OFFSET) {
        runOnJS(setCount)(count + 1)
      } else if (countButtonX.value === -MAX_SLIDE_OFFSET) {
        runOnJS(setCount)(count - 1)
      } else if (countButtonY.value === MAX_SLIDE_OFFSET) {
        runOnJS(setCount)(0)
      }

      countButtonX.value = withSpring(0)
      countButtonY.value = withSpring(0)
    }
  })

  const countButtonAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: countButtonX.value },
        { translateY: countButtonY.value }
      ]
    }
  })

  const containerAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: countButtonX.value * 0.1 },
      ]
    }
  })


  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
          <Animated.View style={[styles.counterWrap, containerAnimatedStyle]}>
            <Text style={styles.mathTitle}>-</Text>
            <PanGestureHandler onGestureEvent={onGestureEvent}>
              <Animated.View style={[countButtonAnimatedStyle, styles.countButton]}>
                <Text style={styles.countText}>{count}</Text>
              </Animated.View>
            </PanGestureHandler>
            <Text style={styles.mathTitle}>+</Text>
          </Animated.View>
      </View>
    </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: tailwindColors['bg-white'],
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterWrap: {
    backgroundColor: tailwindColors['bg-red'][800],
    width: 180,
    height: 70,
    borderRadius: 200,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center'
  },
  mathTitle: {
    color: tailwindColors['bg-red'][200],
    width: 60,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '800'
  },
  countButton: {
    height: 60,
    width: 60,
    backgroundColor: tailwindColors['bg-red'][200],
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 60,
    zIndex: 100
  },
  countText: {
    color: tailwindColors['bg-red'][800],
    fontSize: 18,
    fontWeight: '800'
  }
})

export default Counter