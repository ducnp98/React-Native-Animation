import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import ModalComponent from "./ModalComponent";

const ModalAnimation = () => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => {
    setOpen(true);
  };

  return (
    <>
      <View className="flex-1 bg-white flex justify-center items-center">
        <View>
          <TouchableOpacity
            className="py-2 px-3 bg-red-500 rounded-lg mb-2"
            onPress={onOpenModal}
          >
            <Text className="text-white text-base font-bold text-center">
              Open Modal
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <ModalComponent
        title="This is Modal"
        isVisible={open}
        onClose={() => setOpen(false)}
      >
        {open ? (
          <ScrollView>
            <Text style={{ paddingHorizontal: 16 }}>Content</Text>
          </ScrollView>
        ) : null}
      </ModalComponent>
    </>
  );
};

export default ModalAnimation;
