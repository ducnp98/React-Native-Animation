import React from "react";
import { Image, Text, View } from "react-native";

export const SONG_HEIGHT = 70;

interface IProps {
  artist: string;
  cover: string;
  title: string;
}

const Song: React.FC<IProps> = ({ artist, cover, title }) => {
  return (
    <View className="flex-row items-center p-3" style={{ height: SONG_HEIGHT }}>
      <Image source={{ uri: cover }} className="h-12 w-12 rounded-md" />
      <View className="ml-3">
        <Text className="text-base font-semibold mt-1">{title}</Text>
        <Text className="text-sm text-gray-400">{artist}</Text>
      </View>
    </View>
  );
};

export default Song