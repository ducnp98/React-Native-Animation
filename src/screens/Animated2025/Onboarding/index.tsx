import React, { useRef } from 'react'
import Animated, { interpolateColor, useAnimatedRef, useAnimatedScrollHandler, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated'
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { OnboardingData } from './data';
import tailwindColors from '@app/utils/colors';
import { FlatList } from 'react-native-gesture-handler';
import OnboardingItem from './OnboardingItem';

const SCREEN_WIDTH = Dimensions.get('window').width

const Onboarding = () => {
  const { goBack } = useNavigation()
  const indexPage = useSharedValue(0)
  const translateX = useSharedValue(0)
  const flatListRef = useAnimatedRef<FlatList<OnboardingData>>();

  //Flatlist start
  const onViewableItemsChanged = (e: any) => {
    if (e.viewableItems.length) { indexPage.value = e.viewableItems[0].index }
  };
  const viewabilityConfig = { itemVisiblePercentThreshold: 100 }
  const viewabilityConfigCallbackPairs = useRef([
    { viewabilityConfig, onViewableItemsChanged },
  ]);
  //Flatlist end

  const nextButtonAnimatedStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      translateX.value,
      [0, SCREEN_WIDTH, SCREEN_WIDTH * 2],
      ["#005b4f", "#1e2169", "#F15937"]
    )

    return {
      backgroundColor,
      width: withSpring(indexPage.value === 2 ? 150 : 60),
      height: 60,
    }
  })

  const nextIconAnimatedStyled = useAnimatedStyle(() => {
    return {
      flexDirection: 'row',
      alignItems: 'center',
      width: 200,
      transform: [{ translateX: withSpring(indexPage.value === 2 ? 50 : -65) }]
    }
  })

  const onNext = () => {
    if (indexPage.value !== 2) {
      flatListRef?.current?.scrollToIndex({ index: indexPage.value + 1 })
    }
  }

  const onScroll = useAnimatedScrollHandler({
    onScroll: (event) => { translateX.value = event.contentOffset.x },
  });

  return (
    <>
      <Animated.FlatList
        ref={flatListRef}
        data={OnboardingData}
        keyExtractor={i => i.id.toString()}
        renderItem={({ item, index }) => <OnboardingItem item={item} index={index} translateX={translateX} />}
        horizontal={true}
        onScroll={onScroll}
        scrollEventThrottle={16}
        pagingEnabled={true}
        bounces={false}
        showsHorizontalScrollIndicator={false}
        viewabilityConfigCallbackPairs={
          viewabilityConfigCallbackPairs.current
        }
      />
      <TouchableOpacity style={styles.goBackButton} onPress={goBack}>
        <Image source={require('./assets/ArrowIcon.png')} style={styles.goBackIcon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={onNext}>
        <Animated.View style={[styles.nextButton, nextButtonAnimatedStyle]} >
          <Animated.View style={nextIconAnimatedStyled}>
            <Text style={styles.getStartedText}>Get Started</Text>
            <Image source={require('./assets/ArrowIcon.png')} style={styles.nextIcon} />
          </Animated.View>
        </Animated.View>
      </TouchableOpacity>
      <View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 90
  },
  itemTitle: {
    fontSize: 24,
    fontWeight: '700',
    marginTop: 24
  },
  itemCircleContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  goBackButton: {
    width: 50,
    height: 50,
    backgroundColor: tailwindColors['bg-pink'][700],
    position: 'absolute',
    top: 50,
    left: 20,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 3, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 5,
  },
  goBackIcon: {
    width: 30,
    height: 30,
    transform: [
      { scaleX: -1 }
    ]
  },
  nextButton: {
    position: 'absolute',
    bottom: 50,
    right: 20,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden'
  },
  nextIcon: {
    width: 35,
    height: 35,
  },
  getStartedText: {
    color: tailwindColors['bg-white'],
    fontSize: 18,
    fontWeight: '600',
    paddingRight: 50,
  }
})

export default Onboarding