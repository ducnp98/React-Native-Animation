import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { Image, ImageStyle, StyleProp } from "react-native";

type Props = {
  uri: string;
  myClassName?: string;
  resizeMode?: "cover" | "contain" | "stretch" | "repeat" | "center";
  styles?: StyleProp<ImageStyle>;
};

const MyImage = (props: Props) => {
  const { uri, myClassName, resizeMode, styles } = props;

  const [cachedSource, setCachedSource] = useState<any>();

  useEffect(() => {
    const getCachedImage = async () => {
      try {
        const cachedImageData = await AsyncStorage.getItem(uri);
        if (cachedImageData) {
          setCachedSource({ uri: JSON.parse(cachedImageData) });
        } else {
          const response = await fetch(uri);
          const imageBlob = await response.blob();
          const base64Data = await new Promise((resolve) => {
            const reader = new FileReader();
            reader.readAsDataURL(imageBlob);
            reader.onloadend = () => {
              resolve(reader.result);
            };
          });
          await AsyncStorage.setItem(uri, JSON.stringify(base64Data));
          setCachedSource({ uri: base64Data });
        }
      } catch (error) {
        console.error("Error caching image:", error);
        setCachedSource({ uri: uri });
      }
    };
    getCachedImage();
  }, []);

  return (
    <Image
      source={cachedSource}
      style={styles}
      className={myClassName}
      resizeMode={resizeMode}
    />
  );
};

export default MyImage;
