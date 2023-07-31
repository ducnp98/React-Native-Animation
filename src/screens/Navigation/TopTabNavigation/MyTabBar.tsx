import { View, TouchableOpacity } from "react-native";
import { MaterialTopTabBarProps } from "@react-navigation/material-top-tabs";
import Lottie from "lottie-react-native";
import { useCallback } from "react";
import { Text } from "react-native-svg";
import TabIcon from "./Tab";
import Animated, {
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

const MyTabBar = ({
  state,
  descriptors,
  navigation,
  position,
}: MaterialTopTabBarProps) => {
  const options = useCallback(
    (key: string) => {
      return descriptors[key].options;
    },
    [descriptors]
  );

  const isFocused = useCallback(
    (index: number) => {
      return state.index === index;
    },
    [state.index]
  );

  const onPress = (key: string, name: string, index: number) => {
    const event = navigation.emit({
      type: "tabPress",
      target: key,
      canPreventDefault: true,
    });

    if (!isFocused(index) && !event.defaultPrevented) {
      navigation.navigate(name);
    }
  };

  const onLongPress = (key: string) => {
    navigation.emit({
      type: "tabLongPress",
      target: key,
    });
  };

  const iconStyle = (index: number) =>
    useAnimatedStyle(() => {
      return {
        opacity: withTiming(state.index === index ? 1 : 0, { duration: 400 }),
        transform: [
          {
            scale: withTiming(state.index === index ? 1 : 0, { duration: 400 })
          }
        ]
      };
    });

  return (
    <View className="flex-row">
      {state.routes.map((route, index) => {
        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused(index) ? { selected: true } : {}}
            accessibilityLabel={options(route.key).tabBarAccessibilityLabel}
            testID={options(route.key).tabBarTestID}
            onPress={() => onPress(route.key, route.name, index)}
            onLongPress={() => onLongPress(route.key)}
            className="flex-1 justify-center items-center py-1"
          >
            <Animated.Text style={iconStyle(index)}>
              <TabIcon
                options={options}
                routeKey={route.key}
                isFocused={() => isFocused(index)}
              />
            </Animated.Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default MyTabBar;
