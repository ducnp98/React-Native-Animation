import MyIcon from "../../commons/MyIcon";
import * as React from "react";
import { Animated, StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const WavingPhone = () => {
  const [isRinging, setIsRinging] = React.useState(false);
  const animatedValue = React.useRef(new Animated.Value(0)).current;

  const onClick = () => {
    animation()
  };

  const animation = () => {
    animatedValue.setValue(0);
    Animated.timing(animatedValue, {
      toValue: 200,
      duration: 3000,
      useNativeDriver: true,
    }).start()
  }

  React.useEffect(() => {
    animation()
  }, [isRinging])

  const opacity = {
    opacity: animatedValue.interpolate({
      inputRange: [0, 200],
      outputRange: [1, 0],
    }),
  };

  const blockView = {
    transform: [
      {
        scaleY: animatedValue.interpolate({
          inputRange: [0, 200],
          outputRange: [1, 2],
          extrapolate: "clamp",
        }),
      },
      {
        scaleX: animatedValue.interpolate({
          inputRange: [0, 200],
          outputRange: [1, 2],
          extrapolate: "clamp",
        }),
      },
    ],
  };

  return (
    <View className="flex-1 justify-center items-center relative">
      <Animated.View
        style={[blockView, opacity]}
        className="w-10 h-10 rounded-full bg-pink-200 absolute"
      >
        <Animated.View
          style={[blockView, opacity]}
          className="w-10 h-10 rounded-full bg-pink-200"
        >
          <Animated.View
            style={[blockView, opacity]}
            className="w-10 h-10 rounded-full bg-pink-200"
          />
        </Animated.View>
      </Animated.View>
      <TouchableOpacity
        onPress={onClick}
        className="w-11 h-11 rounded-full flex justify-center items-center shadow bg-white"
      >
        <MyIcon name="phone" size={30} color="#FFAACF" />
      </TouchableOpacity>
    </View>
  );
};

export default WavingPhone;
