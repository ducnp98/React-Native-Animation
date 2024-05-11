import { MasonryFlashList } from "@shopify/flash-list";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, Pressable, Text, View } from "react-native";
import Animated, { FadeInDown, SharedValue } from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";
import { SharedElement } from "react-navigation-shared-element";

type Props = {
  selectedCate: string;
  scrollY: SharedValue<number>;
};

const Recipes = ({ selectedCate, scrollY }: Props) => {
  const [data, setData] = useState([]);

  const navigation = useNavigation();

  const getRecipesByCate = async () => {
    try {
      const res = await axios.get(
        `https://themealdb.com/api/json/v1/1/filter.php?c=${selectedCate}`
      );
      if (res && res.data.meals) {
        setData(res.data.meals);
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    setData([]);
    getRecipesByCate();
  }, [selectedCate]);

  const renderItem = (item: any, index: number) => {
    const isEven = index % 2 === 0;
    return (
      <Animated.View
        entering={FadeInDown.delay(index * 200)
          .duration(500)
          .springify()}
      >
        <Pressable
          className={`${isEven ? "pr-2" : "pl-2"} `}
          onPress={() => {
            navigation.navigate("Detail", { item: item });
          }}
        >
          <SharedElement id={`item.${item.strMeal}.photo`}>
            <Animated.Image
              source={{ uri: item.strMealThumb }}
              className={`${isEven ? "h-52" : "h-72"} rounded-3xl`}
            />
          </SharedElement>
          <Text
            numberOfLines={1}
            className="pt-1 pb-4 font-semibold text-gray-600"
          >
            {item.strMeal}
          </Text>
        </Pressable>
      </Animated.View>
    );
  };

  if (!selectedCate) return <></>;

  if (!data.length)
    return (
      <View className="h-20 flex justify-center items-center">
        <ActivityIndicator />
      </View>
    );

  return (
    <View className="flex-1">
      <MasonryFlashList
        data={data}
        numColumns={2}
        renderItem={({ item, index }: { item: any; index: number }) =>
          renderItem(item, index)
        }
        estimatedItemSize={200}
        showsVerticalScrollIndicator={false}
        onScroll={(event) => {
          scrollY.value = event.nativeEvent.contentOffset.y;
        }}
      />
    </View>
  );
};

export default Recipes;
