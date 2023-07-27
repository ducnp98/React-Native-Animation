import React from "react";
import { Dimensions, Text, TouchableOpacity, View } from "react-native";
import { slides } from ".";

const { height } = Dimensions.get("window");

const buttonClass =
  "flex-1 h-12 rounded-sm bg-white justify-center items-center";

type Props = {
  currentSlideIndex: number;
  goToNextSlide: () => void;
  skip: () => void;
};

const Footer: React.FC<Props> = ({
  goToNextSlide,
  skip,
  currentSlideIndex,
}) => {
  return (
    <View
      style={{
        height: height * 0.25,
        justifyContent: "space-between",
        paddingHorizontal: 20,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 20,
        }}
      >
        {slides.map((_, index) => (
          <View
            key={index}
            className="h-1 w-3 bg-slate-300 mx-2 rounded-full"
            style={[
              currentSlideIndex == index && {
                backgroundColor: "white",
                width: 25,
              },
            ]}
          />
        ))}
      </View>

      <View style={{ marginBottom: 20 }}>
        {currentSlideIndex == slides.length - 1 ? (
          <View className="h-12">
            <TouchableOpacity className={buttonClass} onPress={() => {}}>
              <Text className="font-bold text-base">GET STARTED</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View className="flex-row">
            <TouchableOpacity
              activeOpacity={0.8}
              className={`${buttonClass} border-white border bg-transparent`}
              onPress={skip}
            >
              <Text className="font-bold text-base text-white">SKIP</Text>
            </TouchableOpacity>
            <View className="w-4" />
            <TouchableOpacity
              activeOpacity={0.8}
              className={buttonClass}
              onPress={goToNextSlide}
            >
              <Text className="font-bold text-base">NEXT</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

export default Footer;
