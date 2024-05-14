import React, { useEffect } from "react";
import {
  Text,
  StatusBar,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  NativeModules,
  Platform,
} from "react-native";
import { onListenFromNative } from "./Listener";
import ToastTop from "../Reanimateds2/Alert/Toast";
import { useSafeAreaInsets } from "react-native-safe-area-context";
const { BridgeModule } = NativeModules;

const Bridge = () => {
  const audioTrackURL =
    "https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_5MG.mp3";

  const changeToAlien = () => {
    Platform.OS === "android"
      ? BridgeModule.changeVoiceToAlien(audioTrackURL)
      : BridgeModule.changeVoiceToAlien();
  };

  const changeToChild = () => {
    Platform.OS === "android"
      ? BridgeModule.changeVoiceToChild(audioTrackURL)
      : BridgeModule.changeVoiceToChild();
  };

  const changeToFast = () => {
    Platform.OS === "android"
      ? BridgeModule.speedUpVoice(audioTrackURL)
      : BridgeModule.speedUpVoice();
  };

  const changeToSlow = () => {
    Platform.OS === "android"
      ? BridgeModule.slowDownVoice(audioTrackURL)
      : BridgeModule.slowDownVoice();
  };

  useEffect(() => {
    void onListenFromNative();
  }, []);

  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        backgroundColor: "#e4e5ea",
        paddingTop: insets.top || 16,
      }}
    >
      <ToastTop />
      <View style={[styles.container]}>
        <Text style={styles.title}>Voice Changer</Text>
        <Text style={styles.title}> Change Voice Effects </Text>
        <View style={styles.iconsContainer}>
          <TouchableOpacity onPress={() => changeToAlien()}>
            <Image
              source={{
                uri: "https://icons.iconarchive.com/icons/google/noto-emoji-smileys/256/10101-alien-icon.png",
              }}
              resizeMode={"contain"}
              style={styles.icon}
            />
            <Text>Alien</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => changeToChild()}>
            <Image
              source={{
                uri: "https://pics.freeicons.io/uploads/icons/png/2793494581535699799-512.png",
              }}
              resizeMode={"contain"}
              style={styles.icon}
            />
            <Text>Child</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => changeToFast()}>
            <Image
              source={{
                uri: "https://icons.iconarchive.com/icons/pictogrammers/material/256/fast-forward-icon.png",
              }}
              resizeMode={"contain"}
              style={styles.icon}
            />
            <Text>Fast</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => changeToSlow()}>
            <Image
              source={{
                uri: "https://icons.iconarchive.com/icons/pictogrammers/material/256/speedometer-slow-icon.png",
              }}
              resizeMode={"contain"}
              style={styles.icon}
            />
            <Text>Slow</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    color: "#000",
    marginVertical: 25,
  },
  iconsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "100%",
    paddingHorizontal: 50,
  },
  warningText: {
    color: "red",
    fontWeight: "bold",
    letterSpacing: 1.5,
    textAlign: "center",
  },
  spacing: {
    marginVertical: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "40%",
  },
  icon: {
    height: 40,
    width: 40,
    marginBottom: 15,
  },
});

export default Bridge;
