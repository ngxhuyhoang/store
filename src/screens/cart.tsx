import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { useSelector } from 'react-redux';

const Cart = () => {
  const cartState = useSelector(state => state.cart.cart);

  return (
    <View>
      <Text>Order Product Detail</Text>
      <FlatList
        data={cartState}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>;
        }}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};
export default Cart;
