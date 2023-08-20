import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  SafeAreaView,
  Pressable,
  LayoutChangeEvent,
} from "react-native";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
} from "react";
import Animated, {
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { Shadow } from "react-native-neomorph-shadows";
import { Input } from "./Input";
import ShadowBoxAnimated from "./ShadowBoxAnimated";

const Otp = () => {
  const et1 = useRef<TextInput>(null);
  const et2 = useRef<TextInput>(null);
  const et3 = useRef<TextInput>(null);
  const et4 = useRef<TextInput>(null);
  const et5 = useRef<TextInput>(null);
  const et6 = useRef<TextInput>(null);
  const [f1, setF1] = useState("");
  const [f2, setF2] = useState("");
  const [f3, setF3] = useState("");
  const [f4, setF4] = useState("");
  const [f5, setF5] = useState("");
  const [f6, setF6] = useState("");
  const [count, setCount] = useState(60);

  const [activeIndex, setActiveIndex] = useState(-1)
  const reducer = (state: any, action: { x: number; index: number }) => {
    return [...state, { x: action.x, index: action.index }];
  };

  const [layout, dispatch] = useReducer(reducer, []);
 
  const handleLayout = (event: LayoutChangeEvent, index: number) => {
    dispatch({ x: event.nativeEvent.layout.x, index });
  };

  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       if (count == 0) {
  //         clearInterval(interval);
  //       } else {
  //         setCount(count - 1);
  //       }
  //     }, 1000);
  //     return () => {
  //       clearInterval(interval);
  //     };
  //   }, [count]);

  const otpValidate = () => {
    let otp = "123456";
    let enteredOtp = f1 + f2 + f3 + f4 + f5 + f6;
    if (enteredOtp == otp) {
      Alert.alert("OTP Matched");
    } else {
      Alert.alert("Wrong OTP");
    }
  };

  const inputAnimated = useSharedValue({
    f1: false,
    f2: false,
    f3: false,
    f4: false,
    f5: false,
    f6: false,
  });

  useEffect(() => {
    inputAnimated.value = {
      f1: !!f1,
      f2: !!f2,
      f3: !!f3,
      f4: !!f4,
      f5: !!f5,
      f6: !!f6,
    };
  }, [f1, f2, f3, f4, f5, f6]);

  const inputF1Style = useAnimatedStyle(() => {
    return {
      transform: [{ scale: withTiming(inputAnimated.value.f1 ? 1.1 : 0.9) }],
      backgroundColor: "#D0BFFF",
    };
  });

  const inputF2Style = useAnimatedStyle(() => {
    return {
      transform: [{ scale: withTiming(inputAnimated.value.f2 ? 1.1 : 0.9) }],
      backgroundColor: "#FFCACC",
    };
  });

  const inputF3Style = useAnimatedStyle(() => {
    return {
      transform: [{ scale: withTiming(inputAnimated.value.f3 ? 1.1 : 0.9) }],
      backgroundColor: "#E9FFC2",
    };
  });

  const inputF4Style = useAnimatedStyle(() => {
    return {
      transform: [{ scale: withTiming(inputAnimated.value.f4 ? 1.1 : 0.9) }],
      backgroundColor: "#FFD89C",
    };
  });

  const inputF5Style = useAnimatedStyle(() => {
    return {
      transform: [{ scale: withTiming(inputAnimated.value.f5 ? 1.1 : 0.9) }],
      backgroundColor: "#D7C0AE",
    };
  });

  const inputF6Style = useAnimatedStyle(() => {
    return {
      transform: [{ scale: withTiming(inputAnimated.value.f6 ? 1.1 : 0.9) }],
      backgroundColor: "#537188",
    };
  });

  const onChangeTextF1 = useCallback((txt: string) => {
    setF1(txt);
    setActiveIndex(0)
    if (txt.length >= 1) {
      et2.current?.focus();
    }
  }, []);

  const onChangeTextF2 = useCallback((txt: string) => {
    setF2(txt);
    setActiveIndex(1)
    if (txt.length >= 1) {
      et3.current?.focus();
    } else if (txt.length < 1) {
      et1.current?.focus();
    }
  }, []);

  const onChangeTextF3 = useCallback((txt: string) => {
    setF3(txt);
    setActiveIndex(2)
    if (txt.length >= 1) {
      et4.current?.focus();
    } else if (txt.length < 1) {
      et2.current?.focus();
    }
  }, []);


  const onChangeTextF4 = useCallback((txt: string) => {
    setF4(txt);
    setActiveIndex(3)
    if (txt.length >= 1) {
      et5.current?.focus();
    } else if (txt.length < 1) {
      et3.current?.focus();
    }
  }, []);


  const onChangeTextF5 = useCallback((txt: string) => {
    setF5(txt);
    setActiveIndex(4)
    if (txt.length >= 1) {
      et6.current?.focus();
    } else if (txt.length < 1) {
      et4.current?.focus();
    }
  }, []);


  const onChangeTextF6 = useCallback((txt: string) => {
    setF6(txt);
    setActiveIndex(5)
    if (txt.length >= 1) {
      et6.current?.focus();
    } else if (txt.length < 1) {
      et5.current?.focus();
    }
  }, []);

  const inputList = useMemo(() => {
    return [
      {
        style: inputF1Style,
        ref: et1,
        value: f1,
        onChangeText: onChangeTextF1,
      },
      {
        style: inputF2Style,
        ref: et2,
        value: f2,
        onChangeText: onChangeTextF2,
      },
      {
        style: inputF3Style,
        ref: et3,
        value: f3,
        onChangeText: onChangeTextF3,
      },
      {
        style: inputF4Style,
        ref: et4,
        value: f4,
        onChangeText: onChangeTextF4,
      },
      {
        style: inputF5Style,
        ref: et5,
        value: f5,
        onChangeText: onChangeTextF5,
      },
      {
        style: inputF6Style,
        ref: et6,
        value: f6,
        onChangeText: onChangeTextF6,
      },
    ];
  }, [f1, f2, f3, f4, f5, f6]);



  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1">
        <Text className="text-2xl text-gray-600 font-bold mt-10 text-center">
          OTP Verification
        </Text>
        <View className="mt-8 justify-evenly items-center flex-row w-full py-2 relative">
          <ShadowBoxAnimated dataSize={inputList.length} activeIndex={activeIndex} layout={layout} />
          {inputList.map((item, key) => (
            <Input
              key={key}
              style={item.style}
              ref={item.ref}
              onChangeText={item.onChangeText}
              value={item.value}
              onLayout={(e) => handleLayout(e, key)}

            />
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Otp;

