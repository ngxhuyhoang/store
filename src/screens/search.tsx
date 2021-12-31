/* eslint-disable react-native/no-inline-styles */
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { Icon } from '@core/icons';
import axios from 'axios';

const Search = () => {
  const [products, getProducts] = useState<any>([]);
  const [searchText, getSearchText] = useState('');

  const getProductBySearch = async () => {
    const res = await axios.get('https://fakestoreapi.com/products?limit=50');
    getProducts(
      res.data.map(item => ({
        ...item,
        verification: item.title.toLowerCase().search(`${searchText}`),
      })),
    );
  };

  const Item = ({
    title,
    image,
    price,
  }: {
    title: string;
    image: string;
    price: number;
  }) => {
    return (
      <View style={styleCart.cartScreen}>
        <View style={styleCart.cartItem}>
          <View style={styleCart.cssFlexRow}>
            <Image source={{ uri: image }} style={styleCart.imgCart} />
            <View style={styleCart.cssMargin}>
              <Text style={styleCart.cssPadding}>{title}</Text>
              <Text>
                Price: <Text style={styleCart.cssColor53E88B}>{price}$</Text>
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  };

  const renderItem = ({
    item,
  }: {
    item: {
      title: string;
      image: string;
      price: number;
    };
  }) => {
    return <Item title={item.title} image={item.image} price={item.price} />;
  };

  useEffect(() => {
    getProducts(
      products.map(item => ({
        ...item,
        verification: item.title
          .toLowerCase()
          .search(`${searchText.toLowerCase()}`),
      })),
    );
  }, [searchText]);

  useEffect(() => {
    getProductBySearch();
  }, []);

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          alignContent: 'center',
          justifyContent: 'center',
          borderWidth: 1,
          borderRadius: 10,
          margin: 20,
          padding: 10,
        }}>
        <Image source={Icon.Search} style={{ flex: 1 }} />
        <TextInput
          placeholder="Tìm kiếm ..."
          style={{ flex: 14, marginLeft: 10 }}
          onChangeText={(text: string) => getSearchText(text)}
          value={searchText}
        />
      </View>
      <Text style={{ marginLeft: 10, fontWeight: 'bold' }}>
        Bạn đang tìm kiếm '{searchText}'
      </Text>
      <FlatList
        data={products.filter((p: any) => p.verification >= 0)}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={{ padding: 16 }}
        style={styleCart.styleFlatlist}
      />
    </View>
  );
};

export default Search;

const styleCart = StyleSheet.create({
  cssColor53E88B: {
    color: '#53E88B',
  },
  cssFlexRow: {
    flexDirection: 'row',
  },
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
  imgCart: { width: 60, height: 60 },
  cssMargin: {
    marginLeft: 10,
  },
  cssPadding: {
    paddingRight: 30,
  },
  cartScreen: {
    marginBottom: 10,
    backgroundColor: '#fefefe',
  },
  styleFlatlist: {
    marginBottom: 90,
  },
});
