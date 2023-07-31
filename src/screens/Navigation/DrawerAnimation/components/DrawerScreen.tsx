import React from 'react'
import { Text, View } from 'react-native'

export default function DrawerScreen({ route }) {
  return (
    <View className='flex-1 bg-pink-200 flex justify-center items-center'>
      <Text className='text-3xl font-bold text-pink-400'>{route.name}</Text>
    </View>
  )
}

