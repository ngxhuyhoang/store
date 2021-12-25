import { Icon } from '@core/icons';
import { cartActions } from '@redux/slices/cart';
import React from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

const Cart = () => {
  const cartState = useSelector(state => state.cart.cart);
  const dispatch = useDispatch();

  const OrderProduct = ({
    id,
    title,
    image,
    quantity,
    price,
  }: {
    id: number;
    title: string;
    image: string;
    quantity: number;
    price: number;
  }) => {
    return (
      <View style={{ flex: 1, borderWidth: 1 }}>
        <View style={{ flexDirection: 'row' }}>
          <Image source={{ uri: image }} style={{ width: 40, height: 40 }} />
          <Text>{title}</Text>
        </View>

        <View>
          <View style={{ flexDirection: 'row' }}>
            <Text>Quantily: </Text>
            <TouchableOpacity
              onPress={() => dispatch(cartActions.quantityDecreament({ id }))}>
              <Image source={Icon.Minus} style={{ width: 40, height: 20 }} />
            </TouchableOpacity>
            <Text style={{ borderWidth: 1 }}> {quantity} </Text>
            <TouchableOpacity
              onPress={() => dispatch(cartActions.quantityIncreament({ id }))}>
              <Image source={Icon.Plus} style={{ width: 40, height: 20 }} />
            </TouchableOpacity>
          </View>
        </View>
        <Text>
          Price: <Text style={{ color: '#53E88B' }}>{price}$</Text>
        </Text>
      </View>
    );
  };

  const renderOrderProduct = ({
    item,
  }: {
    item: {
      title: string;
      image: string;
      quantity: number;
      price: number;
      id: number;
    };
  }) => {
    return (
      <OrderProduct
        title={item.title}
        image={item.image}
        quantity={item.quantity}
        price={item.price}
        id={item.id}
      />
    );
  };
  return (
    <View>
      <Text>Order Product Detail</Text>
      <FlatList
        data={cartState}
        renderItem={renderOrderProduct}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};
export default Cart;
