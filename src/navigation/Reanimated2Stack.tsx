import React from "react";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import ReanimatedScreen2 from "../screens/Reanimateds2";
import Scrolling from "../screens/Reanimateds2/Scrolling";
import MenuBar from "../screens/Reanimateds2/MenuBar";
import { RootStackParamList } from "./RouteParams";
import According from "../screens/Reanimateds2/According";
import OptionSelection from "@app/screens/Reanimateds2/OptionSelection";
import DragAndDrop from "@app/screens/Reanimateds2/DragAndDrop";
import AddToCart from "@app/screens/Reanimateds2/AddToCart";
import Twitter from "@app/screens/Reanimateds2/TwitterLike";
import BKashPayment from "@app/screens/Reanimateds2/BKashPayment";
import PullToRefresh from "@app/screens/Reanimateds2/PullToRefresh";
import SwipeToDelete from "@app/screens/Reanimateds2/SwipeToDelete";
import Onboarding from "@app/screens/Reanimateds2/Onboarding";
import NotionHeader from "@app/screens/Reanimateds2/NotionHeader";
import MenuCatagories from "@app/screens/Reanimateds2/MenuCatagories";
import FoodRecipeStackNavigation from "./FoodRecipeStack";
import Alert from "@app/screens/Reanimateds2/Alert";
import Carousel from "@app/screens/Reanimateds2/Carousel";

const Stack = createStackNavigator<RootStackParamList>();

const screenOptions = {
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
};

const Reanimated2Stack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Reanimated2Screen"
      screenOptions={{
        ...screenOptions,
        headerShown: true,
        headerTitleAlign: "center",
        headerBackTitleVisible: true,
      }}
    >
      <Stack.Screen
        name="Reanimated2Screen"
        component={ReanimatedScreen2}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Scrolling"
        component={Scrolling}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MenuBar"
        component={MenuBar}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="According"
        component={According}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="OptionSelection"
        component={OptionSelection}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DragAndDrop"
        component={DragAndDrop}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AddToCart"
        component={AddToCart}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Twitter"
        component={Twitter}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="BKashPayment"
        component={BKashPayment}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PullToRefresh"
        component={PullToRefresh}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SwipeToDelete"
        component={SwipeToDelete}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Onboarding"
        component={Onboarding}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NotionHeader"
        component={NotionHeader}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MenuCatagories"
        component={MenuCatagories}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="FoodRecipe"
        component={FoodRecipeStackNavigation}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Alert"
        component={Alert}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Carousel"
        component={Carousel}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default Reanimated2Stack;
