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
import styled from 'styled-components/native';

const Container = styled.ScrollView``;
const Home = ({ navigation }) => {
  const [dataProduct, getDataProduct] = useState([]);
  const get = async () => {
    const res = await axios.get('https://fakestoreapi.com/products');
    getDataProduct(res.data);
  };

  useEffect(() => {
    get();
  }, []);

  const Item = ({ name, img, price }) => {
    return (
      <TouchableOpacity
        style={styleHome.popularRestaurant}
        onPress={() => navigation.navigate('Product Details')}>
        <Text style={styleHome.titleProduct}>{name}</Text>
        <Text>Price: {price}$</Text>
        <Image source={{ uri: img }} style={styleHome.imgProduct} />
      </TouchableOpacity>
    );
  };

  const renderMenClothing = ({ item }) => {
    return <Item name={item.title} img={item.image} price={item.price} />;
  };

  const renderWomenClothing = ({ item }) => {
    return <Item name={item.title} img={item.image} price={item.price} />;
  };

  const renderAcessories = ({ item }) => {
    return <Item name={item.title} img={item.image} price={item.price} />;
  };

  const renderElectronic = ({ item }) => {
    return <Item name={item.title} img={item.image} price={item.price} />;
  };

  return (
    <Container showsVerticalScrollIndicator={false}>
      <Text style={styleHome.titileHome}>Find Your Favorite Product</Text>
      <Text>Popular Men's Cloth</Text>
      <View style={{ flexDirection: 'row', marginLeft: 10 }}>
        <FlatList
          horizontal
          data={dataProduct.filter(p => p.category === "men's clothing")}
          renderItem={renderMenClothing}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <Text>Popular Women's Cloth</Text>
      <View style={{ flexDirection: 'row', marginLeft: 10 }}>
        <FlatList
          horizontal
          data={dataProduct.filter(p => p.category === "women's clothing")}
          renderItem={renderWomenClothing}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <Text>Popular Acessories</Text>
      <View style={{ flexDirection: 'row', marginLeft: 10 }}>
        <FlatList
          horizontal
          data={dataProduct.filter(p => p.category === 'jewelery')}
          renderItem={renderAcessories}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <Text>Popular Electronic</Text>
      <View style={{ flexDirection: 'row', marginLeft: 10 }}>
        <FlatList
          horizontal
          data={dataProduct.filter(p => p.category === 'electronics')}
          renderItem={renderElectronic}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </Container>
  );
};

export default Home;

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
});
