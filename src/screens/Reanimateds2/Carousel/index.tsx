import React, { useEffect, useRef, useState } from "react";
import { StatusBar, useWindowDimensions, View, ViewToken } from "react-native";
import { movies } from "./data";
import BackImage from "./BackImage";
import Animated, {
  useAnimatedRef,
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";
import Gradient from "./Gradient";
import RenderItem from "./RenderItem";
import TextInfo from "./TextInfo";
import WatchNowButton from "./WatchNowButton";
import PlusButton from "./PlusButton";
import Pagination from "./Pagination";

const Carousel = () => {
  const x = useSharedValue(0);
  const offset = useSharedValue(0);
  const interval = useRef<NodeJS.Timeout>();
  const { width } = useWindowDimensions();
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [paginationIndex, setPaginationIndex] = useState(0);

  console.log('isAutoPlay', isAutoPlay)

  const ref = useAnimatedRef<Animated.FlatList<any>>();

  const [data, setData] = useState(movies);
  const [currentIndex, setCurrentIndex] = useState(0);

  const onScroll = useAnimatedScrollHandler({
    onScroll: (e) => {
      x.value = e.contentOffset.x;
    },
    onMomentumEnd: (e) => {
      offset.value = e.contentOffset.x;
    },
  });

  const viewabilityConfig = {
    itemVisiblePercentThreshold: 50,
  };

  const onViewableItemsChanged = ({
    viewableItems,
  }: {
    viewableItems: ViewToken[];
  }) => {
    if (
      viewableItems[0].index !== undefined &&
      viewableItems[0].index !== null
    ) {
      setCurrentIndex(viewableItems[0].index);
      setPaginationIndex(viewableItems[0].index % movies.length);
    }
  };

  useEffect(() => {
    if (isAutoPlay === true) {
      interval.current = setInterval(() => {
        offset.value = offset.value + width;
      }, 4000);
    } else {
      clearInterval(interval.current);
    }
    return () => {
      clearInterval(interval.current);
    };
  }, [isAutoPlay, offset, width]);

  const viewabilityConfigCallbackPairs = useRef([
    { viewabilityConfig, onViewableItemsChanged },
  ]);

  return (
    <View className="flex-1 bg-slate-800">
      <StatusBar translucent backgroundColor={"transparent"} />
      {data.map((item, index) => {
        return (
          <View key={index}>
            {currentIndex === index && (
              <BackImage index={index} item={item} x={x} />
            )}
          </View>
        );
      })}
      <Gradient />
      <Animated.FlatList
        //@ts-ignore
        ref={ref}
        style={{ height: width, flexGrow: 0 }}
        onScrollBeginDrag={() => {
          setIsAutoPlay(false);
        }}
        onScrollEndDrag={() => {
          setIsAutoPlay(true);
        }}
        onScroll={onScroll}
        scrollEventThrottle={16}
        horizontal={true}
        bounces={false}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
        onEndReached={() => setData([...data, ...movies])}
        onEndReachedThreshold={0.5}
        data={data}
        keyExtractor={(_, index) => `list_item${index}`}
        renderItem={({ item, index }) => {
          return <RenderItem item={item} index={index} x={x} />;
        }}
      />
      {data.map((item, index) => {
        return (
          <View key={index}>
            {currentIndex === index && (
              <TextInfo item={item} index={index} x={x} />
            )}
          </View>
        );
      })}
      <View className="flex-row justify-center items-center">
        <WatchNowButton />
        <View className="w-3" />
        <PlusButton />
      </View>
      <Pagination paginationIndex={paginationIndex} />
    </View>
  );
};

export default Carousel;
