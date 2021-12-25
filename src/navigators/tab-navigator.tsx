import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RootStack from './root-stack';
import Account from '@screens/account';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Store"
        component={RootStack}
        options={{ headerShown: false }}
      />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
}
