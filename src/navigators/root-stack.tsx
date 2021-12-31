import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cart from '@screens/cart';
import Home from '@screens/home';
import ProductDetails from '@screens/productdetails';
import Search from '@screens/search';

const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ title: 'Trang chủ' }}
      />
      <Stack.Screen
        name="Cart"
        component={Cart}
        options={{ title: 'Giỏ hàng' }}
      />
      <Stack.Screen
        name="ProductDetails"
        component={ProductDetails}
        options={{ title: 'Chi tiết sản phẩm' }}
      />
      <Stack.Screen
        name="Search"
        component={Search}
        options={{ title: 'Tìm kiếm' }}
      />
    </Stack.Navigator>
  );
};

export default RootStack;
