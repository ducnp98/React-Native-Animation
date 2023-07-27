import React from "react";
import {
  SafeAreaView,
  FlatList,
  Dimensions,
} from "react-native";
import { slides } from ".";
import Slide from "./Slide";
import Footer from "./Footer";

const { width, height } = Dimensions.get("window");

const OnboardingScreen = () => {
  const ref = React.useRef();
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);

  const updateCurrentSlideIndex = (e: any) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const goToNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex != slides.length) {
      const offset = nextSlideIndex * width;
      // @ts-ignore
      ref?.current.scrollToOffset({ offset });
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };

  const skip = () => {
    const lastSlideIndex = slides.length - 1;
    const offset = lastSlideIndex * width;
    // @ts-ignore
    ref?.current.scrollToOffset({ offset });
    setCurrentSlideIndex(lastSlideIndex);
  };

  return (
    <SafeAreaView className="flex-1 bg-slate-800">
      <FlatList
        //@ts-ignore
        ref={ref}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        contentContainerStyle={{ height: height * 0.6 }}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={slides}
        pagingEnabled
        renderItem={({ item }) => <Slide item={item} />}
      />
      <Footer currentSlideIndex={currentSlideIndex} skip={skip} goToNextSlide={goToNextSlide} />
    </SafeAreaView>
  );
};

export default OnboardingScreen;
