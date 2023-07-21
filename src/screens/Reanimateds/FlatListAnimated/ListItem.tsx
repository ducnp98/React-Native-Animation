import React from "react";
import { StyleSheet, View, ViewToken } from "react-native";
import Animated, {
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

type ListItemProps = {
  viewableItems: Animated.SharedValue<ViewToken[]>;
  item: {
    id: number;
  };
};

const ListItem: React.FC<ListItemProps> = React.memo(
  ({ item, viewableItems }) => {
    console.log('render', item.id);
    const rStyle = useAnimatedStyle(() => {
      const isVisible = Boolean(
        viewableItems.value
          .filter((item) => item.isViewable)
          .find((viewableItem) => viewableItem.item.id === item.id)
      );

      return {
        opacity: withTiming(isVisible ? 1 : 0),
        transform: [
          {
            scale: withTiming(isVisible ? 1 : 0.6),
          },
        ],
      };
    }, []);

    return (
      <Animated.View
        className="h-20 w-9/12 bg-purple-300 self-center rounded-r-lg mt-8"
        style={rStyle}
      />
    );
  }
);

export { ListItem };
