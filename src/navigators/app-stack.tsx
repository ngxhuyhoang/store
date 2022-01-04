import React from 'react';
import { useSelector } from 'react-redux';
import AuthStack from './auth-stack';
import ContainerStack from './container-stack';

const AppStack = () => {
  const isSignedIn = useSelector(state => state.auth.isSignedIn);

  return <>{isSignedIn ? <ContainerStack /> : <AuthStack />}</>;
};

export default AppStack;
