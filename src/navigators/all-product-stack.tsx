import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AllProduct from '@screens/allproduct';

const Stack = createNativeStackNavigator();

const AllProductStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AllProduct"
        component={AllProduct}
        options={{ title: 'Tất cả sản phẩm' }}
      />
    </Stack.Navigator>
  );
};

export default AllProductStack;
