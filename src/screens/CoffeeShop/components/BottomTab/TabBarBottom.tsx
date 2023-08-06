import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import React, { useReducer } from "react";
import { LayoutChangeEvent, View } from "react-native";
import { themeColors } from "../..";
import TabItem from "./TabItem";
import Animated, { useAnimatedStyle, useDerivedValue, withTiming } from "react-native-reanimated";

type iconLayout = {
  x: number;
  index: number;
};

const TabBarBottom = ({
  state: { index: activeIndex, routes },
  navigation,
  descriptors,
}: BottomTabBarProps) => {
  const reducer = (
    state: iconLayout[],
    action: { x: number; index: number }
  ) => {
    return [...state, { x: action.x, index: action.index }];
  };

  const [layout, dispatch] = useReducer(reducer, []);
  const handelLayout = (e: LayoutChangeEvent, index: number) => {
    dispatch({ x: e.nativeEvent.layout.x, index: index });
  };

  const roundViewIconAnimated = useDerivedValue(() => {
    if (layout.length !== routes.length) return 0;
    return ([...layout].find((x) => x.index === activeIndex)?.x ?? 0) - 19;
  }, [activeIndex, layout]);

  const roundViewIconStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {translateX: withTiming(roundViewIconAnimated.value)}
      ]
    }
  })

  return (
    <View
      className="h-20 w-auto rounded-full mx-5"
      style={{ backgroundColor: themeColors.bgLight }}
    >
      <Animated.View style={roundViewIconStyle} className="h-14 w-14 bg-white rounded-full absolute top-3 left-2 z-0" />
      <View className="flex-row justify-between items-center h-full px-9">
        {routes.map((item, key) => {
          const active = activeIndex === key;
          const { options } = descriptors[item.key];
          return (
            <TabItem
              key={item.key}
              active={active}
              options={options}
              onLayout={(e) => {
                handelLayout(e, key);
              }}
              onPress={() => navigation.navigate(item.name)}
            />
          );
        })}
      </View>
    </View>
  );
};

export default TabBarBottom;
