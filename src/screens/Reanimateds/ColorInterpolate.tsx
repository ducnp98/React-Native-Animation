import React, { useState } from "react";
import { Dimensions, StyleSheet, Switch, Text, View } from "react-native";
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from "react-native-reanimated";
import Begin from "./Begin";

const Colors = {
  dark: {
    background: "#1E1E1E",
    circle: "#252525",
    text: "#F8F8F8",
  },
  light: {
    background: "#F8F8F8",
    circle: "#FFF",
    text: "#1E1E1E",
  },
};

const SWITCH_TRACK_COLOR = {
  true: "rgba(256, 0, 256, 0.2)",
  false: "rgba(0,0,0,0.1)",
};

type Theme = "light" | "dark";

const ColorInterpolate = () => {
  const [theme, setTheme] = useState<Theme>("light");

  const progress = useDerivedValue(() => {
    return theme === "dark" ? withTiming(1, {duration: 300}) : withTiming(0, {duration: 300});
  }, [theme]);

  const rStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      progress.value,
      [0, 1],
      [Colors.light.background, Colors.dark.background]
    );

    return { backgroundColor };
  });

  const rCircleStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      progress.value,
      [0, 1],
      [Colors.light.circle, Colors.dark.circle]
    );

    return { backgroundColor };
  });

  const rTextStyle = useAnimatedStyle(() => {
    const color = interpolateColor(
      progress.value,
      [0, 1],
      [Colors.light.text, Colors.dark.text]
    );

    return { color };
  });

  return (
    <Animated.View
      style={rStyle}
      className="flex-1 bg-white items-center justify-center"
    >
      <Animated.Text
        style={rTextStyle}
        className="text-6xl uppercase font-bold text tracking-widest mb-9"
      >
        Theme
      </Animated.Text>
      <Animated.View
        className="bg-white items-center justify-center rounded-full w-52 h-52"
        style={[styles.circle, rCircleStyle]}
      >
        <Switch
          value={theme === "dark"}
          onValueChange={(toggled) => {
            setTheme(toggled ? "dark" : "light");
          }}
          trackColor={SWITCH_TRACK_COLOR}
          thumbColor={"violet"}
        />
      </Animated.View>
    </Animated.View>
  );
};

const SIZE = Dimensions.get("window").width * 0.7;

const styles = StyleSheet.create({
  circle: {
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowRadius: 10,
    shadowOpacity: 0.1,
    elevation: 8,
  },
});

export default ColorInterpolate;
