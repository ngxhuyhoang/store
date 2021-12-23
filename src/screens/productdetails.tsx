import { Image } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const ProductDetails = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Image
        source={{
          uri: 'https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg',
        }}
        style={{ width: 679 / 2, height: 513 / 2 }}
      />
    </SafeAreaView>
  );
};
export default ProductDetails;
