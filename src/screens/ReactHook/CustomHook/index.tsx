import React, { useState } from "react";
import { Button, SafeAreaView, Text, View } from "react-native";
import { useToggle } from "./ToggleValue";
import { useTimeout } from "./useTimeout";

const CustomHook = () => {
  const [toggleBoolean, toggleValue] = useToggle(false);

  const [count, setCourt] = useState(10);
  const { clear, reset } = useTimeout(() => setCourt(0), 4000);

  return (
    <SafeAreaView className="flex-1">
      <View className="px-4">
        <Text className="text-2xl my-2 text-green-700 font-bold">
          Toggle value
        </Text>
        <View className="flex-row justify-between items-center">
          <Text className="text-base text-gray-600">{`Toggle: ${toggleBoolean}`}</Text>
          <Button title="Toggle" onPress={toggleValue} />
        </View>
        <View className="flex-row justify-between items-center">
          <Text className="text-base text-gray-600">{`Set to false: ${toggleBoolean}`}</Text>
          <Button title="Toggle" onPress={() => toggleValue(false)} />
        </View>
        <View className="flex-row justify-between items-center">
          <Text className="text-base text-gray-600">{`Set to true: ${toggleBoolean}`}</Text>
          <Button title="Toggle" onPress={() => toggleValue(true)} />
        </View>
      </View>
      <View className="px-4">
        <Text className="text-2xl my-2 text-green-700 font-bold">
          useTimeout
        </Text>
        <View className="flex-row justify-between items-center">
          <Text className="text-base text-gray-600">{`Count value: ${count}`}</Text>
          <Button title="Change" onPress={() => setCourt(10)} />
          <Button title="Clear" onPress={clear} />
          <Button title="Reset" onPress={reset} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CustomHook;
