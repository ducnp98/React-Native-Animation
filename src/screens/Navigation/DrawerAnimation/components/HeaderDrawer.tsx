import MyIcon from '../../../../commons/MyIcon'
import React from 'react'
import { Text, View } from 'react-native'
import Animated, { interpolate, useAnimatedStyle } from 'react-native-reanimated'

type Props = {
  drawerProgress: Animated.SharedValue<number>
}

const HeaderDrawer = ({ drawerProgress }: Props) => {
  const headerStyle = useAnimatedStyle(() => {
    const translateY = interpolate(drawerProgress.value, [0, 1], [-100, 0])
    const opacity = interpolate(drawerProgress.value, [0, 1], [0, 1])
    return {
      transform: [{ translateY }],
      opacity,
    }
  })
  return (
    <Animated.View
      className="flex-row items-center my-2 bg-white rounded-xl mx-2 p-2"
      style={headerStyle}
    >
      <View className="p-1.5 rounded-xl m-2 bg-pink-200">
        <MyIcon name="menu" size={27} color='white' />
      </View>
      <Text className="text-lg text-pink-400 px-2">Hello there👋</Text>
    </Animated.View>
  )
}

export default HeaderDrawer
