import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Animated, { useAnimatedScrollHandler, useSharedValue } from "react-native-reanimated";

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

const SecondRoute = ({
  position,
  syncOffset,
  secondRef,
  onMomentumScrollBegin,
}: any) => {
  const onScroll = useAnimatedScrollHandler({
    onScroll: (event) => {
      position.value = event.contentOffset.y;  // Update scrollY with scroll position
    },
  });



  return (
    <Animated.FlatList
      ref={secondRef}
      scrollEventThrottle={1}
      onMomentumScrollBegin={onMomentumScrollBegin}
      onScroll={onScroll}
      onMomentumScrollEnd={e => {
        syncOffset('second', e.nativeEvent.contentOffset.y);
      }}
      data={DATA}
      keyExtractor={(item, i) => String(i)}
      renderItem={({ item }) => (
        <View style={[styles.scene, { backgroundColor: '#673ab7' }]}>
          <Text>{item.name}</Text>
        </View>
      )}
      contentContainerStyle={{ paddingTop: HEADER_HEIGHT + TAB_BAR_HEIGHT }}
    />
  );
};

const styles = StyleSheet.create({
  scene: {
    height: 150,
  },
});


export default SecondRoute