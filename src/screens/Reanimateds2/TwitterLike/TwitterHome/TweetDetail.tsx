import React from "react";
import { Pressable, View } from "react-native";
import { Tweet } from "./data";
import { Image } from "react-native";
import { Text } from "react-native";
import { TweetActionButtons } from "./TweetActionButtons";
import { useNavigation } from "@react-navigation/native";
import Animated from "react-native-reanimated";

type Props = {
  detail: Tweet;
};

const TweetDetail = ({ detail }: Props) => {
  const {
    name,
    userName,
    description,
    photo,
    likes,
    retweets,
    Comments,
    profilePic,
  } = detail;
  const { navigate } = useNavigation();

  const onGoToAccountDetail = () => {
    navigate("TwitterAccountDetail", {
      tag: userName,
      name: "Nguyen Phuoc Duc",
      image: profilePic,
    });
  };
  return (
    <View className="flex-row my-5">
      <Pressable onPress={onGoToAccountDetail}>
        <Animated.Image
          sharedTransitionTag={userName}
          resizeMode="cover"
          className="w-16 h-16 rounded-full mr-2"
          source={{
            uri: profilePic,
          }}
        />
      </Pressable>
      <View className="flex-1">
        <View className="flex-row">
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>{name}</Text>
          <Text style={{ color: "gray", marginLeft: 7, fontSize: 16 }}>
            {userName} - 3h
          </Text>
        </View>
        <View style={{ marginTop: 5 }}>
          <Text>{description}</Text>
          {photo ? (
            <View className="p-2 border-gray-500 mt-2 rounded-lg">
              <Image
                className="w-full h-64 rounded-md"
                style={{ resizeMode: "contain" }}
                source={{
                  uri: "https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/12/9/16ee821475749f36~tplv-t2oaga2asx-image.image",
                }}
              />
            </View>
          ) : null}
        </View>
        <TweetActionButtons
          Comments={Comments}
          retweets={retweets}
          likes={likes}
        />
      </View>
    </View>
  );
};

export default TweetDetail;
