import React, {
  forwardRef,
  memo,
  useCallback,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { Image } from 'react-native';
import { Dimensions, FlatList, ListRenderItem, Platform, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native';

import Animated, { SharedValue, useAnimatedStyle, withTiming, } from 'react-native-reanimated';

const { width } = Dimensions.get('window');

export interface FoodCategoryTabProps {
  categories: string[];
  scrollVelocity: SharedValue<number>;
  onChangeTabIndex?: (index: string) => void;
}

export type FoodCategoryTabRef = {
  scrollToIndex: (index: number) => void;
};

const paddingH = 4;
const w = Platform.select({ web: 428, default: width });
const tabW = w - paddingH;
const maxDisplayedCount = 5;
const itemW = tabW / maxDisplayedCount;

const CategoryTabComponent = forwardRef<FoodCategoryTabRef, FoodCategoryTabProps>(({ categories, onChangeTabIndex, scrollVelocity }, ref) => {
  const [tabIndex, setTabIndex] = useState(0);

  const listViewRef = useRef<FlatList>(null);

  useImperativeHandle(
    ref,
    () => ({
      scrollToIndex: (idx: number) => {
        setTabIndex(idx);

        listViewRef.current?.scrollToIndex({ index: idx, animated: true });
      },
    }),
    [],
  );

  const onPressCategoryItem = (index: number, header: string) => {
    onChangeTabIndex?.(header);

    setTabIndex(index);
  };

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: withTiming(scrollVelocity.value > 300 ? -100 : 0),
        },
      ],
      height: withTiming(scrollVelocity.value < 350 ? 64 : 0),
    };
  }, []);

  const renderItem: ListRenderItem<string> = useCallback(
    ({ item, index }) => {
      const isSelected = index === tabIndex;

      return (
        <FoodCategoryItem
          onPress={onPressCategoryItem}
          item={item}
          index={index}
          isSelected={isSelected}
          style={rStyle}
        />
      );
    },
    [onPressCategoryItem, tabIndex],
  );

  return (
    <View className='flex-row pt-3 px-3'>
      <FlatList
        ref={listViewRef}
        data={categories}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        horizontal
      />
    </View>
  );
});

function FoodCategoryItem({
  isSelected,
  index,
  item,
  style,
  onPress,
}: {
  item: string;
  index: number;
  isSelected: boolean;
  style: ViewStyle;
  onPress: (index: number, header: string) => void;
}) {
  return (
    <TouchableOpacity style={styles.categoryItemBtn} onPress={() => onPress(index, item)}>
      <Animated.View style={[style]}>
        <Image
          className="w-16 h-16 rounded-full"
          source={require("./mcDonoal.png")}
          resizeMode="cover"
        />
      </Animated.View>

      <Text className='text-base text-gray-400 font-bold'>
        {item}
      </Text>

      {isSelected && <View className='h-0.5 bg-gray-300 absolute left-0 right-0 bottom-0' />}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  categoryItemBtn: {
    padding: paddingH,
    marginHorizontal: 10,
    alignItems: 'center',
    minWidth: itemW,
    marginBottom: 8,
  },
});

export const CategoryTab = memo(CategoryTabComponent);
