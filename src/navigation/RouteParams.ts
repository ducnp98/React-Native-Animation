import {
  type NavigatorScreenParams,
  type ParamListBase,
} from "@react-navigation/native";
export interface AnimatedStack extends ParamListBase {
  AnimatedScreen: undefined;
  HeaderMomo: undefined;
  DraggableBottomSheet: undefined;
  ModalAnimation: undefined;
  PhoneColorPicker: undefined;
  AnimatedExample: undefined;
  DoubleTapMessage: undefined;
}

export interface ReanimatedStack extends ParamListBase {
  ReanimatedScreen: undefined;
  Begin: undefined;
}

export interface ReactHookStack extends ParamListBase {
  HigherOrderComponent: undefined;
  ReduxSaga: undefined;
  RTKquery: undefined;
  FormikForm: undefined;
}

export interface NavigationStack extends ParamListBase {
  TopTabNavigation: undefined;
}

export interface Reanimated2Stack extends ParamListBase {
  Reanimated2Screen: undefined;
}

export type FoodRecipeStack = {
  WelcomeScreen: undefined;
  HomeScreen: undefined;
  Detail: { item: any };
};

export interface Animated2025Stack extends ParamListBase {
  DraggableBottomSheet: undefined;
}

export interface RootStackParamList extends ParamListBase {
  Animated2025Stack: NavigatorScreenParams<Animated2025Stack>;
  AnimatedStack: NavigatorScreenParams<AnimatedStack>;
  ReanimatedStack: NavigatorScreenParams<ReanimatedStack>;
  Reanimated2Stack: NavigatorScreenParams<Reanimated2Stack>;
  ReactHookStack: NavigatorScreenParams<ReactHookStack>;
  NavigationStack: NavigatorScreenParams<NavigationStack>;
  HomeScreen: undefined;
  FoodRecipeStack: NavigatorScreenParams<FoodRecipeStack>;
}

export type AllScreenParamList = RootStackParamList &
  AnimatedStack &
  ReactHookStack &
  ReanimatedStack &
  Reanimated2Stack &
  NavigationStack;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends AllScreenParamList {}
  }
}
