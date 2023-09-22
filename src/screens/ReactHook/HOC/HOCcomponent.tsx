import React, { useState, ComponentType } from "react";
import { Text, View } from "react-native";

export function HOCcomponent<T>(OriginalComponent: ComponentType<T>) {
  return (hocType: Omit<T, "money" | "onIncrease">) => {
    const [money, setMoney] = useState(10);
    const onIncrease = () => {
      setMoney((pre) => pre * 2);
    };

    return (
      <View>
        <OriginalComponent
          {...(hocType as T)}
          money={money}
          onIncrease={onIncrease}
        />
      </View>
    );
  };
}
