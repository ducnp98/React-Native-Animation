import React, { useCallback } from "react";
import {
  Dimensions,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from "react-native";
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
  TapGestureHandler,
  TapGestureHandlerGestureEvent,
} from "react-native-gesture-handler";
import LinearGradient from "react-native-linear-gradient";
import Animated, {
  interpolateColor,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";

const width = Dimensions.get("window").width * 0.9;

type objectColor = {
  x: number;
  y: number;
};

interface ColorPickerProps {
  maxWidth: number;
  onColorChanged?: (color: string | number) => void;
  colors: string[];
  start: objectColor;
  end: objectColor;
}

const ColorPickerView: React.FC<ColorPickerProps> = ({
  colors,
  start,
  end,
  maxWidth,
  onColorChanged,
}) => {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const scale = useSharedValue(1);

  const adjustedTranslateX = useDerivedValue(() => {
    return Math.min(
      Math.max(translateX.value, 0),
      maxWidth - CIRCLE_PICKER_SIZE
    );
  });

  const onEnd = useCallback(() => {
    "worklet";
    translateY.value = withSpring(0);
    scale.value = withSpring(1);
  }, []);

  const panGestureEvent = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    { x: number }
  >({
    onStart: (_, context) => {
      context.x = adjustedTranslateX.value;
    },
    onActive: (event, context) => {
      translateX.value = event.translationX + context.x;
    },
    onEnd,
  });

  const tapGestureEvent =
    useAnimatedGestureHandler<TapGestureHandlerGestureEvent>({
      onStart: (event) => {
        translateY.value = withSpring(-CIRCLE_PICKER_SIZE);
        scale.value = withSpring(1.2);
        translateX.value = withTiming(event.absoluteX - CIRCLE_PICKER_SIZE);
      },
      onEnd,
    });

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: adjustedTranslateX.value },
        { scale: scale.value },
        { translateY: translateY.value },
      ],
    };
  });

  const rInternalPickerStyle = useAnimatedStyle(() => {
    const inputRange = colors.map(
      (_, index) => (index / colors.length) * maxWidth
    );

    const backgroundColor = interpolateColor(
      translateX.value,
      inputRange,
      colors
    );

    onColorChanged?.(backgroundColor);

    return {
      backgroundColor,
    };
  });

  return (
    <TapGestureHandler onGestureEvent={tapGestureEvent}>
      <Animated.View>
        <PanGestureHandler onGestureEvent={panGestureEvent}>
          <Animated.View style={{ justifyContent: "center" }}>
            <LinearGradient
              style={{ width: width, borderRadius: 20 }}
              colors={colors}
              start={start}
              end={end}
              className="w-full h-10"
            />

            <Animated.View style={[styles.picker, rStyle]}>
              <Animated.View
                style={[styles.internalPicker, rInternalPickerStyle]}
              />
            </Animated.View>
          </Animated.View>
        </PanGestureHandler>
      </Animated.View>
    </TapGestureHandler>
  );
};

const CIRCLE_PICKER_SIZE = 45;
const INTERNAL_PICKER_SIZE = CIRCLE_PICKER_SIZE / 2;

const styles = StyleSheet.create({
  picker: {
    position: "absolute",
    backgroundColor: "#fff",
    width: CIRCLE_PICKER_SIZE,
    height: CIRCLE_PICKER_SIZE,
    borderRadius: CIRCLE_PICKER_SIZE / 2,
    alignItems: "center",
    justifyContent: "center",
  },
  internalPicker: {
    width: INTERNAL_PICKER_SIZE,
    height: INTERNAL_PICKER_SIZE,
    borderRadius: INTERNAL_PICKER_SIZE / 2,
    borderWidth: 1.0,
    borderColor: "rgba(0,0,0,0.2)",
  },
});

export { ColorPickerView };
