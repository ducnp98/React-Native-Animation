import React, { useEffect, useRef } from "react";
import { Text } from "react-native-svg";
import { MaterialTopTabNavigationOptions } from "@react-navigation/material-top-tabs";


type Props = {
  routeKey: string;
  isFocused: () => boolean;
  options: (key: string) => MaterialTopTabNavigationOptions;
};

const TabIcon = ({ options, isFocused, routeKey }: Props) => {
  const ref = useRef(null);

  useEffect(() => {
    if (isFocused()) {
      //@ts-ignore
      ref.current.play();
    } else {
      //@ts-ignore
      ref.current.sto;
    }
  }, [isFocused]);

  return (
    <>
      {options(routeKey).tabBarIcon ? (
        // @ts-ignore
        options(routeKey).tabBarIcon({ ref })
      ) : (
        <Text>?</Text>
      )}
    </>
  );
};

export default TabIcon;
