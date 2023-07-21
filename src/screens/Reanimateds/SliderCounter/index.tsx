import { View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Container from './Container';

const SliderCounter = () => {
  return (
    <GestureHandlerRootView className='flex-1'>
      <View className='flex-1 bg-white items-center justify-center'>
        <Container />
      </View>
    </GestureHandlerRootView>
  );
}

export default SliderCounter
