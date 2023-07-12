import { type NavigatorScreenParams, type ParamListBase } from '@react-navigation/native'
export interface AnimatedStack extends ParamListBase {
  AnimatedScreen: undefined
  HeaderMomo: undefined
  DraggableBottomSheet: undefined
  ModalAnimation: undefined
  PhoneColorPicker: undefined
  AnimatedExample: undefined
  DoubleTapMessage: undefined
}

export interface ReanimatedStack extends ParamListBase {
  ReanimatedScreen: undefined
  Begin: undefined
}

export interface ReactHookStack extends ParamListBase {
  HigherOrderComponent: undefined
}

export interface RootStackParamList extends ParamListBase {
  AnimatedStack: NavigatorScreenParams<AnimatedStack>
  ReanimatedStack: NavigatorScreenParams<ReanimatedStack>
  HomeScreen: undefined
}
export type AllScreenParamList = RootStackParamList & AnimatedStack & ReactHookStack & ReanimatedStack

declare global {
  namespace ReactNavigation {
    interface RootParamList extends AllScreenParamList {}
  }
}
