import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useMemo, useState } from "react";
import {
  ActivityIndicator,
  Image,
  ImageSourcePropType,
  Platform,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
import MyImage from "./MyImage";
import axios from "axios";
import YoutubePlayer from "react-native-youtube-iframe";
import Animated, { useSharedValue, withTiming } from "react-native-reanimated";
import { SharedElement } from "react-navigation-shared-element";

type Props = {};

const DetailFoodRecipe = (props: Props) => {
  const route = useRoute();

  const navigation = useNavigation();

  //@ts-ignore
  const item = route.params?.item;

  const image = item?.strMealThumb;

  const title = item?.strMeal;

  const [data, setData] = useState<any>();

  const getRecipeDetail = async () => {
    try {
      const res = await axios.get(
        `https://themealdb.com/api/json/v1/1/lookup.php?i=${item?.idMeal}`
      );

      if (res && res.data) {
        setData(res.data.meals[0]);
      }
    } catch (error) {
      console.log("Error", error);
    }
  };

  useEffect(() => {
    getRecipeDetail();
  }, [item.idMeal]);

  const itemInfo = (
    imagePath: ImageSourcePropType,
    title: string,
    sub: string
  ) => {
    return (
      <View
        style={{ width: 70 }}
        className="py-2 rounded-full justify-center items-center bg-amber-400"
      >
        <View className="w-14 h-14 rounded-full flex justify-center items-center bg-white">
          <Image source={imagePath} className="w-8 h-8" />
        </View>
        <Text className="text-gray-700 text-lg font-bold mt-1">35</Text>
        <Text className="text-gray-700 font-semibold mb-2">mins</Text>
      </View>
    );
  };

  const ingredients = useMemo(() => {
    let value: any[] = [];

    if (data) {
      Object.keys(data).forEach((x) => {
        if (x.includes("strIngredient") && data[x]) {
          value.push(data[x]);
        }
      });
    }

    return value;
  }, [data]);

  const measures = useMemo(() => {
    let value: any[] = [];

    if (data) {
      Object.keys(data).forEach((x) => {
        if (x.includes("strMeasure") && data[x]) {
          value.push(data[x]);
        }
      });
    }

    return value;
  }, [data]);

  const getYoutubeVideoId = (url: string) => {
    const regex =
      /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/ ]{11})/;
    const match = url.match(regex);
    return match && match[1];
  };

  const headerStyle = useSharedValue(0);

  useEffect(() => {
    headerStyle.value = withTiming(1, {duration: 1000});
  }, []);

  return (
    <ScrollView className="flex-1">
      <View className="flex-1 w-full h-96 p-2">
        <SharedElement id={`item.${item.strMeal}.photo`}>
          <Image
            source={{ uri: image }}
            className="w-full h-full"
            style={{ borderRadius: Platform.OS === "android" ? 20 : 50 }}
            resizeMode="cover"
          />
        </SharedElement>
      </View>
      <Animated.View
        style={{ opacity: headerStyle }}
        className="absolute top-0 flex-row justify-between items-center w-full pt-12 px-5"
      >
        <Pressable onPress={() => navigation.goBack()}>
          <Image source={require("./images/back.png")} className="w-12 h-12" />
        </Pressable>
        <View className="bg-white/60 p-2 rounded-full">
          <Image source={require("./images/heart.png")} className="w-8 h-8" />
        </View>
      </Animated.View>
      {data ? (
        <View className="p-4">
          <Text className="text-gray-700 text-2xl font-bold">{title}</Text>
          <Text className="text-gray-400 text-base font-bold mt-2">
            {data?.strArea}
          </Text>
          <View className="flex-1 flex-row justify-between my-4">
            {itemInfo(require("./images/clock.png"), "35", "mins")}
            {itemInfo(require("./images/people.png"), "35", "mins")}
            {itemInfo(require("./images/fire.png"), "35", "mins")}
            {itemInfo(require("./images/layer.png"), "35", "mins")}
          </View>
          <View>
            <Text className="text-gray-700 text-2xl font-bold mb-3">
              Ingredient
            </Text>
            {ingredients.map((x, key) => (
              <View className="flex-row gap-4 pt-2 px-2" key={key}>
                <View className="w-4 h-4 bg-amber-400 rounded-full" />
                <Text>
                  <Text className="text-gray-700 font-bold">
                    {measures[key]}
                  </Text>
                  <Text className="text-gray-700 font-medium">{`  ${x}`}</Text>
                </Text>
              </View>
            ))}
          </View>
          <View>
            <Text className="text-gray-700 text-2xl font-bold my-3 mt-5">
              Instruction
            </Text>
            <Text className="text-gray-700 text-base mb-3">
              {data.strInstructions}
            </Text>
          </View>
          {data.strYoutube ? (
            <View>
              <Text className="text-gray-700 text-2xl font-bold my-3 mt-5">
                Recipe youtube
              </Text>
              <YoutubePlayer
                height={300}
                play={false}
                videoId={getYoutubeVideoId(data.strYoutube) ?? ""}
                onChangeState={() => {}}
              />
            </View>
          ) : (
            <></>
          )}
        </View>
      ) : (
        <ActivityIndicator />
      )}
    </ScrollView>
  );
};

export default DetailFoodRecipe;
