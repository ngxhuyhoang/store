import { Icon } from '@core/icons';
import { useNavigation } from '@react-navigation/native';
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
import { useSelector } from 'react-redux';
import styled from 'styled-components/native';

const Container = styled.ScrollView``;

const Home = () => {
  const cartState = useSelector(state => state.cart.cart);
  const navigation = useNavigation();

  const [products, setProducts] = useState([]);
  const getProductAsync = async () => {
    const res = await axios.get('https://fakestoreapi.com/products');
    setProducts(res.data);
  };

  useEffect(() => {
    getProductAsync();
  }, []);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Cart');
          }}>
          <Image source={Icon.Cart} />
          <View style={styleHome.numNoti}>
            <Text style={{ fontSize: 10 }}>{cartState.length}</Text>
          </View>
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
        <Text style={styleHome.titleProduct}>{name}</Text>
        <Text>Price: {price}$</Text>
        <Image source={{ uri: img }} style={styleHome.imgProduct} />
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
    <Container showsVerticalScrollIndicator={false}>
      <Text style={styleHome.titileHome}>Find Your Favorite Product</Text>
      <Text>Popular Men's Cloth</Text>
      <View style={styleHome.styleProduct}>
        <FlatList
          horizontal
          data={products.filter((p: any) => p.category === "men's clothing")}
          renderItem={renderProduct}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <Text>Popular Women's Cloth</Text>
      <View style={styleHome.styleProduct}>
        <FlatList
          horizontal
          data={products.filter((p: any) => p.category === "women's clothing")}
          renderItem={renderProduct}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <Text>Popular Acessories</Text>
      <View style={styleHome.styleProduct}>
        <FlatList
          horizontal
          data={products.filter((p: any) => p.category === 'jewelery')}
          renderItem={renderProduct}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <Text>Popular Electronic</Text>
      <View style={styleHome.styleProduct}>
        <FlatList
          horizontal
          data={products.filter((p: any) => p.category === 'electronics')}
          renderItem={renderProduct}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </Container>
  );
};

export default Home;

const styleHome = StyleSheet.create({
  styleProduct: {
    flexDirection: 'row',
    marginLeft: 10,
  },
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
    backgroundColor: 'gray',
    borderRadius: 15,
    marginRight: 15,
    marginHorizontal: 10,
    marginVertical: 20,
    justifyContent: 'space-between',
  },
  titleProduct: {
    textAlign: 'center',
    margin: 10,
    fontSize: 12,
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
    borderRadius: 999,
    paddingVertical: 4,
    paddingHorizontal: 6,
    top: -10,
    right: -10,
  },
});
