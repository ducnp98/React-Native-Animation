import { CommonStyles } from "@app/commons/Styles/CommonStyles";
import React, { useEffect, useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

interface Item {
  id: number;
  title: string;
}

const data: Item[] = [
  { id: 1, title: "This is option 1" },
  { id: 2, title: "This is option 2" },
  { id: 3, title: "This is option 3" },
  { id: 4, title: "This is option 4" },
  { id: 5, title: "This is option 5" },
];

const InputSelection = () => {
  const [optionList, setOptionList] = useState(data);
  const inputAnimated = useSharedValue(false);
  const dropDownAnimated = useSharedValue(false);

  const inputBorderStyle = useAnimatedStyle(() => {
    return {
      borderColor: withTiming(inputAnimated.value ? "#9CB4CC" : "#D1D1D1"),
      borderWidth: withTiming(inputAnimated.value ? 2 : 1),
    };
  });

  const labelInputStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: withTiming(inputAnimated.value ? -22 : 0),
        },
        {
          translateX: withTiming(inputAnimated.value ? 5 : 0),
        },
      ],
      color: withTiming(inputAnimated.value ? "#9CB4CC" : "#B7B7B7"),
      zIndex: -1,
    };
  });

  const extensionStyle = useAnimatedStyle(() => {
    return {
      height: withTiming(
        dropDownAnimated.value
          ? optionList.length
            ? 36 * optionList.length + 16
            : 36 + 16
          : 0
      ),
      opacity: withTiming(dropDownAnimated.value ? 1 : 0),
      marginTop: withTiming(dropDownAnimated.value ? 10 : 0),
      paddingVertical: withTiming(dropDownAnimated.value ? 8 : 0),
    };
  });

  const onFocus = () => {
    dropDownAnimated.value = true;
    inputAnimated.value = true;
  };

  const onBlur = () => {
    dropDownAnimated.value = false;
    if (!searchValue) {
      inputAnimated.value = false;
    }
  };

  const [searchValue, setSearchValue] = useState<string>("");

  const onSearch = (text: string) => {
    setSearchValue(text);
  };

  useEffect(() => {
    if (searchValue) {
      setOptionList(
        data.filter((x) =>
          x.title.toLowerCase().includes(searchValue.toLowerCase())
        )
      );
    } else {
      setOptionList(data);
    }
  }, [searchValue]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <Pressable>
        <Animated.View className=" rounded-xl" style={inputBorderStyle}>
          <TextInput
            className="h-10 px-4 "
            value={searchValue}
            onChangeText={onSearch}
            onFocus={onFocus}
            onBlur={onBlur}
          />
          <Animated.Text
            className="absolute top-3 left-3 bg-white px-0.5 text-gray-600 font-medium"
            style={labelInputStyle}
          >
            Text input
          </Animated.Text>
        </Animated.View>
      </Pressable>
      <Animated.View
        style={[extensionStyle, CommonStyles.shadow]}
        className="w-full rounded-xl border overflow-hidden"
      >
        <FlatList
          data={optionList}
          renderItem={({ item }) => (
            <TouchableOpacity className="h-9 justify-center px-4">
              <Text className="text-sm text-gray-500">{item.title}</Text>
            </TouchableOpacity>
          )}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          ListEmptyComponent={() => (
            <TouchableOpacity className="h-9 justify-center px-4">
              <Text className="text-sm text-gray-500">No option</Text>
            </TouchableOpacity>
          )}
        />
      </Animated.View>
    </KeyboardAvoidingView>
  );
};

export default InputSelection;
