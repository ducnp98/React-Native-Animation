import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import Animated, { SharedValue, interpolate, useAnimatedStyle } from 'react-native-reanimated'

type Props = {
  onOpenProfile: () => void
  drawerProgress: Animated.SharedValue<number>
}

const FooterDrawer: React.FC<Props> = ({onOpenProfile, drawerProgress}) => {
  const profileViewStyle = useAnimatedStyle(() => {
    const translateY = interpolate(drawerProgress.value, [0, 1], [100, 0])
    const opacity = interpolate(drawerProgress.value, [0, 1], [0, 1])
    return {
      transform: [{ translateY }],
      opacity,
    }
  })

  return (
    <TouchableOpacity onPress={onOpenProfile}>
      <Animated.View
        className="flex-row items-center bg-white rounded-xl mx-2 p-3 mb-2"
        style={profileViewStyle}
      >
        <Image
          className="mx-2 w-14 h-14 rounded-full bg-white"
          source={require('../assets/images/avatar.png')}
        />
        <View>
          <Text className="text-2xl text-gray-800 font-medium">Kelsey Van</Text>
          <Text className="text-gray-400">Software Engineer</Text>
        </View>
      </Animated.View>
    </TouchableOpacity>
  )
}

export default FooterDrawer
