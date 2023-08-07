import React from "react";
import { Dimensions, SafeAreaView, View } from "react-native";
import {
  GestureHandlerRootView,
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from "react-native-gesture-handler";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import VideoPlayer from "react-native-video-player";

type ContextType = {
  translateX: number;
  translateY: number;
};

const HEIGHT = Dimensions.get("screen").height;
const WIDTH = Dimensions.get("screen").width;

const VideoPlayerScreen = () => {
  const translateY = useSharedValue(0);
  const panGestureEvent = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    ContextType
  >({
    onStart: (event, context) => {
      context.translateY = translateY.value;
    },
    onActive: (event, context) => {
      const distance = event.translationY + context.translateY;
      if (distance < 0) return;
      translateY.value = distance;
    },
    onEnd: () => {
      const distance = translateY.value;
      if (distance > 200) {
        translateY.value = withSpring(HEIGHT * 0.72);
      } else {
        translateY.value = withTiming(0);
      }
    },
  });

  const videoStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateY: translateY.value },
        {
          scale: interpolate(
            translateY.value,
            [0, HEIGHT * 0.4, HEIGHT * 0.65],
            [1, 1, 0.5],
            Extrapolate.CLAMP
          ),
        },
        {
          translateX: interpolate(
            translateY.value,
            [0, HEIGHT * 0.46, HEIGHT * 0.65],
            [0, 0, WIDTH * 0.45],
            Extrapolate.CLAMP
          ),
        },
      ],
    };
  });

  return (
    <SafeAreaView className="bg-gray-400 flex-1">
      <GestureHandlerRootView className="flex-1">
        <PanGestureHandler onGestureEvent={panGestureEvent}>
          <Animated.View className="mx-4" style={videoStyle}>
            {
              //@ts-ignore
              <VideoPlayer
                video={{
                  uri: "https://rr7---sn-42u-nbozs.googlevideo.com/videoplayback?expire=1691439523&ei=Q_3QZKjvIvu9sfIP3IeJyAQ&ip=184.170.252.214&id=o-ALwYbpRrcqb2Jt5RJftwQZ3TukCksRz7pXgQpWSYtG3x&itag=18&source=youtube&requiressl=yes&spc=UWF9f_mZKNuSUpeRnzo95TfiBGx3VI06WKrFDjoIzw&vprv=1&svpuc=1&mime=video%2Fmp4&ns=hr8kJPVp6ySqEEHmnvpyH4gP&gir=yes&clen=4380504&ratebypass=yes&dur=68.243&lmt=1691345556178622&fexp=24007246,24362686&c=WEB&txp=5538434&n=l6JdWphwZCeCzA&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cns%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRAIgXZO08pITdaXU51N2UXSFrJJSAvq3zctRXJdTr5jJX2oCIFDrt7YMvVl4Lv6AVDF0uOdxYCSXaYvAegyVytLGcY8s&redirect_counter=1&rm=sn-a5meer7z&req_id=144dfd90c0f4a3ee&cms_redirect=yes&cmsv=e&ipbypass=yes&mh=JZ&mip=2405:4802:9077:d900:8fc:838:9a95:bc68&mm=31&mn=sn-42u-nbozs&ms=au&mt=1691422187&mv=m&mvi=7&pl=50&lsparams=ipbypass,mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRgIhALzgX3msif-XPOVbCwLl_hrdYLx5UmjwlVCtK5Q_mXQWAiEA1p9qxgMrdvPRDVEAdxCQL6zSa73LyOnOwaS5qOK7Kh0%3D"}}
                videoWidth={16}
                videoHeight={9}
                showDuration
                thumbnail={{
                  uri: "https://assets.teenvogue.com/photos/62a5d0276f8271ef69db2235/16:9/w_2560%2Cc_limit/1388090218",
                }}
              />
            }
          </Animated.View>
        </PanGestureHandler>
      </GestureHandlerRootView>
    </SafeAreaView>
  );
};

export default VideoPlayerScreen;
