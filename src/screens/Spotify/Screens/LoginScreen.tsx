import MyIcon from "@app/commons/MyIcon";
import React from "react";
import { Pressable, SafeAreaView, Text, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";

const LoginScreen = () => {
  const authenticate = async () => {
    // console.log('Hellooo')
    // const config = {
    //   issuer: "https://accounts.spotify.com",
    //   clientId: "34d7d02ac8a147a8ae52021bcb27850a",
    //   scopes: [
    //     "user-read-email",
    //     "user-library-read",
    //     "user-read-recently-played",
    //     "user-top-read",
    //     "playlist-read-private",
    //     "playlist-read-collaborative",
    //     "playlist-modify-public",
    //   ],
    //   redirectUrl: "exp://localhost:19002/--/spotify-auth-callback",
    // };

    const config = {
      issuer:"https://accounts.spotify.com",
      clientId:"ee0067f9f08b4e0d91d3ab0013649657",
      scopes: [
        "user-read-email",
        "user-library-read",
        "user-read-recently-played",
        "user-top-read",
        "playlist-read-private",
        "playlist-read-collaborative",
        "playlist-modify-public" // or "playlist-modify-private"
      ],
      redirectUrl:"exp://localhost:19002/--/spotify-auth-callback"
    }

    // const result = await authorize(config);
    // console.log('result', result)
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
