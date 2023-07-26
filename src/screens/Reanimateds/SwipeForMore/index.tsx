import React, { useRef, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import TaskItem, { Task } from "./TaskItem";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const SwipeForMore = () => {
  const scrollRef = useRef(null);
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: "You loose, nobody likes you" },
    { id: 2, title: "You win, still nobody likes you" },
  ]);

  const onAddTask = () => {
    const randomId = Math.floor(Math.random() * 10000)
    setTasks((pre) => [
      { id: randomId, title: `New task added ${randomId}` },
      ...pre,
    ]);
  };

  const onDelete = (id?: number) => {
    if (id) {
      setTasks((pre) => [...pre.filter(item => item.id !== id)])
    } else {
      console.log('Run')
      setTasks((pre) => pre.slice(1));
    }
  };

  return (
    <GestureHandlerRootView className="flex-1">
      <SafeAreaView className="flex-1">
        <View className="flex-row px-4 justify-between my-4">
          <TouchableOpacity
            onPress={onAddTask}
            className="w-5/12 bg-green-500 h-10 rounded-xl items-center justify-center"
          >
            <Text className="text-white text-lg font-bold">Add</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => onDelete()}
            className="w-5/12 bg-red-500 h-10 rounded-xl items-center justify-center"
          >
            <Text className="text-white text-lg font-bold">Delete</Text>
          </TouchableOpacity>
        </View>
        <ScrollView ref={scrollRef} className="flex-1">
          {tasks.map((item) => (
            <TaskItem
              item={item}
              key={item.id}
              simultaneousHandlers={scrollRef}
              onDelete={(id) => onDelete(id)}
            />
          ))}
        </ScrollView>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default SwipeForMore;
