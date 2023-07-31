import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { colors } from "../constant";
import { DrawerContentComponentProps } from "@react-navigation/drawer";

const DrawerItemList: React.FC<DrawerContentComponentProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  return (
    <View className="bg-white rounded-xl mx-2 mb-1 p-2">
      {state.routes.map(
        (
          route: { key: string; name: any },
          index: React.Key | null | undefined
        ) => {
          const isFocused = state.index === index;
          const { options } = descriptors[route.key];
          const color = isFocused ? colors.white : colors.darkGray;
          const activeItemColor = isFocused ? colors.primary : "white";

          const onPress = () => {
            const event = navigation.emit({
              type: "drawerItemPress",
              target: route.key,
              canPreventDefault: true,
            });
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          return (
            <TouchableOpacity
              key={route.key}
              onPress={onPress}
              accessibilityRole="button"
              className="rounded-lg"
              style={[{ backgroundColor: activeItemColor }]}
            >
              <View className="flex-row items-center gap-2 py-2 px-1">
                {
                  //@ts-ignore
                  options.drawerIcon ? (
                    options.drawerIcon({
                      color,
                      size: 0,
                      focused: false
                    })
                  ) : (
                    <Text>?</Text>
                  )
                }
                <Text
                  style={[{ color, fontWeight: isFocused ? "bold" : "normal" }]}
                >
                  {route?.name}
                </Text>
              </View>
            </TouchableOpacity>
          );
        }
      )}
    </View>
  );
};

export default DrawerItemList;
