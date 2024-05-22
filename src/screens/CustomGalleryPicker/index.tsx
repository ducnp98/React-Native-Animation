import MyIcon from "@app/commons/MyIcon";
import {
  CameraRoll,
  PhotoIdentifier,
} from "@react-native-camera-roll/camera-roll";
import { FlashList } from "@shopify/flash-list";
import React, { useCallback, useEffect, useState } from "react";
import { Image, Pressable, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const CustomGalleryPicker = () => {
  const insets = useSafeAreaInsets();
  const [selected, setSelected] = useState("gallery");
  const [photos, setPhoto] = useState<PhotoIdentifier[]>([]);
  const [selectedPhoto, setSelectedPhoto] = useState<string[]>([]);

  const selectedClassName =
    "flex-1 items-center justify-center border-b-4 border-gray-500";

  const unSelectedClassName = "flex-1 items-center justify-center";

  const isSelected = useCallback(
    (type: string) => {
      return type === selected;
    },
    [selected]
  );

  useEffect(() => {
    CameraRoll.getPhotos({
      assetType: "All",
      first: -1,
    })
      .then((res) => {
        setPhoto(res.edges);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);

  const onPressPhoto = (fileName: string) => {
    if (selectedPhoto.includes(fileName)) {
      const data = [...selectedPhoto].filter((x) => x !== fileName);
      setSelectedPhoto(data);
    } else {
      setSelectedPhoto((pre) => [...pre, fileName ?? ""]);
    }
  };

  return (
    <View
      className="flex-1 relative bg-white"
      style={{ paddingTop: insets.top || 16 }}
    >
      <View>
        <View className="flex-row justify-between px-4 items-center">
          <View className="flex-row items-center">
            <Text className="text-base font-semibold">Gallery</Text>
            <MyIcon name="menu-down" size={34} />
          </View>
          <View>
            <Text className="text-base font-semibold">Next</Text>
          </View>
        </View>
      </View>
      <View className="flex-row flex-wrap flex-1">
        <FlashList
          data={photos}
          keyExtractor={(item) =>
            item.node.image.filename ?? Math.random().toString()
          }
          estimatedItemSize={20}
          numColumns={3}
          extraData={selectedPhoto}
          renderItem={({ item }) => (
            <>
              <Pressable
                className={`w-full h-36 p-0.5`}
                onPress={() => onPressPhoto(item.node.image.filename ?? "")}
              >
                <Image
                  source={{
                    uri: item.node.image.uri,
                  }}
                  className="w-full h-full p-1"
                />
              </Pressable>
              {selectedPhoto.includes(item.node.image.filename ?? "") ? (
                <View
                  className="w-full h-full absolute p-0.5"
                  pointerEvents="none"
                >
                  <View className="bg-black/30 w-full h-full"></View>
                </View>
              ) : null}
            </>
          )}
        />
      </View>
      <View
        className="flex-row left-0 right-0 bg-slate-100 absolute bottom-0 mb-2"
        style={{ paddingBottom: insets.bottom, height: 50 + insets.bottom }}
      >
        {["gallery", "photo", "video"].map((item) => (
          <TouchableOpacity
            key={item}
            className={
              isSelected(item) ? selectedClassName : unSelectedClassName
            }
            onPress={() => setSelected(item)}
          >
            <Text
              className={`font-bold text-gray-${
                isSelected(item) ? "700" : "400"
              } text-base `}
            >
              {item.toUpperCase()}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default CustomGalleryPicker;
