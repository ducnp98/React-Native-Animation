import MyIcon from "@app/commons/MyIcon";
import React, { memo, useEffect, useRef, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import Lottie from "lottie-react-native";

type Props = {
  Comments: number;
  retweets: number;
  likes: number;
};

const LIKE_COUNTER_HEIGHT = 18;

export const TweetActionButtons = memo(
  ({ Comments, retweets, likes }: Props) => {
    const lottieRef = useRef();
    const [toggleLike, setToggleLike] = useState(false);
    const translateX = useSharedValue(0);

    useEffect(() => {
      if (toggleLike) {
        // @ts-ignore
        lottieRef.current.play();
      }
    }, [toggleLike]);

    const handleLike = () => {
      setToggleLike((pre) => !pre);

      if (translateX.value === 0) {
        translateX.value = withTiming(-LIKE_COUNTER_HEIGHT, { duration: 300 });
      }

      if (translateX.value === -LIKE_COUNTER_HEIGHT) {
        translateX.value = withTiming(
          -LIKE_COUNTER_HEIGHT * 2,
          { duration: 300 },
          (isFinished) => {
            if (isFinished) translateX.value = 0;
          }
        );
      }
    };

    const translateStyle = useAnimatedStyle(() => {
      return {
        transform: [{ translateY: translateX.value }],
      };
    });

    return (
      <>
        <View className="mt-2 flex-row items-center">
          <View className="flex-row items-center justify-end mr-6 relative">
            <MyIcon
              style={{ marginRight: 5 }}
              name="comment-outline"
              size={24}
              color="gray"
            />
            <Text>{Comments}</Text>
          </View>
          <View className="flex-row items-center justify-end mr-6 relative">
            <MyIcon
              style={{ marginRight: 5 }}
              name="repeat-variant"
              size={30}
              color="gray"
            />
            <Text>{retweets}</Text>
          </View>
          <View className="flex-row items-center justify-end mr-6 relative">
            <Pressable onPress={handleLike}>
              <MyIcon
                style={{ marginRight: 5 }}
                name="heart"
                size={22}
                color={toggleLike ? "transparent" : "gray"}
              />
            </Pressable>

            <View
              className="overflow-hidden"
              style={{ height: LIKE_COUNTER_HEIGHT }}
            >
              <Animated.View style={translateStyle}>
                <Text style={{ color: toggleLike ? "#f91980" : "black" }}>
                  {likes}
                </Text>
                <Text style={{ color: toggleLike ? "#f91980" : "black" }}>
                  {likes + 1}
                </Text>
                <Text style={{ color: toggleLike ? "#f91980" : "black" }}>
                  {likes}
                </Text>
              </Animated.View>
            </View>

            {toggleLike && (
              <View className="w-8 h-8 absolute bg-transparent -mt-4 -left-1.5 top-2.5">
                <Lottie
                  // @ts-ignore
                  ref={lottieRef}
                  source={require("./like.json")}
                  style={styles.lottie}
                  autoPlay={false}
                  loop={false}
                  progress={0.3}
                  resizeMode="cover"
                />
                <Pressable
                  onPress={handleLike}
                  className="w-6 h-6 absolute left-2 top-1"
                ></Pressable>
              </View>
            )}
          </View>

          <MyIcon
            style={{ marginRight: 5 }}
            name="tray-arrow-up"
            size={24}
            color="gray"
          />
        </View>
      </>
    );
  }
);

const styles = StyleSheet.create({
  lottie: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    transform: [{ scale: 2.3 }],
  },
});
