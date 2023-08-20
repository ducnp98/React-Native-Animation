import { View, TextInput, Pressable } from "react-native";
import React from "react";
import { Shadow } from "react-native-neomorph-shadows";
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";

const NeomorphismDemo = () => {
  const abc = useSharedValue(100)
  const onClick = () => {
    abc.value = withSpring(300)
  }

  const abcStyle = useAnimatedStyle(() => {
    return {
      width: abc.value,
      height: abc.value,
      backgroundColor: 'red'
    }
  })

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Pressable onPress={onClick}>
        <Animated.View style={abcStyle}>

        </Animated.View>
      </Pressable>
      <Shadow
        inner
        useArt
        style={{
          shadowOffset: { width: 10, height: 10 },
          shadowOpacity: 1,
          shadowColor: "#DDDDDD",
          shadowRadius: 10,
          borderRadius: 20,
          backgroundColor: "white",
          width: 200,
          height: 100,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TextInput
          placeholder="Enter Name"
          placeholderTextColor='gray'
          style={{ fontSize: 18, fontWeight: "600" }}
        />
      </Shadow>
    </View>
  );
};

export default NeomorphismDemo;
