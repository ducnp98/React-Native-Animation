import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Image,
  Platform,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";
import MyImage from "./MyImage";

interface IProps {
  selected: string;
  setSelected: (name: string) => void;
}

const Categories = ({ selected, setSelected }: IProps) => {
  const [data, setData] = useState<any>([]);

  const getAllCategories = async () => {
    try {
      const res = await axios.get(
        "https://themealdb.com/api/json/v1/1/categories.php"
      );

      if (res && res.data) {
        setTimeout(() => {
          setData(res.data.categories);
          setSelected(res.data.categories[0].strCategory);
        }, 300);
      }
    } catch (error) {
      console.log("error", error);
    }
  };
  useEffect(() => {
    getAllCategories();
  }, []);

  if (!data.length) {
    return <></>;
  }

  return (
    <Animated.View entering={FadeInDown.duration(700).springify()} className='bg-white'>
      <ScrollView
        horizontal
        className="py-4 space-x-3"
        showsHorizontalScrollIndicator={false}
      >
        {data.map((item: any) => (
          <Pressable
            key={item.idCategory}
            onPress={() => setSelected(item.strCategory)}
          >
            <View className="flex items-center">
              <View
                className={`rounded-full p-2 ${
                  selected === item.strCategory ? "bg-amber-300" : "bg-gray-300"
                }`}
              >
                <MyImage
                  uri={item.strCategoryThumb}
                  myClassName="w-14 h-14 rounded-full"
                />
              </View>
            </View>

            <Text className="text-center mt-2 text-gray-600 font-medium">
              {item.strCategory}
            </Text>
          </Pressable>
        ))}
      </ScrollView>
    </Animated.View>
  );
};

export default Categories;
