import React, { useCallback, useRef, useState } from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import {
  ScrollView,
  GestureHandlerRootView,
  FlatList,
} from "react-native-gesture-handler";
import ListItem from "./ListItem";
import Animated, { useAnimatedScrollHandler } from "react-native-reanimated";

const TITLES = [
  "Record the dismissible tutorial 🎥",
  "Leave 👍🏼 to the video",
  "Check YouTube comments",
  "Subscribe to the channel 🚀",
  "Leave a ⭐️ on the GitHub Repo",
  "Don't forget to push code",
  "You are a developer",
  "Good bye",
];

export interface TaskInterface {
  title: string;
  index: number;
}

const BACKGROUND_COLOR = "#FAFBFF";
const TASKS: TaskInterface[] = TITLES.map((title, index) => ({ title, index }));

const SwipeToDelete = () => {
  const [tasks, setTasks] = useState(TASKS);

  const onDelete = useCallback((task: TaskInterface) => {
    setTasks((tasks) => tasks.filter((item) => item.index !== task.index));
  }, []);

  const scrollRef = useRef(null);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Tasks</Text>
        <ScrollView ref={scrollRef} style={{ flex: 1 }}>
          {tasks.map((task) => (
            <ListItem
              simultaneousHandlers={scrollRef}
              key={task.index}
              task={task}
              onDelete={onDelete}
            />
          ))}
        </ScrollView>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
  },
  title: {
    fontSize: 60,
    marginVertical: 20,
    paddingLeft: "5%",
  },
});

export default SwipeToDelete;
