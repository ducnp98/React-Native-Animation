import React, { forwardRef, memo } from "react";
import { LayoutChangeEvent, StyleSheet, TextInput, View } from "react-native";
import { Shadow } from "react-native-neomorph-shadows";
import Animated from "react-native-reanimated";

type Props = {
  style: any;
  value: string;
  onChangeText: (text: string) => void;
  onLayout: (e: LayoutChangeEvent) => void;
};

export const Input = React.forwardRef<TextInput, Props>(({style, value, onChangeText, onLayout}, ref) =>{
  return (
    <View className="h-12 w-12 flex justify-center items-center" onLayout={onLayout}>
      <Animated.View style={style} className="w-12 h-12 absolute rounded-xl" />
      <Shadow inner useArt style={styles.shadowInput}>
        <TextInput
          ref={ref}
          keyboardType="number-pad"
          maxLength={1}
          value={value}
          className="w-full h-full text-center"
          onChangeText={(text) => onChangeText(text)}
        />
      </Shadow>
    </View>
  )
  }) 

const styles = StyleSheet.create({
  shadowInput: {
    shadowOffset: { width: 10, height: 10 },
    shadowOpacity: 1,
    shadowColor: "#DDDDDD",
    shadowRadius: 10,
    borderRadius: 10,
    backgroundColor: "white",
    width: 48,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
  },
});
