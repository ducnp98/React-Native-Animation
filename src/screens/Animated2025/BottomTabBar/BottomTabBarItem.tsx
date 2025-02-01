import tailwindColors from '@app/utils/colors';
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs'
import React, { useRef } from 'react'
import { LayoutChangeEvent, Pressable, StyleSheet, View } from 'react-native'
import Animated, { useAnimatedStyle, withTiming } from 'react-native-reanimated';

type Props = {
  isActive: boolean;
  options: BottomTabNavigationOptions
  onLayout: (event: LayoutChangeEvent) => void
  onPress: () => void
}

const BottomTabBarItem = ({ isActive, options, onLayout, onPress }: Props) => {
  const ref = useRef(null)

  const animatedComponentCircleStyles = useAnimatedStyle(() => {
    return {
      transform: [{ scale: withTiming(isActive ? 1 : 0.7, { duration: 250 }) }],
    };
  });

  const animatedIconContainerStyles = useAnimatedStyle(() => {
    return {
      opacity: withTiming(isActive ? 1 : 0.7, { duration: 250 }),
    };
  });


  return (
    <Pressable style={styles.wrap} onPress={onPress} onLayout={onLayout}>
      <Animated.View style={[animatedComponentCircleStyles, styles.item]}>
        <Animated.View style={[animatedIconContainerStyles]}>
          {
            //@ts-ignore
            options.tabBarIcon ? options.tabBarIcon({ ref }) : <Text>?</Text>
          }
        </Animated.View>
      </Animated.View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  wrap: {
    width: 60,
    height: 60,
  },
  item: {
    flex: 1,
    backgroundColor: tailwindColors['bg-white'],
    borderRadius: 200,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
})

export default BottomTabBarItem