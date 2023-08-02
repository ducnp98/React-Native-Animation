import React from "react";
import { SafeAreaView } from "react-native";
import AccordingItem from "./AccordingItem";

const According = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <AccordingItem title="Legend never die" />
      <AccordingItem title="Skyscraper" />
    </SafeAreaView>
  );
};

export default According;
