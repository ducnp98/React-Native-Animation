import React, { useState } from "react";
import Animated, {
  scrollTo,
  useAnimatedReaction,
  useAnimatedRef,
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";
import { SONG_HEIGHT } from "./Song";
import MovableSong from "./MovableSong";
import { LIST_SONG, listToObject } from "./data";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Text, TouchableOpacity, View } from "react-native";
import { CommonStyles } from "@app/commons/Styles/CommonStyles";

const DragAndDrop = () => {
  const positions = useSharedValue(listToObject(LIST_SONG));
  const scrollY = useSharedValue(0);
  const scrollViewRef = useAnimatedRef();
  const [isEdit, setIsEdit] = useState(false);

  useAnimatedReaction(
    () => scrollY.value,
    (scrolling) => {
      scrollTo(scrollViewRef, 0, scrolling, false);
    }
  );

  const handleScroll = useAnimatedScrollHandler((event) => {
    scrollY.value = event.contentOffset.y;
  });

  const onToggleEdit = () => {
    setIsEdit((pre) => !pre);
  };

  return (
    <>
      <SafeAreaProvider>
        <SafeAreaView className="flex-1 bg-white">
          <View className="flex items-end">
            <TouchableOpacity
              onPress={onToggleEdit}
              className="px-4 py-2 mr-4 rounded-lg"
              style={CommonStyles.shadow}
            >
              <Text>Edit</Text>
            </TouchableOpacity>
          </View>
          <Animated.ScrollView
            // @ts-ignore
            ref={scrollViewRef}
            onScroll={handleScroll}
            scrollEventThrottle={16}
            style={{
              flex: 1,
              position: "relative",
              backgroundColor: "white",
            }}
            contentContainerStyle={{
              height: LIST_SONG.length * SONG_HEIGHT,
            }}
          >
            {LIST_SONG.map((song) => (
              <MovableSong
                key={song.id}
                id={song.id}
                artist={song.artist}
                cover={song.cover}
                title={song.title}
                positions={positions}
                scrollY={scrollY}
                songsCount={LIST_SONG.length}
                isEdit={isEdit}
              />
            ))}
          </Animated.ScrollView>
        </SafeAreaView>
      </SafeAreaProvider>
    </>
  );
};

export default DragAndDrop;
