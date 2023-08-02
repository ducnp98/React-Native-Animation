import MyIcon from "../../../commons/MyIcon";
import React from "react";
import { LayoutChangeEvent, Pressable } from "react-native";

type Props = {
  index: number;
  icon: string;
  color: string
  onLayout: (e: LayoutChangeEvent, index: number) => void;
  onPressButton: (index: number) => void;
};

const TabButton = ({ onLayout, onPressButton, index, icon, color }: Props) => {
  return (
    <Pressable
      onLayout={(e) => onLayout(e, index)}
      onPress={() => onPressButton(index)}
      style={{ backgroundColor: color}}
      className="p-2 w-14 h-14 rounded-xl flex items-center justify-center"
    >
      <MyIcon name={icon} size={32} color="white" />
    </Pressable>
  );
};

export default TabButton;
