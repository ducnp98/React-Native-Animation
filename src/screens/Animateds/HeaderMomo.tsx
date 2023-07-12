import DraggableBottomSheet from "./DraggableBottomSheet";
import MyIcon from "../../commons/MyIcon";
import React, { useRef } from "react";
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  View,
  Animated,
} from "react-native";

const WINDOW_HEIGHT = Dimensions.get("window").height;
const UPPER_HEADER = 40;
const LOWER_HEADER = 96;

const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);
const AnimatedText = Animated.createAnimatedComponent(Text);

const HeaderMomo = () => {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const scrollViewRef = useRef<ScrollView>(null);
  const lastOffsetY = useRef(0);
  const scrollDirection = useRef("");

  const searchInputAnimation = {
    transform: [
      {
        scaleX: animatedValue.interpolate({
          inputRange: [0, 50],
          outputRange: [1, 0],
          extrapolate: "clamp",
        }),
      },
      {
        translateX: animatedValue.interpolate({
          inputRange: [0, 25], // nghi la no chi can scroll 25px thi no se ket thuc viec di chuyen sang ben trai hoac phai
          outputRange: [0, -100],  // sau khi keu du 25px thi no se dung toi vi tri -100
          extrapolate: "clamp",
        }),
      },
    ],
    opacity: animatedValue.interpolate({
      inputRange: [0, 25],
      outputRange: [1, 0],
      extrapolate: "clamp",
    }),
  };

  const featureNameAnimation = {
    transform: [
      {
        scaleX: animatedValue.interpolate({
          inputRange: [0, 30],
          outputRange: [1, 0],
          extrapolate: "clamp",
        }),
      },
    ],
    opacity: animatedValue.interpolate({
      inputRange: [0, 30],
      outputRange: [1, 0],
      extrapolate: "clamp",
    }),
  };

  const depositViewAnimation = {
    transform: [
      {
        translateX: animatedValue.interpolate({
          inputRange: [0, 100],
          outputRange: [0, 36],
          extrapolate: "clamp",
        }),
      },
      {
        translateY: animatedValue.interpolate({
          inputRange: [0, 100],
          outputRange: [0, -48],
          extrapolate: "clamp",
        }),
      },
    ],
  };

  const drawViewAnimation = {
    transform: [
      {
        translateX: animatedValue.interpolate({
          inputRange: [0, 100],
          outputRange: [0, -16],
          extrapolate: "clamp",
        }),
      },
      {
        translateY: animatedValue.interpolate({
          inputRange: [0, 100],
          outputRange: [0, -48],
          extrapolate: "clamp",
        }),
      },
    ],
  };

  const qrCodeViewAnimation = {
    transform: [
      {
        translateX: animatedValue.interpolate({
          inputRange: [0, 100],
          outputRange: [0, -48],
          extrapolate: "clamp",
        }),
      },
      {
        translateY: animatedValue.interpolate({
          inputRange: [0, 100],
          outputRange: [0, -48],
          extrapolate: "clamp",
        }),
      },
    ],
  };

  const scanQRViewAnimation = {
    transform: [
      {
        translateX: animatedValue.interpolate({
          inputRange: [0, 100],
          outputRange: [0, -92],
          extrapolate: "clamp",
        }),
      },
      {
        translateY: animatedValue.interpolate({
          inputRange: [0, 100],
          outputRange: [0, -48],
          extrapolate: "clamp",
        }),
      },
    ],
  };

  const featureLargeIconAnimated = {
    opacity: animatedValue.interpolate({
      inputRange: [0, 25],
      outputRange: [1, 0],
      extrapolate: "clamp",
    }),
  };

  const featureSmallIconAnimated = {
    opacity: animatedValue.interpolate({
      inputRange: [0, 50],
      outputRange: [0, 1],
      extrapolate: "clamp",
    }),
  };

  return (
    <View className="flex-1">
      <StatusBar barStyle="light-content" backgroundColor="#ed4899" />
      <SafeAreaView>
        <View style={{ height: UPPER_HEADER }} />
      </SafeAreaView>
      <SafeAreaView className="absolute w-full bg-pink-500">
        <View
          style={{ height: UPPER_HEADER }}
          className="flex-row items-center px-5"
        >
          <View className="flex-1 flex-row items-center">
            <View className="ml-1.5">
              <MyIcon name="magnify" size={20} color="white" />
            </View>
            <AnimatedTextInput
              placeholder="Tìm kiếm"
              placeholderTextColor="white"
              className="absolute w-full text-white rounded-md py-1 pl-8 flex justify-center items-center"
              style={[{ backgroundColor: "#bebebe7d" }, searchInputAnimation]}
            />
          </View>
          <View className="ml-8">
            <MyIcon name="bell" size={20} color="white" />
          </View>
          <View className="ml-6">
            <MyIcon name="account" size={26} color="white" />
          </View>
        </View>
        <View
          style={{ height: LOWER_HEADER }}
          className="flex-row justify-between items-center px-5 w-full"
        >
          <Animated.View className="items-center" style={depositViewAnimation}>
            <Animated.View style={featureLargeIconAnimated}>
              <View className="bg-white p-1.5 rounded-2xl">
                <MyIcon name="exit-to-app" size={30} color="#ed4899" />
              </View>
            </Animated.View>
            <Animated.View
              style={[featureSmallIconAnimated]}
              className="absolute top-2"
            >
              <MyIcon name="exit-to-app" size={20} color="white" />
            </Animated.View>
            <AnimatedText
              className="font-bold text-white mt-4 text-xs"
              style={featureNameAnimation}
            >
              NẠP TIỀN
            </AnimatedText>
          </Animated.View>
          <Animated.View className="items-center" style={drawViewAnimation}>
            <Animated.View style={featureLargeIconAnimated}>
              <View className="bg-white p-1.5 rounded-2xl">
                <MyIcon name="cash" size={30} color="#ed4899" />
              </View>
            </Animated.View>
            <Animated.View
              style={[featureSmallIconAnimated]}
              className="absolute top-2"
            >
              <MyIcon name="cash" size={20} color="white" />
            </Animated.View>
            <AnimatedText
              className="font-bold text-white mt-4 text-xs"
              style={featureNameAnimation}
            >
              RÚT TIỀN
            </AnimatedText>
          </Animated.View>
          <Animated.View className="items-center" style={qrCodeViewAnimation}>
            <Animated.View style={featureLargeIconAnimated}>
              <View className="bg-white p-1.5 rounded-2xl">
                <MyIcon name="qrcode-scan" size={30} color="#ed4899" />
              </View>
            </Animated.View>
            <Animated.View
              style={[featureSmallIconAnimated]}
              className="absolute top-2"
            >
              <MyIcon name="qrcode-scan" size={20} color="white" />
            </Animated.View>
            <AnimatedText
              className="font-bold text-white mt-4 text-xs"
              style={featureNameAnimation}
            >
              MÃ QR
            </AnimatedText>
          </Animated.View>
          <Animated.View className="items-center" style={scanQRViewAnimation}>
            <Animated.View style={featureLargeIconAnimated}>
              <View className="bg-white p-1.5 rounded-2xl">
                <MyIcon name="line-scan" size={30} color="#ed4899" />
              </View>
            </Animated.View>
            <Animated.View
              style={[featureSmallIconAnimated]}
              className="absolute top-2"
            >
              <MyIcon name="line-scan" size={20} color="white" />
            </Animated.View>
            <AnimatedText
              className="font-bold text-white mt-4 text-xs"
              style={featureNameAnimation}
            >
              QUÉT MÃ
            </AnimatedText>
          </Animated.View>
        </View>
      </SafeAreaView>
      <ScrollView
        ref={scrollViewRef}
        onScroll={(e) => {
          const offsetY = e.nativeEvent.contentOffset.y;
          scrollDirection.current =
            offsetY - lastOffsetY.current > 0 ? "down" : "up";
          lastOffsetY.current = offsetY;
          animatedValue.setValue(offsetY);
        }}
        onScrollEndDrag={() => {
          scrollViewRef.current?.scrollTo({
            y: scrollDirection.current === "up" ? 0 : 100,
            animated: true,
          });
        }}
        scrollEventThrottle={16}
      >
        <View className="h-24" />
        <View className="bg-white" style={{ height: WINDOW_HEIGHT * 2 }}></View>
      </ScrollView>
      <DraggableBottomSheet />
    </View>
  );
};

export default HeaderMomo;
