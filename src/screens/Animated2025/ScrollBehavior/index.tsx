import tailwindColors from '@app/utils/colors'
import React from 'react'
import { Dimensions, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { GestureHandlerRootView, PanGestureHandler, PanGestureHandlerGestureEvent } from 'react-native-gesture-handler'
import Animated, { cancelAnimation, useAnimatedGestureHandler, useAnimatedStyle, useDerivedValue, useSharedValue, withDecay, withDelay, withSpring } from 'react-native-reanimated'

const WIDTH = Dimensions.get('window').width

type ContextType = {
  x: number;
}

const DATA = [
  { id: 1, title: 'This is screen 1', color: tailwindColors['bg-red'][200] },
  { id: 2, title: 'This is screen 2', color: tailwindColors['bg-red'][300] },
  { id: 3, title: 'This is screen 3', color: tailwindColors['bg-red'][400] },
  { id: 4, title: 'This is screen 4', color: tailwindColors['bg-red'][500] }
]

const MAX_TRANSLATE_X = -WIDTH * (DATA.length - 1);

const ScrollBehavior = () => {
  const scrollXAnimated = useSharedValue(0);

  const clampedTranslateX = useDerivedValue(() => {
    return Math.max(Math.min(scrollXAnimated.value, 0), MAX_TRANSLATE_X);
  }, [scrollXAnimated]);

  const onGestureEvent = useAnimatedGestureHandler<PanGestureHandlerGestureEvent, ContextType>({
    onStart: (_, context) => {
      context.x = clampedTranslateX.value;
      cancelAnimation(scrollXAnimated);
    },
    onActive: (event, context) => {
      scrollXAnimated.value = event.translationX + context.x;
    },
    onEnd: (event) => {
      scrollXAnimated.value = withDecay(
        {
          velocity: event.velocityX,
        },
      )
    }
  })


  return (
    <SafeAreaView style={styles.flex}>
      <GestureHandlerRootView style={styles.flex}>
        <View style={styles.container}>
          <PanGestureHandler onGestureEvent={onGestureEvent}>
            <Animated.View style={styles.childContainer}>
              {DATA.map((x, index) => {
                const OFFSET = WIDTH * index
                const childStyles = useAnimatedStyle(() => {
                  return {
                    transform: [
                      { translateX: clampedTranslateX.value + OFFSET }
                    ]
                  }
                })
                return (
                  <Animated.View
                    key={x.id}
                    style={[
                      styles.item,
                      childStyles,
                      { backgroundColor: x.color, ...StyleSheet.absoluteFillObject }]}
                  >
                    <Text style={styles.itemTitle}>{x.title}</Text>
                  </Animated.View>
                )
              })}
            </Animated.View>
          </PanGestureHandler>
        </View>
      </GestureHandlerRootView>
    </SafeAreaView>

  )
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: tailwindColors['bg-indigo'][300],
    justifyContent: 'center'
  },
  childContainer: {
    flexDirection: 'row',
    height: 400,
  },
  item: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  itemTitle: {
    fontSize: 40,
    color: tailwindColors['bg-white'],
    fontWeight: '600'
  }
})

export default ScrollBehavior