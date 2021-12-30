import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RootStack from './root-stack';
import Account from '@screens/account';
import { Image } from 'react-native';
import { Icon } from '@core/icons';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Store"
        component={RootStack}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color }) => (
            <Image source={Icon.Product} style={{ tintColor: color }} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Image source={Icon.Account} style={{ tintColor: color }} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
