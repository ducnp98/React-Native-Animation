import { NativeEventEmitter, NativeModules } from 'react-native';
import ToastTop from '../Reanimateds2/Alert/Toast';

const { BridgeModule } = NativeModules;
const eventEmitter = new NativeEventEmitter(BridgeModule)

export const onListenFromNative = async () => {
  eventEmitter.addListener('SendDataBack', (data) => {
    console.log('SendDataBack', data)
    ToastTop.success(data.name)
  })
}
