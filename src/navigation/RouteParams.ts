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

export interface ReactHookStack extends ParamListBase {
  HigherOrderComponent: undefined
}

export interface RootStackParamList extends ParamListBase {
  AnimatedStack: NavigatorScreenParams<AnimatedStack>
  HomeScreen: undefined
}
export type AllScreenParamList = RootStackParamList & AnimatedStack & ReactHookStack

declare global {
  namespace ReactNavigation {
    interface RootParamList extends AllScreenParamList {}
  }
}
