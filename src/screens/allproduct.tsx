/* eslint-disable react-native/no-inline-styles */
import { Icon } from '@core/icons';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { cartActions } from '@redux/slices/cart';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/native';

const Container = styled.View``;

const AllProduct = () => {
  const cartState = useSelector(state => state.cart.cart);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const isFocused = useIsFocused();

  const stateLimit = useSelector(state => state.cart.limit);

  const [products, setProducts] = useState([]);
  const getProductAsync = async () => {
    const res = await axios.get(
      `https://fakestoreapi.com/products?limit=${stateLimit}`,
    );
    setProducts(res.data);
  };

  useEffect(() => {
    if (!isFocused) {
      // Reset limit
      dispatch(cartActions.resetLimit());
    }
  }, [isFocused]);

  useEffect(() => {
    getProductAsync();
  }, [stateLimit]);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Cart');
          }}
          style={{ marginRight: 16 }}>
          <Image source={Icon.Cart} />
          <View style={styleHome.numNoti}>
            <Text style={styleHome.cssFontSize}>{cartState.length}</Text>
          </View>
        </TouchableOpacity>
      ),
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={{ marginLeft: 16 }}>
          <Image source={Icon.Search} />
        </TouchableOpacity>
      ),
    });
  }, [cartState.length]);

  const Item = ({
    name,
    img,
    price,
    idProduct,
  }: {
    name: string;
    img: string;
    price: number;
    idProduct: number;
  }) => {
    return (
      <TouchableOpacity
        style={styleHome.popularRestaurant}
        onPress={() => navigation.navigate('ProductDetails', { idProduct })}>
        <Text numberOfLines={5} style={styleHome.titleProduct}>
          {name}
        </Text>
        <Text>
          Price: <Text style={styleHome.cssColor53E88B}>{price}$</Text>
        </Text>
        <FastImage source={{ uri: img }} style={styleHome.imgProduct} />
      </TouchableOpacity>
    );
  };

  const renderProduct = ({
    item,
  }: {
    item: { title: string; image: string; price: number; idProduct: number };
  }) => {
    return (
      <Item
        name={item.title}
        img={item.image}
        price={item.price}
        idProduct={item.id}
      />
    );
  };

  return (
    <Container>
      <Text style={styleHome.titileHome}>Find Your Favorite Product</Text>
      <FlatList
        data={products}
        renderItem={renderProduct}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id.toString()}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        numColumns={2}
        ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
        contentContainerStyle={{ padding: 16 }}
        showsVerticalScrollIndicator={false}
        style={{ marginBottom: 50 }}
        onEndReached={() => dispatch(cartActions.loadMore())}
      />
    </Container>
  );
};
export default AllProduct;

const styleHome = StyleSheet.create({
  titileHome: {
    marginLeft: 30,
    marginRight: 30,
    marginTop: 30,
    fontWeight: 'bold',
    fontSize: 26,
  },
  popularRestaurant: {
    width: 147,
    height: 220,
    borderWidth: 1,
    borderRadius: 15,
    marginRight: 15,
    marginHorizontal: 20,
    marginVertical: 20,
    justifyContent: 'space-between',
  },
  titleProduct: {
    textAlign: 'center',
    margin: 10,
    fontSize: 12,
    fontWeight: 'bold',
  },
  imgProduct: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    borderRadius: 10,
    marginBottom: 10,
  },
  numNoti: {
    position: 'absolute',
    backgroundColor: 'red',
    borderRadius: 99,
    paddingVertical: 5,
    paddingHorizontal: 3,
    top: -10,
    right: -6,
  },
  cssColor53E88B: {
    color: '#53E88B',
  },
  cssFontSize: {
    fontSize: 10,
  },
});
