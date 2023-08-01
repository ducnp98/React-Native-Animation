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
}

export interface NavigationStack extends ParamListBase {
  TopTabNavigation: undefined;
}

export interface Reanimated2Stack extends ParamListBase {
  Reanimated2Screen: undefined;
}

export interface RootStackParamList extends ParamListBase {
  AnimatedStack: NavigatorScreenParams<AnimatedStack>;
  ReanimatedStack: NavigatorScreenParams<ReanimatedStack>;
  Reanimated2Stack: NavigatorScreenParams<Reanimated2Stack>;
  ReactHookStack: NavigatorScreenParams<ReactHookStack>;
  NavigationStack: NavigatorScreenParams<NavigationStack>;
  HomeScreen: undefined;
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
