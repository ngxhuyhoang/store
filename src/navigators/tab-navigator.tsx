import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RootStack from './root-stack';
import Account from '@screens/account';
import { Image } from 'react-native';
import { Icon } from '@core/icons';
import AllProductStack from './all-product-stack';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="RootStack"
        component={RootStack}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Image source={Icon.Product} style={{ tintColor: color }} />
          ),
          title: 'Home',
        }}
      />
      <Tab.Screen
        name="AllProductStack"
        component={AllProductStack}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Image source={Icon.Hand} style={{ tintColor: color }} />
          ),
          title: 'All product',
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarIcon: ({ color }) => (
            <Image source={Icon.Account} style={{ tintColor: color }} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
