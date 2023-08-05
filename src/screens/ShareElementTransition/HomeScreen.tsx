import { useNavigation } from "@react-navigation/native";
import React from "react";
import { ImageProps, Pressable, SafeAreaView, View } from "react-native";
import Animated from "react-native-reanimated";

type Item = {
  id: number,
  image: ImageProps
}

const data: Item[] = [
  {
    id: 1,
    image: require("../Spotify/Image/marilyn.jpg"),
  },
  {
    id: 2,
    image: require("../Spotify/Image/demi.jpg"),
  },
  {
    id: 3,
    image: require("../Spotify/Image/gaga.png"),
  },
];

const HomeScreen = () => {
  const { navigate } = useNavigation();

  const onNavigate = (item: Item) => {
    navigate("Modal", {
      image: item.image,
      sharedTag: `sharedTag${item.id}`,
    });
  };

  return (
    <SafeAreaView>
      <View className="flex gap-4 p-4">
        {data.map((item) => (
          <Pressable key={item.id} onPress={() => onNavigate(item)}>
            <Animated.Image
              sharedTransitionTag={`sharedTag${item.id}`}
              source={item.image}
              className="w-full h-56 rounded-xl"
              resizeMode="cover"
            />
          </Pressable>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
