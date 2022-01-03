import { Icon } from '@core/icons';
import { cartActions } from '@redux/slices/cart';
import React from 'react';
import {
  Alert,
  FlatList,
  Image,
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

  const btnPayment = () => {
    if (totalPrice === 0) {
      return true;
    }
  };

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
        <View style={styleCart.cssFlexRow}>
          <Image source={{ uri: image }} style={styleCart.imgCart} />
          <View style={styleCart.cssMargin}>
            <Text style={styleCart.cssPadding}>{title}</Text>
            <View>
              <View style={styleCart.cssFlexRow}>
                <Text>Quantily: </Text>
                <TouchableOpacity
                  onPress={() => {
                    dispatch(cartActions.quantityDecreament({ id }));
                    dispatch(cartActions.caculateTotalPrice());
                  }}>
                  <Image source={Icon.Minus} style={styleCart.iconQuantity} />
                </TouchableOpacity>
                <Text style={styleCart.cssBorderWidth}> {quantity} </Text>
                <TouchableOpacity
                  onPress={() => {
                    dispatch(cartActions.quantityIncreament({ id }));
                    dispatch(cartActions.caculateTotalPrice());
                  }}>
                  <Image source={Icon.Plus} style={styleCart.iconQuantity} />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => dispatch(cartActions.deleteItemCart({ id }))}>
                  <Image
                    source={Icon.Trash}
                    style={
                      (styleCart.iconQuantity,
                      { backgroundColor: 'red', borderRadius: 4 })
                    }
                  />
                </TouchableOpacity>
              </View>
            </View>
            <Text>
              Price:{' '}
              <Text style={styleCart.cssColor53E88B}>
                {(price * quantity).toFixed(2)}$
              </Text>
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
          disabled={btnPayment()}
          style={styleCart.btnPayment}
          onPress={() => {
            Alert.alert('Payment success');
            dispatch(cartActions.paymentSuccess());
          }}>
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
  cssColor53E88B: {
    color: '#53E88B',
  },
  cssFlexRow: {
    flexDirection: 'row',
  },
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
  iconQuantity: { width: 40, height: 25, borderRadius: 10 },
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
  cssMargin: {
    marginLeft: 10,
  },
  cssPadding: {
    paddingRight: 30,
  },
  cssBorderWidth: {
    borderWidth: 1,
    alignSelf: 'center',
  },
});
