import React from "react";
import { FlatList } from "react-native-gesture-handler";
import { categories } from "../../data";
import Category from "./Category";

type Props = {
  activeCategory: number;
  setActiveCategory: (id: number) => void;
};

const Categories = ({ activeCategory, setActiveCategory }: Props) => {
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={categories}
      keyExtractor={(item) => item.id.toString()}
      className="overflow-visible"
      renderItem={({ item }) => (
        <Category
          key={item.id}
          item={item}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
      )}
    />
  );
};

export default Categories;
