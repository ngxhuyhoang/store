import React from 'react';
import { useSelector } from 'react-redux';
import AuthStack from './auth-stack';
import TabNavigator from './tab-navigator';

const AppStack = () => {
  const isSignedIn = useSelector(state => state.auth.isSignedIn);

  return <>{isSignedIn ? <TabNavigator /> : <AuthStack />}</>;
};

export default AppStack;
