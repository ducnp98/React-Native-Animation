import { View, Text, NativeSyntheticEvent, NativeScrollEvent, ViewToken, Image, SafeAreaView } from 'react-native'
import React, { useCallback, useRef } from 'react'
import { FlashList } from '@shopify/flash-list'
import { useSharedValue } from 'react-native-reanimated'
import { Catagories, MenuList } from './data'
import { CategoryTab } from './CatagoriesTab'
import { CommonStyles } from '@app/commons/Styles/CommonStyles'

export type FoodCategoryTabRef = {
  scrollToIndex: (index: number) => void;
};


const MenuCatagories = () => {
  const listRef = useRef<FlashList<string | any> | null>(null);
  const prevSection = useRef('');
  const categoriesListRef = useRef<FoodCategoryTabRef>(null);
  const selectedCatagory = useRef<string>('');

  const scrollVelocity = useSharedValue<number>(0);

  const onScroll = useCallback(
    (e: NativeSyntheticEvent<NativeScrollEvent>) => {
      scrollVelocity.value = e.nativeEvent.contentOffset.y;
    },
    [scrollVelocity],
  );

  const handleScrollSpy = (e: { changed: Array<ViewToken> }) => {
    const currentSection = e.changed[0].item;

    if (typeof currentSection !== 'string' || prevSection.current === currentSection) {
      return;
    }

    prevSection.current = currentSection;

    const idx = Catagories.findIndex(catagory => currentSection === catagory);

    if (idx !== -1) {
      categoriesListRef.current?.scrollToIndex(idx);
    }
  }

  const onChangeTabIndex = useCallback((header: string) => {
    selectedCatagory.current = header;

    listRef.current?.scrollToItem({
      item: header,
      animated: true,
      // viewOffset: 1,
    });
  }, []);

  return (
    <SafeAreaView className='flex-1'>
      <View className='flex-1'>
        <CategoryTab
          scrollVelocity={scrollVelocity}
          ref={categoriesListRef}
          categories={Catagories}
          onChangeTabIndex={onChangeTabIndex}
        />
        <FlashList
          ref={listRef}
          data={MenuList}
          onScroll={onScroll}
          onViewableItemsChanged={handleScrollSpy}
          viewabilityConfig={SECTION_VIEWABILITY_CONFIG}
          scrollEventThrottle={16}
          renderItem={({ item }) => {
            if (typeof item === 'string') {
              return <View className='px-4 py-2'><Text className='text-lg font-bold'>{item}</Text></View>;
            }
            return (
              <View className='flex-row mx-4 my-2 items-center rounded-lg overflow-hidden' style={CommonStyles.shadow}>
                <Image
                  className="w-20 h-20 mr-4"
                  source={require("./burger.png")}
                  resizeMode="cover"
                />
                <Text className='text-base text-gray-500'>{item.name}</Text>
              </View>
            );
          }}
          estimatedItemSize={130}
          getItemType={item => typeof item}
        />
      </View>
    </SafeAreaView>
  )
}

const SECTION_VIEWABILITY_CONFIG = {
  minimumViewTime: 100,
  itemVisiblePercentThreshold: 10,
  waitForInteraction: true,
};

export default MenuCatagories