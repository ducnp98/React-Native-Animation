import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const textStyle = "text-white text-base font-bold text-center";

const HomeScreen = () => {
  const { navigate } = useNavigation();

  const Button = ({
    title,
    onPress,
    color,
  }: {
    title: string;
    onPress: () => void;
    color: string;
  }) => {
    return (
      <TouchableOpacity
        className={`rounded-lg py-2 px-4 mb-2 ${color}`}
        onPress={onPress}
      >
        <Text className={textStyle}>{title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View className="flex-1 bg-white flex justify-center items-center">
      <View>
        <Button
          title="Animated"
          onPress={() =>
            navigate("AnimatedStack", { screen: "AnimatedScreen" })
          }
          color="bg-slate-500"
        />
        <Button
          title="React Hook"
          onPress={() => navigate("ReactHookStack", { screen: "ReactHook" })}
          color="bg-slate-600"
        />
        <Button
          title="Reanimated"
          onPress={() =>
            navigate("ReanimatedStack", { screen: "ReanimatedScreen" })
          }
          color="bg-slate-700"
        />
        <Button
          title="Navigation"
          onPress={() => navigate("NavigationStack", { screen: "Navigation" })}
          color="bg-slate-800"
        />
        <Button
          title="Reanimated 2"
          onPress={() =>
            navigate("Reanimated2Stack", { screen: "Reanimated2Screen" })
          }
          color="bg-slate-900"
        />
        <Button
          title="Spotify"
          onPress={() => navigate("Spotify")}
          color="bg-neutral-900"
        />
        <Button
          title="Share Element Transition"
          onPress={() => navigate("ShareElementTransition")}
          color="bg-neutral-800"
        />
        <Button
          title="CoffeeShop"
          onPress={() => navigate("CoffeeShop")}
          color="bg-neutral-700"
        />
        <Button
          title="Video Player"
          onPress={() => navigate("VideoPlayer")}
          color="bg-neutral-600"
        />
        <Button
          title="Blur Background"
          onPress={() => navigate("BlurBackground")}
          color="bg-neutral-500"
        />
      </View>
    </View>
  );
};

export default HomeScreen;
