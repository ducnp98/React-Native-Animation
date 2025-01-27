import tailwindColors from '@app/utils/colors'
import React from 'react'
import { Dimensions, StyleSheet, useAnimatedValue, View } from 'react-native'
import { GestureHandlerRootView, PanGestureHandler, PanGestureHandlerGestureEvent } from 'react-native-gesture-handler'
import Animated, { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated'

const WINDOW_HEIGHT = Dimensions.get('window').height;

const BOTTOM_SHEET_MAX_HEIGHT = WINDOW_HEIGHT * 1;
const BOTTOM_SHEET_MIDDLE_HEIGHT = WINDOW_HEIGHT * 0.5;
const BOTTOM_SHEET_MIN_HEIGHT = WINDOW_HEIGHT * 0.1;

type ContextType = {
  translateY: number;
}

const DraggableBottomSheet = () => {
  const dragContainerY = useSharedValue(0);
  const dragDistance = useSharedValue(0);
  const dragStatus = useSharedValue<'down' | 'middle' | 'up'>('down')

  const springOption = {
    damping: 10, // Tăng damping để hãm nhúng
    stiffness: 100, // Cứng lò xo, ít nhún
    mass: 1, // Khối lượng của lò xo
  }

  const onGestureEvent = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    ContextType
  >({
    onStart: (event, context) => {
      context.translateY = dragContainerY.value
    },
    onActive: (event, context) => {
      dragContainerY.value = context.translateY + (event.translationY * 0.5);
      dragDistance.value = event.translationY;
    },
    onEnd: () => {
      const distance = dragDistance.value;
      const destinationOffset = {
        'up': BOTTOM_SHEET_MIN_HEIGHT - BOTTOM_SHEET_MAX_HEIGHT + 60,
        'down': 0,
        'middle': -BOTTOM_SHEET_MIDDLE_HEIGHT,
      }

      if (Math.abs(distance) < 60) {
        dragContainerY.value = withSpring(destinationOffset[dragStatus.value], springOption)
      } else {
        dragStatus.value = dragStatus.value === 'middle' ? distance > 0 ? 'down' : 'up' : 'middle'
        dragContainerY.value = withSpring(destinationOffset[dragStatus.value], springOption)
        return
      }
    },
  });

  const draggableStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateY: dragContainerY.value }
      ]
    }
  })

  return (
    <GestureHandlerRootView style={styles.flex}>
      <View style={styles.container}>
        <PanGestureHandler onGestureEvent={onGestureEvent}>
          <Animated.View style={[styles.draggableContainer, draggableStyle]}>

          </Animated.View>
        </PanGestureHandler>
      </View>
    </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({
  flex: {
    flex: 1
  },
  container: {
    flex: 1,
    backgroundColor: tailwindColors['bg-white'],
  },
  draggableContainer: {
    position: 'absolute',
    width: '100%',
    borderRadius: 32,
    backgroundColor: tailwindColors['bg-red'][400],
    bottom: BOTTOM_SHEET_MIN_HEIGHT - BOTTOM_SHEET_MAX_HEIGHT,
    height: BOTTOM_SHEET_MAX_HEIGHT,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -8 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5,
  }
})

export default DraggableBottomSheet