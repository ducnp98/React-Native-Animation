import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Text, TouchableOpacity, View } from "react-native";
import { selectTodoString } from "./slide/selector";
import { todoAction } from "./slide";

const TodoPage = () => {
  const dispatch = useDispatch();
  const todoText = useSelector(selectTodoString);

  const onChangeText = () => {
    dispatch(todoAction.changeTextTodo('Hello nha'))
  };

  return (
    <View className="flex-1 justify-center items-center">
      <Text className="py-4 text-xl text-teal-500 font-bold">{todoText}</Text>
      <TouchableOpacity className="px-6 py-2 bg-teal-500 rounded-lg" onPress={onChangeText}>
        <Text className="text-lg text-white font-bold">Change text</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TodoPage;
