import React, { useEffect, useMemo, useRef } from "react";
import { SafeAreaView, Text, View } from "react-native";
import { useListMedicalNoteTagQuery } from "./RTK/productQuery";
import Lottie from "lottie-react-native";
import Animated, { FadeIn } from "react-native-reanimated";

const RTKquery = () => {
  const ref = useRef();
  const { data, isLoading, isSuccess, isError } = useListMedicalNoteTagQuery(
    {}
  );

  useEffect(() => {
    if (isLoading) {
      // @ts-ignore
      ref.current.play();
    }
  }, [isLoading]);

  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1 justify-center items-center">
        <View>
          {isLoading ? (
            <Lottie
              // @ts-ignore
              ref={ref}
              source={require("./loading.json")}
              style={{ height: 100, width: 100 }}
            />
          ) : (
            <Animated.View className="flex justify-center items-center" entering={FadeIn.delay(500)} >
              <Text className="text-lg text-cyan-800 font-bold">
                {data?.ability}
              </Text>
              <Text className="text-base text-cyan-600">
                {data?.["encounter-condition"]}
              </Text>
            </Animated.View>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default RTKquery;
