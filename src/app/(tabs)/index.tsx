
import products from '../../../assets/data/products';
import Product from '@/src/components/Product';
import { FlatList, View } from 'react-native';

export default function TabOneScreen() {
  return (
    <View >
      <FlatList
        data={products} //should specify an array of dataitems
        renderItem={({ item }) => <Product product={item} />} /* recieves an obj containing item .a fn that specifies what to do with each item from data(products) */
        numColumns={2}
      />
    </View>
  );
}

