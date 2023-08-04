import React from "react";
import { FlatList, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import CategoryItem from "./CategoryItem";
import { Catagories } from "../../data";
import Header from "./Header";
import Menu from "./Menu";
import Radio from "./Radio";

const HomeScreen = () => {
  return (
    <LinearGradient colors={["#040306", "#131624"]} className="flex-1">
      <View className="mt-10 mx-2 flex-1">
        <FlatList
          data={Catagories}
          renderItem={({ item, index }) => (
            <CategoryItem index={index} category={item} key={item.id} />
          )}
          className="flex-1"
          numColumns={2}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => (
            <View style={{ height: 20, width: 10 }} />
          )}
          ListHeaderComponent={
            <>
              <Header />
              <Menu />
            </>
          }
          ListFooterComponent={
            <>
              <Radio />
            </>
          }
        />
      </View>
    </LinearGradient>
  );
};

export default HomeScreen;
