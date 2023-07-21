import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Ripple from "./Ripple";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const RippleEffect = () => {
  return (
    <GestureHandlerRootView className="flex-1">
      <View className="flex-1 bg-white items-center justify-center">
        <Ripple
          style={styles.ripple}
          onTap={() => console.log("tap")}
        >
          <Text className="text-3xl">Tap</Text>
        </Ripple>
      </View>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  ripple: {
    width: 200,
    height: 200,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
    // iOS
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 20,
    // Android
    elevation: 2,
  },
});

export default RippleEffect;
