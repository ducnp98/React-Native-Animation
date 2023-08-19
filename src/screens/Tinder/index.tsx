import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  Dimensions,
  Image,
  PanResponder,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { TinderData } from "./data";
import TinderCard from "./TinderCard";
import Animated, {
  Extrapolation,
  interpolate,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
const { height, width } = Dimensions.get("window");

const Tinder = () => {
  const [data, setData] = useState(TinderData);
  const swipe = useSharedValue({ x: 0, y: 0 });

  useEffect(() => {
    if (!data.length) {
      setData(TinderData);
    }
  }, [data]);

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (_, { dx, dy }) => {
      swipe.value = { x: dx, y: dy };
    },
    onPanResponderRelease: (_, { dx, dy }) => {
      const direction = Math.sign(dx);
      const isActionActiove = Math.abs(dx) > 200;
      if (isActionActiove) {
        swipe.value = withTiming(
          { x: direction * 500, y: dy },
          { duration: 500 },
          (isFinished) => {
            if (isFinished) {
              runOnJS(removeCard)();
            }
          }
        );
      } else {
        swipe.value = withSpring({ x: 0, y: 0 }, { duration: 1600 });
      }
    },
  });

  const removeCard = () => {
    setData((prevState) => prevState.slice(0, -1));
    swipe.value = { x: 0, y: 0 };
  };

  const handleChoiceButtons = useCallback(
    (direction: number) => {
      swipe.value = withTiming(
        { x: direction * width, y: 0 },
        { duration: 500 },
        (isFinished) => {
          if (isFinished) {
            runOnJS(removeCard)();
          }
        }
      );
    },
    [removeCard, swipe.value]
  );

  const iconHeartStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: interpolate(
            swipe.value.x,
            [0, 100],
            [1, 1.3],
            Extrapolation.CLAMP
          ),
        },
      ],
    };
  });

  const iconCancelStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: interpolate(
            swipe.value.x,
            [0, -100],
            [1, 1.3],
            Extrapolation.CLAMP
          ),
        },
      ],
    };
  });

  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1">
        {data.map((item, index) => {
          let isFirst = index === data.length - 1;
          let dragHandlers = isFirst ? panResponder.panHandlers : {};

          return (
            <TinderCard
              key={item.id}
              item={item}
              isFirst={isFirst}
              swipe={swipe}
              {...dragHandlers}
            />
          );
        })}
        <View className="w-full absolute h-24 bottom-0 flex-row justify-evenly items-center">
          <TouchableOpacity
            className="w-16 h-16 bg-white rounded-full justify-center items-center"
            style={styles.shadow}
            onPress={() => handleChoiceButtons(-1)}
          >
            <Animated.View style={iconCancelStyle}>
              <Image
                className="w-8 h-8"
                source={require("./images/cancel.png")}
              />
            </Animated.View>
          </TouchableOpacity>
          <TouchableOpacity
            className="w-16 h-16 bg-white rounded-full justify-center items-center"
            style={styles.shadow}
            onPress={() => handleChoiceButtons(1)}
          >
            <Animated.View style={iconHeartStyle}>
              <Image
                className="w-8 h-8"
                source={require("./images/heart.png")}
                style={{ width: 40, height: 40, tintColor: "#00FFC8" }}
              />
            </Animated.View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  shadow: {
    elevation: 5,
    shadowColor: "gray",
    shadowRadius: 6,
    shadowOffset: { height: 5, width: 0 },
    shadowOpacity: 0.1,
    borderWidth: 1,
    borderColor: "#d9d9d9",
  },
});

export default Tinder;
