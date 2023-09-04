import React from "react";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import { RootStackParamList } from "./RouteParams";
import HOC from "../screens/ReactHook/HOC";
import ReactHook from "../screens/ReactHook";
import ReduxSaga from "@app/screens/ReactHook/ReduxSaga";
import RTKquery from "@app/screens/ReactHook/RTKquery";
import { Provider } from "react-redux";
import store from "@app/screens/ReactHook/ReduxSaga/store";
import FormikForm from "@app/screens/ReactHook/FormikForm";

const Stack = createStackNavigator<RootStackParamList>();

const screenOptions = {
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
};

const ReactHookStack = () => {
  return (
    <Provider store={store}>
      <Stack.Navigator
        initialRouteName="ReactHook"
        screenOptions={{
          ...screenOptions,
          headerShown: true,
          headerTitleAlign: "center",
          headerBackTitleVisible: true,
        }}
      >
        <Stack.Screen
          name="ReactHook"
          component={ReactHook}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HOC"
          component={HOC}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ReduxSaga"
          component={ReduxSaga}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RTKquery"
          component={RTKquery}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="FormikForm"
          component={FormikForm}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </Provider>
  );
};

export default ReactHookStack;
