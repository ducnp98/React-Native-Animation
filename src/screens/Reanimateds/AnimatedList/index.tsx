import React, { useState } from "react";
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
} from "react-native";
import { View } from "react-native";
import Card from "./Card";

const AnimatedList = () => {
  const [movies, setMovies] = useState(data);

  const deleteFunction = () => {
    setMovies((pre) => pre.slice(1));
  };

  const addFunction = () => {
    const randomIdx = Math.floor(Math.random() * 5);
    setMovies((pre) => [
      {
        id: Date.now(),
        title: "Movie " + randomIdx,
        description: "Description " + randomIdx,
        posterUrl: "https://picsum.photos/200",
      },
      ...pre,
    ]);
  };
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex flex-row items-center justify-center my-4">
        <Pressable onPress={addFunction} className="px-4 py-2 mx-2 bg-sky-400 rounded-lg">
          <Text className="text-white text-lg">Add</Text>
        </Pressable>
        <Pressable onPress={deleteFunction} className="px-4 py-2 mx-2 bg-red-400 rounded-lg">
          <Text className="text-white text-lg">Delete</Text>
        </Pressable>
      </View>
      <ScrollView className="mb-16">
        <View className="px-4">
          {movies.map((item) => (
            <Card {...item} key={item.id} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const data = [
  {
    id: 1,
    title: "Movie 1",
    description: "Description 1, this movie sucks",
    posterUrl: "https://picsum.photos/200",
  },
  {
    id: 2,
    title: "Movie 2",
    description: "Description 2",
    posterUrl: "https://picsum.photos/400",
  },
];

export default AnimatedList;
