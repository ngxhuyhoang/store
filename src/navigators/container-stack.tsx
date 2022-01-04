import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cart from '@screens/cart';
import ProductDetails from '@screens/productdetails';
import Search from '@screens/search';
import TabNavigator from './tab-navigator';

const Stack = createNativeStackNavigator();

const ContainerStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TabNavigator"
        component={TabNavigator}
        options={{
          headerShown: false,
        }}
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

export default ContainerStack;
