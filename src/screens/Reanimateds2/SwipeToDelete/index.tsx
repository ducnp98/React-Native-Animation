import MyIcon from "@app/commons/MyIcon";
import React, { useRef, useState } from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ItemBlock from "./ItemBlock";
import {
  GestureHandlerRootView,
  ScrollView,
} from "react-native-gesture-handler";

const SwipeToDelete = () => {
  const scrollRef = useRef(null);
  const [selectedBlock, setSelectedBlock] = useState(-1);
  const [isScrolling, setIsScrolling] = useState(false);
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView>
        <ScrollView
          ref={scrollRef}
          onScrollBeginDrag={() => setIsScrolling(true)}
          onScrollEndDrag={() => setIsScrolling(false)}
        >
          <View className="px-2">
            {[...Array(8).keys()].map((item) => (
              <ItemBlock
                key={item}
                index={item}
                isScrolling={isScrolling}
                selectedBlock={selectedBlock}
                simultaneousHandlers={scrollRef}
                setSelectedBlock={setSelectedBlock}
              />
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default SwipeToDelete;
