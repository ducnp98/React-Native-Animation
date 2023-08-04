import MyIcon from "@app/commons/MyIcon";
import moment from "moment";
import React, { useMemo } from "react";
import { Image, Text, View } from "react-native";

const Header = () => {
  const welcomeText = useMemo(() => {
    var currentHour = Number(moment().format("HH"));
    if (currentHour >= 3 && currentHour < 12) {
      return "Good Morning";
    } else if (currentHour >= 12 && currentHour < 15) {
      return "Good Afternoon";
    } else if (currentHour >= 15 && currentHour < 20) {
      return "Good Evening";
    } else {
      return "Good Night";
    }
  }, []);

  return (
    <View>
      <View className="flex-row items-center justify-between">
        <View className="flex-row items-center">
          <Image
            className="w-12 h-12 rounded-full object-cover"
            source={require("../../Image/account.png")}
          />
          <Text className="text-white font-bold text-2xl ml-4">
            {welcomeText}
          </Text>
        </View>
        <MyIcon name="flash-outline" color="white" size={25} />
      </View>
    </View>
  );
};

export default Header;
