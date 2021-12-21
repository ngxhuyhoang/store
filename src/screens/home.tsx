import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View``;
const Home = () => {
  const [data, getData] = useState([]);
  const get = async () => {
    const res = await axios.get('https://fakestoreapi.com/products');
    getData(res.data);
  };

  useEffect(() => {
    get();
  }, []);

  const RenderRestaurant = name => {
    return (
      <TouchableOpacity style={styleHome.popularRestaurant}>
        <Text>{name}</Text>
      </TouchableOpacity>
    );
  };

  const renderPopularRestaurant = ({ item, index }) => {
    <RenderRestaurant key={index} name={item.title} />;
  };

  return (
    <Container>
      <Text style={styleHome.titileHome}>Find Your Favorite Clothes</Text>
      <Text>Popular Restaurant</Text>
      <View style={{ flexDirection: 'row', marginLeft: 10 }}>
        <FlatList
          style={{ flex: 1, borderWidth: 1 }}
          data={data}
          renderItem={renderPopularRestaurant}
        />
      </View>
      <Text>Popular Menu</Text>
      <View style={{ flexDirection: 'row' }}>
        <View>
          <TouchableOpacity
            style={{
              width: 323,
              height: 87,
              marginVertical: 10,
              marginTop: 10,
              marginHorizontal: 20,
              backgroundColor: 'blue',
              borderRadius: 15,
            }}></TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 323,
              height: 87,
              marginVertical: 10,
              marginTop: 10,
              marginHorizontal: 20,
              backgroundColor: 'blue',
              borderRadius: 15,
            }}></TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 323,
              height: 87,
              marginVertical: 10,
              marginTop: 10,
              marginHorizontal: 20,
              backgroundColor: 'blue',
              borderRadius: 15,
            }}></TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={{
              width: 323,
              height: 87,
              marginVertical: 10,
              marginTop: 10,
              marginHorizontal: 20,
              backgroundColor: 'blue',
              borderRadius: 15,
            }}></TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 323,
              height: 87,
              marginVertical: 10,
              marginTop: 10,
              marginHorizontal: 20,
              backgroundColor: 'blue',
              borderRadius: 15,
            }}></TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 323,
              height: 87,
              marginVertical: 10,
              marginTop: 10,
              marginHorizontal: 20,
              backgroundColor: 'blue',
              borderRadius: 15,
            }}></TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          position: 'absolute',
          borderWidth: 1,
          margin: 20,
          marginTop: 650,
          borderColor: 'red',
          width: 355,
          height: 74,
          borderRadius: 20,
        }}>
        <Text></Text>
      </View>
    </Container>
  );
};

export default Home;

const styleHome = StyleSheet.create({
  titileHome: {
    marginLeft: 31,
    marginTop: 30,
    marginright: 111,
    fontWeight: 'bold',
    fontSize: 29,
  },
  popularRestaurant: {
    width: 147,
    height: 184,
    backgroundColor: 'gray',
    borderRadius: 15,
    marginRight: 15,
    marginHorizontal: 10,
    marginVertical: 20,
  },
});
