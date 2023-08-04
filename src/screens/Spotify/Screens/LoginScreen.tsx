import MyIcon from "@app/commons/MyIcon";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Pressable, SafeAreaView, Text, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";

const LoginScreen = () => {
  const { navigate } = useNavigation()
  const authenticate = async () => {
    navigate('Main')
  };
  return (
    <LinearGradient colors={["#040306", "#131624"]} className="flex-1">
      <SafeAreaView>
        <View className="h-20" />
        <MyIcon
          name="spotify"
          size={80}
          color={"white"}
          style={{ textAlign: "center" }}
        />
        <Text className="text-white text-4xl px-4 font-bold text-center mt-10">
          Millions of Songs Free on spotify
        </Text>
        <View className="h-20" />
        <Pressable
          onPress={authenticate}
          className="h-12 rounded-full flex justify-center items-center w-10/12 bg-green-600 mx-auto"
        >
          <Text className="text-gray-700 text-base font-semibold">
            Sign In with spotify
          </Text>
        </Pressable>
        <Pressable className="mt-5 h-12 rounded-full flex-row justify-center items-center w-10/12 border border-gray-500 mx-auto">
          <View className="absolute left-4">
            <MyIcon name="cellphone" size={24} color="white" />
          </View>
          <Text className="text-white text-base font-semibold ml-4">
            Continue with phone number
          </Text>
        </Pressable>
        <Pressable className="mt-5 h-12 rounded-full flex-row justify-center items-center w-10/12 border border-gray-500 mx-auto">
          <View className="absolute left-4">
            <MyIcon name="google" size={24} color="#FF9494" />
          </View>
          <Text className="text-white text-base font-semibold ml-4">
            Sign In with Google
          </Text>
        </Pressable>
        <Pressable className="mt-5 h-12 rounded-full flex-row justify-center items-center w-10/12 border border-gray-500 mx-auto">
          <View className="absolute left-4">
            <MyIcon name="facebook" size={24} color="#7895B2" />
          </View>
          <Text className="text-white text-base font-semibold ml-4">
            Sign In with Facebook
          </Text>
        </Pressable>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default LoginScreen;
