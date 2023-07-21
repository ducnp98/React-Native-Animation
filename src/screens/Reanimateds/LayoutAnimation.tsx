import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Animated, { FadeIn, FadeOut, Layout } from "react-native-reanimated";

const LIST_ITEM_COLOR = "#1798DE";

interface Item {
  id: number;
}

const LayoutAnimation = () => {
  const initialMode = useRef<boolean>(true);

  useEffect(() => {
    initialMode.current = false;
  }, []);

  const [items, setItems] = useState<Item[]>(
    new Array(5).fill(0).map((_, index) => ({ id: index }))
  );

  const onAdd = useCallback(() => {
    setItems((currentItems) => {
      const nextItemId = (currentItems[currentItems.length - 1]?.id ?? 0) + 1;
      return [...currentItems, { id: nextItemId }];
    });
  }, []);

  const onDelete = useCallback((itemId: number) => {
    setItems((currentItems) => {
      return currentItems.filter((item) => item.id !== itemId);
    });
  }, []);

  return (
    <View className="flex-1 bg-white">
      <View className="mx-5 flex-1">
        <TouchableOpacity className="w-16 h-16 bg-purple-800 rounded-full absolute bottom-8 right-4 z-10 items-center justify-center" onPress={onAdd}>
          <Text style={{ color: "white", fontSize: 40 }}>+</Text>
        </TouchableOpacity>
        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={{ paddingVertical: 50 }}
        >
          {items.map((item, index) => {
            return (
              <Animated.View
                key={item.id}
                entering={
                  initialMode.current ? FadeIn.delay(300 * index) : FadeIn
                }
                exiting={FadeOut}
                layout={Layout.delay(100)}
                onTouchEnd={() => onDelete(item.id)}
                style={styles.listItem}
                className="h-24 bg-purple-300 w-full my-3 rounded-lg self-center"
              />
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    elevation: 5,
    shadowColor: "black",
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 20,
  },
});

export default LayoutAnimation;
