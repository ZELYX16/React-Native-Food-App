import {  View ,Text} from '@/src/components/Themed';
import products from '../../../assets/data/products';
import Productlist from '@/src/components/productlist';
export default function TabOneScreen() {
  return (
    <View >
      <Productlist products={products} />
    </View>
  );
}

