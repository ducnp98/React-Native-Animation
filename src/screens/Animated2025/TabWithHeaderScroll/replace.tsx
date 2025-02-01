import React, { useState, useRef } from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  StatusBar,
  SafeAreaView,
  Text,
} from 'react-native';
import { TabView, TabBar } from 'react-native-tab-view';
import FirstRoute from './FirstRoute';
import SecondRoute from './SecondRoute';
import Animated, { interpolate, ReduceMotion, runOnJS, runOnUI, useAnimatedGestureHandler, useAnimatedReaction, useAnimatedStyle, useSharedValue, withDecay } from 'react-native-reanimated';
import { GestureHandlerRootView, PanGestureHandler, PanGestureHandlerGestureEvent } from 'react-native-gesture-handler';

const HEADER_HEIGHT = 600;
const TAB_BAR_HEIGHT = 50;

const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width,
};

type ContextType = {
  translateY: number;
}

const TabWithHeaderScroll = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'first', title: 'First' },
    { key: 'second', title: 'Second' },
  ]);

  const position = useSharedValue(0)
  const isValidTabPress: any = useRef(false);

  const firstRef: any = useRef();
  const secondRef: any = useRef();

  const onMomentumScrollBegin = () => {
    isValidTabPress.current = true;
  };

  const syncOffset = (scene: any, y: any) => {
    if (scene === 'first') {
      secondRef?.current?.scrollToOffset({
        offset: y,
        animated: false,
      });
    }
    if (scene === 'second') {
      firstRef?.current?.scrollToOffset({
        offset: y,
        animated: false,
      });
    }
    isValidTabPress.current = false;
  };

  const renderScene = ({ route }: any) => {
    switch (route.key) {
      case 'first':
        return (
          <FirstRoute
            position={position}
            syncOffset={syncOffset}
            firstRef={firstRef}
            onMomentumScrollBegin={onMomentumScrollBegin}
          />
        );
      case 'second':
        return (
          <SecondRoute
            position={position}
            syncOffset={syncOffset}
            secondRef={secondRef}
            onMomentumScrollBegin={onMomentumScrollBegin}
          />
        );
      default:
        return null;
    }
  };

  const headerAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            position.value,
            [0, HEADER_HEIGHT],
            [0, -HEADER_HEIGHT],
            'clamp',
          )
        }
      ]
    }
  })

  const onGestureEvent = useAnimatedGestureHandler<PanGestureHandlerGestureEvent, ContextType>({
    onStart: (_, context) => {
      context.translateY = -position.value;
    },
    onActive: (event, context) => {
      position.value = -(event.translationY + context.translateY)
    },
    onEnd: (event) => {
      position.value = withDecay(
        {
          velocity: -event.velocityY,
          deceleration: 0.998,
          clamp: [0, 600],
          velocityFactor: 1,
          rubberBandEffect: true,
          rubberBandFactor: 0.6,
          reduceMotion: ReduceMotion.System,
        },
      )
    }
  })

  function renderTabBar(props: any) {
    return (
      <PanGestureHandler onGestureEvent={onGestureEvent}>
        <Animated.View
          style={[headerAnimatedStyle, styles.tabBarContainerStyle]}>
          <View style={styles.tabBarStyle}>
            <Text>Header</Text>
          </View>
          <TabBar
            {...props}
            style={{ height: TAB_BAR_HEIGHT }}
            onTabPress={({ route, preventDefault }) => {
              if (isValidTabPress.current) {
                preventDefault();
              }
            }}
          />
        </Animated.View>
      </PanGestureHandler>
    );
  }

  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            renderTabBar={renderTabBar}
            onIndexChange={setIndex}
            initialLayout={initialLayout}
          />
        </GestureHandlerRootView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scene: {
    height: 150,
  },
  tabBarStyle: {
    height: HEADER_HEIGHT,
    backgroundColor: 'green',
  },
  tabBarContainerStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },
});

export default TabWithHeaderScroll;

