import React from "react";
import { View } from "react-native";
import Person1 from "./Person1";
import Person2 from "./Person2";

const HOC = () => {
  return <View className="flex flex-1 bg-yellow-100 justify-center items-center">
    <Person1 />
    <Person2/>
  </View>;
};

export default HOC;
