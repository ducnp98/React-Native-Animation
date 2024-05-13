import React, {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useMemo,
  useState,
} from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSequence,
  withSpring,
  withTiming,
} from "react-native-reanimated";

type ToastType = "success" | "error" | "info";

interface ToastRef {
  success: (message: string, duration?: number) => void;
  error: (message: string, duration?: number) => void;
  warning: (message: string, duration?: number) => void;
}

const Toast = forwardRef(({}, ref) => {
  const [type, setType] = useState("error");
  const [message, setMessage] = useState("This is message testing");
  const [isShowToast, setIsShowToast] = useState(true);
  const context = useSharedValue(0);
  const toastTopAnimation = useSharedValue(-100);

  const show = useCallback(
    (type: ToastType) => (message: string, duration?: number) => {
      close(() => {
        setMessage(message);
        setType(type);
        setIsShowToast(true);
        toastTopAnimation.value = withSequence(
          withTiming(0),
          withDelay(
            duration ?? 3000,
            withTiming(-100, { duration: 500 }, (finish) => {
              if (finish) {
                runOnJS(setIsShowToast)(false);
              }
            })
          )
        );
      });
    },
    []
  );

  const close = async (func?: () => void) => {
    toastTopAnimation.value = withTiming(-100, { duration: 500 }, (finish) => {
      if (finish && func) {
        runOnJS(setIsShowToast)(false);
        runOnJS(func)();
      }
    });
  };

  useImperativeHandle(ref, () => ({
    warning: show("info"),
    error: show("error"),
    success: show("success"),
  }));

  const backgroundStyle = useMemo(() => {
    if (type === "success") return styles.successToastContainer;
    if (type === "error") return styles.errorToastContainer;
    return styles.warningToastContainer;
  }, [type]);

  const messageStyle = useMemo(() => {
    if (type === "success") return styles.successToastText;
    if (type === "error") return styles.errorToastText;
    return styles.warningToastText;
  }, [type]);

  const imageToast = useMemo(() => {
    if (type === "success") return require("./assets/SuccessIcon.png");
    if (type === "error") return require("./assets/ErrorIcon.png");
    return require("./assets/WarningIcon.png");
  }, [type]);

  const alertContainerStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: toastTopAnimation.value,
        },
      ],
    };
  });

  const pan = Gesture.Pan()
    .onBegin(() => {
      context.value = toastTopAnimation.value;
    })
    .onUpdate((event) => {
      toastTopAnimation.value = withSpring(
        Math.min(context.value + event.translationY, 200),
        {
          damping: 500,
          stiffness: 100,
        }
      );
    })
    .onEnd((event) => {
      if (event.translationY > 0) {
        toastTopAnimation.value = withSequence(
          withTiming(0),
          withDelay(
            3000,
            withTiming(-100, { duration: 500 }, (finish) => {
              if (finish) {
                runOnJS(setIsShowToast)(false);
              }
            })
          )
        );
      } else {
        toastTopAnimation.value = withSpring(
          -100,
          {
            stiffness: 100,
            damping: 500,
          },
          (finish) => {
            if (finish) {
              runOnJS(setIsShowToast)(false);
            }
          }
        );
      }
    });

  if (!isShowToast) return <></>;

  return (
    <GestureDetector gesture={pan}>
      <Animated.View
        style={alertContainerStyle}
        className="flex items-center absolute top-0 w-11/12 "
      >
        <View
          className={`flex-row items-center border mt-4 p-2  rounded-xl w-full `}
          style={backgroundStyle}
        >
          <Image source={imageToast} className="w-6 h-6 mr-3" />
          <Text style={messageStyle} className="text-base">
            {message}
          </Text>
        </View>
      </Animated.View>
    </GestureDetector>
  );
});

const toastRef = React.createRef<ToastRef>();

const ToastTop = () => {
  return <Toast ref={toastRef} />;
};

ToastTop.error = (message: string, duration?: number) => {
  toastRef.current?.error(message, duration);
};

ToastTop.warning = (message: string, duration?: number) => {
  toastRef.current?.warning(message, duration);
};

ToastTop.success = (message: string, duration?: number) => {
  toastRef.current?.success(message, duration);
};

const styles = StyleSheet.create({
  successToastContainer: {
    backgroundColor: "#def1d7",
    borderColor: "#1f8722",
  },
  warningToastContainer: {
    backgroundColor: "#fef7ec",
    borderColor: "#f08135",
  },
  errorToastContainer: {
    backgroundColor: "#fae1db",
    borderColor: "#d9100a",
  },
  successToastText: {
    color: "#1f8722",
  },
  warningToastText: {
    color: "#f08135",
  },
  errorToastText: {
    color: "#d9100a",
  },
});

export default ToastTop;
