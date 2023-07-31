import { SafeAreaView, ScrollView, Text, View } from "react-native";
import React, { useReducer, useRef } from "react";
import {
  DrawerContentComponentProps,
  useDrawerProgress,
} from "@react-navigation/drawer";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from "react-native-reanimated";
import DrawerItemList from "./components/DrawerItemList";
import FooterDrawer from "./components/FooterDrawer";
import FooterProfile from "./components/FooterProfile";
import HeaderDrawer from "./components/HeaderDrawer";
import Project from "./components/Project";

const CustomDrawer = (props: DrawerContentComponentProps) => {
  const scrollRef = useRef<ScrollView | null>(null);
  const [show, toggleProfile] = useReducer((s) => !s, false);

  const fun = () => {
    show
      ? scrollRef.current?.scrollTo({
          y: 0,
          animated: true,
        })
      : scrollRef.current?.scrollToEnd({
          animated: true,
        });
    toggleProfile();
  };

  const progress = useDerivedValue(() => {
    return show ? withTiming(1) : withTiming(0);
  });

  const drawerProgress = useDrawerProgress();

  const viewStyles = useAnimatedStyle(() => {
    const translateX = interpolate(drawerProgress.value, [0, 1], [-100, 0]);
    return {
      transform: [{ translateX }],
    };
  });

  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1">
        <HeaderDrawer drawerProgress={drawerProgress} />
        <Animated.ScrollView
          // @ts-ignore
          ref={scrollRef}
          {...props}
          showsVerticalScrollIndicator={false}
          style={[{ marginVertical: 10 }, viewStyles]}
        >
          <DrawerItemList {...props} />
          <Project />
          <FooterProfile progress={progress} />
        </Animated.ScrollView>
        <FooterDrawer onOpenProfile={fun} drawerProgress={drawerProgress} />
      </View>
    </SafeAreaView>
  );
};

export default CustomDrawer;
