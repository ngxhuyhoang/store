import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SwipeRating from 'react-native-ratings/dist/SwipeRating';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Icon } from '@core/icons';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '@redux/slices/cart';

const ProductDetails = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const id = route?.params?.idProduct;
  const dispatch = useDispatch();

  const cartState = useSelector(state => state.cart.cart);

  const [productDetails, setProductDetails] = useState([]);
  const getProductdetailAsync = async () => {
    const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
    setProductDetails(res.data);
  };

  useEffect(() => {
    getProductdetailAsync();
  }, []);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Cart');
          }}>
          <Image source={Icon.Cart} />
          <View style={stylePrdDetails.numNoti}>
            <Text style={stylePrdDetails.cssFontSize}>{cartState.length}</Text>
          </View>
        </TouchableOpacity>
      ),
    });
  }, [cartState.length]);

  return (
    <ScrollView contentContainerStyle={stylePrdDetails.cssPaddingHorizontal}>
      <Text style={stylePrdDetails.titlePrdDetail}>{productDetails.title}</Text>
      <Image
        source={{
          uri: productDetails.image,
        }}
        style={stylePrdDetails.imagePrdDetail}
      />
      <View style={stylePrdDetails.viewPricePrdDetail}>
        <Text style={stylePrdDetails.pricePrdDetail}>
          Price:{' '}
          <Text style={stylePrdDetails.cssColor53E88B}>
            {productDetails.price}$
          </Text>
        </Text>
        <TouchableOpacity
          style={stylePrdDetails.btnAddToCart}
          onPress={() => {
            dispatch(cartActions.addToCart(productDetails));
            dispatch(cartActions.caculateTotalPrice(productDetails.price));
          }}>
          <Text style={stylePrdDetails.textAddToCart}>ADD TO CART</Text>
        </TouchableOpacity>
      </View>
      <Text />
      <Text>Description: {productDetails.description}</Text>
      <Text />
      <View style={stylePrdDetails.ratePrdDetail}>
        <Text>
          Rating : {productDetails?.rating?.rate} / 5 (
          {productDetails?.rating?.count})
        </Text>
        <SwipeRating
          showRating={false}
          startingValue={productDetails?.rating?.rate}
          ratingCount={5}
          fractions={1}
          imageSize={15}
          style={stylePrdDetails.ratingPrdDetail}
        />
      </View>
    </ScrollView>
  );
};
export default ProductDetails;

const stylePrdDetails = StyleSheet.create({
  imagePrdDetail: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginVertical: 8,
  },
  ratePrdDetail: { flex: 1, flexDirection: 'row' },
  ratingPrdDetail: { marginLeft: 5 },
  btnAddToCart: {
    backgroundColor: 'red',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 8,
  },
  textAddToCart: { color: 'white' },
  pricePrdDetail: { fontSize: 20 },
  viewPricePrdDetail: {
    marginTop: 8,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titlePrdDetail: { fontWeight: 'bold', fontSize: 25 },
  numNoti: {
    position: 'absolute',
    backgroundColor: 'red',
    borderRadius: 999,
    paddingVertical: 5,
    paddingHorizontal: 3,
    top: -10,
    right: -10,
  },
  cssColor53E88B: {
    color: '#53E88B',
  },
  cssFontSize: {
    fontSize: 10,
  },
  cssPaddingHorizontal: {
    paddingHorizontal: 16,
  },
});
