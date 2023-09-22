import MyIcon from "../../../commons/MyIcon";
import React, { useRef, useEffect } from "react";
import {
  Animated,
  TouchableOpacity,
  View,
  Text,
  TouchableWithoutFeedback,
} from "react-native";
import { StyleSheet } from "react-native";

interface ModalProps {
  title?: string;
  isVisible: boolean;
  onClose: () => void;
  children?: React.ReactNode

}

const ModalComponent: React.FC<ModalProps> = ({
  isVisible,
  title,
  onClose,
  children
}) => {
  const animatedValue = useRef(new Animated.Value(0)).current;

  const handleClose = () => {
    Animated.timing(animatedValue, {
      toValue: 0,
      duration: 500,
      useNativeDriver: false,
    }).start(() => onClose());
  };

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: isVisible ? 1 : 0,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }, [isVisible]);

  const containerAnimation = {
    opacity: animatedValue,
  };

  return isVisible ? (
    <TouchableWithoutFeedback onPress={handleClose}>
      <Animated.View style={[styles.container, containerAnimation]}>
        <View style={[styles.modal]}>
          <View style={styles.header}>
            <Text style={styles.title}>{title}</Text>
            <TouchableOpacity onPress={handleClose} style={styles.closeBtn}>
              <MyIcon name="close" size={30} color="#ed4899" />
            </TouchableOpacity>
          </View>
          {children}
        </View>
      </Animated.View>
    </TouchableWithoutFeedback>
  ) : null;
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999999,
    backgroundColor: "#c6c6c6",
  },
  modal: {
    width: "80%",
    height: "90%",
    backgroundColor: "white",
    borderRadius: 8,
  },
  header: {
    width: "100%",
    marginTop: 16,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  closeBtn: {
    position: "absolute",
    right: 16,
  },
});

export default ModalComponent;
