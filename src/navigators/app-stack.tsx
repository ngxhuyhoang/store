import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/home';
import Login from '@screens/login';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

export default AppStack;
