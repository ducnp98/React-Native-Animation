import React from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { Header } from "./Header";
import { tweets } from "./data";
import TweetDetail from "./TweetDetail";

const TwitterHome = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <Header />
      <View className="flex-1">
        <ScrollView className="px-4">
          {tweets.map((data, index) => (
            <TweetDetail detail={data} key={index} />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default TwitterHome;
