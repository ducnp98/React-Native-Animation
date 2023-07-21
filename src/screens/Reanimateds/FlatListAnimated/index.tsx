import { FlatList, StyleSheet, View, ViewToken } from 'react-native';
import { useSharedValue } from 'react-native-reanimated';
import { ListItem } from './ListItem';

const data = new Array(50).fill(0).map((_, index) => ({ id: index }));

export default function FlatListAnimated() {
  const viewableItems = useSharedValue<ViewToken[]>([]);

  return (
    <View className='flex-1 bg-white'>
      <FlatList
        data={data}
        contentContainerStyle={{ paddingTop: 40 }}
        onViewableItemsChanged={({ viewableItems: vItems }) => {
          viewableItems.value = vItems;
        }}
        renderItem={({ item }) => {
          return <ListItem item={item} viewableItems={viewableItems} />;
        }}
      />
    </View>
  );
}
