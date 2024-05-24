import PushNotification from "react-native-push-notification";

const showNotification = (title: string, message: string) => {
  try {
    PushNotification.localNotification({
      channelId: "not1",
      autoCancel: true,
      bigText:
        "This is local notification demo in React Native app. Only shown, when expanded.",
      subText: "Local Notification Demo",
      title: "Local Notification Title",
      message: "Expand me to see more",
      vibrate: true,
      vibration: 300,
      playSound: true,
      soundName: "default",
      actions: ["Yes", "No"],
    });
  } catch (error) {
    console.log("Show file", error);
  }
};

const handleScheduleNotification = (title: string, message: string) => {
  PushNotification.scheduleLocalNotification({
    channelId: "not1",
    autoCancel: true,
    bigText:
      "This is local notification demo in React Native app. Only shown, when expanded.",
    subText: "Local Notification Demo",
    title: "Local Notification Title",
    message: "Expand me to see more",
    vibrate: true,
    vibration: 300,
    playSound: true,
    soundName: "default",
    actions: ["Yes", "No"],
    date: new Date(Date.now() + 10 * 1000)
  });
};

const handleCancel = () => {
  PushNotification.cancelAllLocalNotifications();
};

export { showNotification, handleScheduleNotification, handleCancel };
