import { useNavigation } from "@react-navigation/native";
import React from "react";
import { ScrollView, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const textStyle = "text-white text-base font-bold text-center";

const HomeScreen = () => {
  const { navigate } = useNavigation();

  const insets = useSafeAreaInsets();

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
      <ScrollView style={{ paddingTop: insets.top || 16 }}>
        <Button
          title="Animated"
          onPress={() =>
            navigate("AnimatedStack", { screen: "AnimatedScreen" })
          }
          color="bg-lime-300"
        />
        <Button
          title="React Hook"
          onPress={() => navigate("ReactHookStack", { screen: "ReactHook" })}
          color="bg-lime-400"
        />
        <Button
          title="Reanimated"
          onPress={() =>
            navigate("ReanimatedStack", { screen: "ReanimatedScreen" })
          }
          color="bg-lime-500"
        />
        <Button
          title="Navigation"
          onPress={() => navigate("NavigationStack", { screen: "Navigation" })}
          color="bg-lime-600"
        />
        <Button
          title="Reanimated 2"
          onPress={() =>
            navigate("Reanimated2Stack", { screen: "Reanimated2Screen" })
          }
          color="bg-lime-700"
        />
        <Button
          title="Spotify"
          onPress={() => navigate("Spotify")}
          color="bg-lime-800"
        />
        <Button
          title="Share Element Transition"
          onPress={() => navigate("ShareElementTransition")}
          color="bg-lime-900"
        />
        <Button
          title="CoffeeShop"
          onPress={() => navigate("CoffeeShop")}
          color="bg-lime-950"
        />
        <Button
          title="Video Player"
          onPress={() => navigate("VideoPlayer")}
          color="bg-cyan-950"
        />
        <Button
          title="Blur Background"
          onPress={() => navigate("BlurBackground")}
          color="bg-cyan-900"
        />
        <Button
          title="Tinder"
          onPress={() => navigate("Tinder")}
          color="bg-cyan-800"
        />
        <Button
          title="NeomorphismDemo"
          onPress={() => navigate("NeomorphismDemo")}
          color="bg-cyan-700"
        />
        <Button
          title="OTP"
          onPress={() => navigate("OTP")}
          color="bg-cyan-600"
        />
        <Button
          title="Bridge"
          onPress={() => navigate("Bridge")}
          color="bg-cyan-500"
        />
        <Button
          title="Custom Gallery Picker"
          onPress={() => navigate("CustomGalleryPicker")}
          color="bg-cyan-400"
        />
        <Button
          title="Live Chart"
          onPress={() => navigate("LiveChart")}
          color="bg-cyan-300"
        />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
