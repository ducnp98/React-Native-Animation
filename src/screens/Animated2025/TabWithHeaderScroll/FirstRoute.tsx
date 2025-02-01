import { memo, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Animated, { runOnJS, useAnimatedReaction, useAnimatedScrollHandler, useDerivedValue, useSharedValue } from "react-native-reanimated";

const HEADER_HEIGHT = 600;
const TAB_BAR_HEIGHT = 50;

const DATA = [
  { name: 'Marissa Castillo' },
  { name: 'Denzel Curry' },
  { name: 'Miles Ferguson' },
  { name: 'Kenny Moreno' },
  { name: 'Shelby Craig' },
  { name: 'Jordyn Brewer' },
  { name: 'Tanya Walker' },
  { name: 'Nolan Figueroa' },
  { name: 'Sophia Gibbs' },
  { name: 'Vincent Sandoval' },
];

const FirstRoute = ({
  position,
  syncOffset,
  firstRef,
  onMomentumScrollBegin,
}: any) => {
  const onScroll = useAnimatedScrollHandler({
    onScroll: (event) => {
      position.value = event.contentOffset.y;  // Update scrollY with scroll position
    },
  });

  // const [offsetY, setOffsetY] = useState(0)

  // useAnimatedReaction(
  //   () => position.value, // Watch the scrollY shared value
  //   (y) => {
  //     if (Math.abs(y - offsetY) > 50) {
  //       runOnJS(setOffsetY)(y)
  //     }
  //     // }
  //   }
  // );

  return (
    <Animated.FlatList
      ref={firstRef}
      scrollEventThrottle={1}
      onMomentumScrollBegin={onMomentumScrollBegin}
      onScroll={onScroll}
      scrollToOverflowEnabled={true}
      onMomentumScrollEnd={e => {
        syncOffset('first', e.nativeEvent.contentOffset.y);
      }}
      contentOffset={{ x: 0, y: position.value }}
      data={DATA}
      keyExtractor={(item, i) => String(i)}
      renderItem={({ item }) => (
        <View style={[styles.scene, { backgroundColor: '#ff4081' }]}>
          <Text>{item.name}</Text>
        </View>
      )}
      contentContainerStyle={{ paddingTop: HEADER_HEIGHT + TAB_BAR_HEIGHT }}
      onContentSizeChange={() => console.log('Heloooo')}
    />
  );
};

const styles = StyleSheet.create({
  scene: {
    height: 150,
  },
});


export default memo(FirstRoute)