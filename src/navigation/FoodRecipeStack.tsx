import React from "react";
import { CardStyleInterpolators } from "@react-navigation/stack";
import { FoodRecipeStack } from "./RouteParams";

import WelcomeFoodRecipe from "@app/screens/Reanimateds2/FoodRecipe/Welcome";
import HomeFoodRecipe from "@app/screens/Reanimateds2/FoodRecipe/Home";
import DetailFoodRecipe from "@app/screens/Reanimateds2/FoodRecipe/Detail";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";

const Stack = createSharedElementStackNavigator<FoodRecipeStack>();

const screenOptions = {
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
};

const FoodRecipeStackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="WelcomeScreen"
      screenOptions={{
        ...screenOptions,
        headerShown: true,
        headerTitleAlign: "center",
        headerBackTitleVisible: true,
      }}
    >
      <Stack.Screen
        name="WelcomeScreen"
        component={WelcomeFoodRecipe}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HomeScreen"
        component={HomeFoodRecipe}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Detail"
        component={DetailFoodRecipe}
        options={{ headerShown: false }}
        sharedElements={(route, otherRoute, showing) => {
          const { item } = route.params;
          return [
            {
              id: `item.${item.strMeal}.photo`,
              animation: 'fade',
            },
          ];
        }}
      />
    </Stack.Navigator>
  );
};

export default FoodRecipeStackNavigation;
