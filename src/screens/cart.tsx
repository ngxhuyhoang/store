import { Icon } from '@core/icons';
import { cartActions } from '@redux/slices/cart';
import React from 'react';
import {
  Alert,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

const Cart = () => {
  const cartState = useSelector(state => state.cart.cart);
  const totalPrice = useSelector(state => state.cart.totalPrice);
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
      <View style={styleCart.cartItem}>
        <View style={{ flexDirection: 'row' }}>
          <Image source={{ uri: image }} style={styleCart.imgCart} />
          <View style={{ marginLeft: 10 }}>
            <Text style={{ paddingRight: 30 }}>{title}</Text>
            <View>
              <View style={{ flexDirection: 'row' }}>
                <Text>Quantily: </Text>
                <TouchableOpacity
                  onPress={() => {
                    dispatch(cartActions.quantityDecreament({ id }));
                    dispatch(cartActions.caculateTotalPrice());
                  }}>
                  <Image source={Icon.Minus} style={styleCart.iconQuantity} />
                </TouchableOpacity>
                <Text style={{ borderWidth: 1 }}> {quantity} </Text>
                <TouchableOpacity
                  onPress={() => {
                    dispatch(cartActions.quantityIncreament({ id }));
                    dispatch(cartActions.caculateTotalPrice());
                  }}>
                  <Image source={Icon.Plus} style={styleCart.iconQuantity} />
                </TouchableOpacity>
              </View>
            </View>
            <Text>
              Price:{' '}
              <Text style={{ color: '#53E88B' }}>{price * quantity}$</Text>
            </Text>
          </View>
        </View>
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
    <View style={styleCart.cartScreen}>
      <View>
        <Text style={styleCart.titleCart}>Your Order</Text>
        <TouchableOpacity
          style={styleCart.btnPayment}
          onPress={() => Alert.alert('Payment success')}>
          <Text>Payment</Text>
          <Text>Total: {totalPrice?.toFixed(2)}$</Text>
        </TouchableOpacity>
      </View>
      <View style={styleCart.styleFlatlist}>
        <FlatList
          data={cartState}
          renderItem={renderOrderProduct}
          keyExtractor={item => item?.id?.toString()}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};
export default Cart;
const styleCart = StyleSheet.create({
  btnPayment: {
    borderWidth: 1,
    marginLeft: 200,
    margin: 20,
    width: 150,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
    position: 'absolute',
  },
  iconQuantity: { width: 40, height: 20, borderRadius: 10 },
  cartItem: {
    flex: 1,
    borderWidth: 1,
    borderBottomWidth: 5,
    borderBottomColor: '#a6a6a6',
    marginVertical: 5,
    marginHorizontal: 15,
    paddingHorizontal: 15,
    paddingRight: 30,
    borderRadius: 10,
    padding: 16,
    backgroundColor: '#ffffff',
  },
  cartScreen: {
    marginTop: 16,
    backgroundColor: '#fefefe',
  },
  titleCart: {
    fontSize: 30,
    height: 60,
    marginLeft: 10,
    fontWeight: 'bold',
    backgroundColor: '#fefefe',
  },
  imgCart: { width: 60, height: 60 },
  styleFlatlist: {
    marginBottom: 120,
  },
});
