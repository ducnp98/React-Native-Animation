import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const textStyle = "text-white text-base font-bold text-center";

const ReactHook = () => {
  const { navigate } = useNavigation();

  const Button = ({
    title,
    onPress,
    color,
  }: {
    title: string;
    onPress: () => void;
    color: string;
  }) => {
    return (
      <TouchableOpacity
        className={`rounded-lg py-2 px-4 mb-2 ${color}`}
        onPress={onPress}
      >
        <Text className={textStyle}>{title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View className="flex-1 bg-white flex justify-center items-center">
      <View>
        <Button
          title=" Higher order component"
          onPress={() => navigate("HOC")}
          color="bg-cyan-400"
        />
        <Button
          title="Redux saga"
          onPress={() => navigate("ReduxSaga")}
          color="bg-cyan-500"
        />
        <Button
          title="RTK Query"
          onPress={() => navigate("RTKquery")}
          color="bg-cyan-600"
        />
        <Button
          title="Formik Form"
          onPress={() => navigate("FormikForm")}
          color="bg-cyan-700"
        />
      </View>
    </View>
  );
};

export default ReactHook;
