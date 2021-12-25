import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cart from '@screens/cart';
import Home from '@screens/home';
import ProductDetails from '@screens/productdetails';

const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="ProductDetails" component={ProductDetails} />
    </Stack.Navigator>
  );
};

export default RootStack;
