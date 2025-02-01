import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import React, { useReducer } from 'react'
import { LayoutChangeEvent, StyleSheet, View } from 'react-native';
import BottomTabBarItem from './BottomTabBarItem';
import Animated, { useAnimatedStyle, useDerivedValue, withTiming } from 'react-native-reanimated';
import { Path, Svg } from 'react-native-svg';
import tailwindColors from '@app/utils/colors';

const AnimatedSvg = Animated.createAnimatedComponent(Svg);


const AnimatedTabBar = (props: BottomTabBarProps) => {
  const { state, descriptors, navigation } = props
  const routes = state.routes;
  const activeIndex = state.index

  const reducer = (state: any, action: { x: number; index: number }) => {
    return [...state, { x: action.x, index: action.index }];
  };
  const [layout, dispatch] = useReducer(reducer, []);

  const handleLayout = (event: LayoutChangeEvent, index: number) => {
    dispatch({ x: event.nativeEvent.layout.x, index });
  };

  const offsetX = useDerivedValue(() => {
    const value = layout.find(x => x.index === activeIndex)
    return value?.x ? value.x - 55 : 0
  }, [layout, activeIndex])

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: withTiming(offsetX.value, { duration: 250 }) }
      ]
    }
  })

  return <View style={styles.tabItemWrap}>
    <AnimatedSvg
      height={60}
      width={120}
      style={animatedStyles}
      className="absolute"
    >
      <Path
        fill="#f9a8d4"
        d="M20 0H0c11.046 0 20 8.953 20 20v5c0 19.33 15.67 35 35 35s35-15.67 35-35v-5c0-11.045 8.954-20 20-20H20z"
      />
    </AnimatedSvg>
    {routes.map((x, i) =>
      <BottomTabBarItem
        key={x.key}
        isActive={i === activeIndex}
        options={descriptors[x.key].options}
        onLayout={(e) => handleLayout(e, i)}
        onPress={() => navigation.navigate(x.name)}
      />
    )}
  </View>
}


const styles = StyleSheet.create({
  tabItemWrap: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: tailwindColors['bg-white']
  },
  tabItem: {
    height: 60,
    width: 60,
  }
})

export default AnimatedTabBar