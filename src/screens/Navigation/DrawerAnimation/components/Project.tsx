import React from 'react'
import { Text, View } from 'react-native'
import ProjectItem from './ProjectItem'
import { ProjectsArray } from '../data'

const Project = () => {
  return (
    <View className="my-2 bg-white rounded-xl mx-2 p-2">
      <Text className="text-lg text-gray-500 p-2">Projects Lorem</Text>
      <View className="w-full h-0.5 bg-gray-200 px-2" />
      {ProjectsArray.map((_, i) => (
        <ProjectItem
          key={i}
          label={_.title}
          color={_.color}
          onPress={() => {}}
          icon={_.icon}
          activeItemColor={undefined}
        />
      ))}
    </View>
  )
}

export default Project
