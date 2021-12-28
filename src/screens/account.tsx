import { authActions } from '@redux/slices/auth';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
const Account = () => {
  const stateUsername = useSelector(state => state.auth.username);
  const [account, getAccount] = useState([]);
  const dispatch = useDispatch();
  const getAccountAsync = async () => {
    const res = await axios.get('https://fakestoreapi.com/users');
    getAccount(res.data);
  };

  const userAdmin = {
    address: {
      geolocation: { lat: '-37.3159', long: '81.1496' },
      city: 'Hà Nội',
      street: 'Yên Duyên',
      number: 7682,
      zipcode: '10000',
    },
    id: 21,
    email: 'conlilo273@gmail.com',
    username: 'Conlilo',
    password: '123456',
    name: { firstname: 'Nguyễn', lastname: 'Chiến' },
    phone: '098-429-8754',
  };
  const userProfile = [...account, userAdmin].filter(
    x => x.username === stateUsername || x.email === stateUsername,
  )[0];

  const btnLogout = () => {
    Alert.alert('Logout', 'Are you sure to logout?', [
      {
        text: 'Logout',
        onPress: () => dispatch(authActions.onLogout('user logout')),
      },
      { text: 'Cancel' },
    ]);
  };

  const capitalize = (s: any) => {
    if (typeof s !== 'string') {
      return '';
    }
    return s.charAt(0).toUpperCase() + s.slice(1);
  };

  useEffect(() => {
    getAccountAsync();
  }, []);

  return (
    <SafeAreaView style={styleAccountScreen.accountStyle}>
      <Text>
        Name : {capitalize(userProfile?.name?.firstname)}{' '}
        {capitalize(userProfile?.name?.lastname)}
      </Text>
      <Text>Email: {userProfile?.email}</Text>
      <Text>
        Address: {userProfile?.address?.street} street,
        {userProfile?.address?.city}
      </Text>
      <Text>Phone: {userProfile?.phone}</Text>

      <TouchableOpacity
        style={styleAccountScreen.btnLogout}
        onPress={btnLogout}>
        <Text>LOGOUT</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
export default Account;

const styleAccountScreen = StyleSheet.create({
  btnLogout: {
    backgroundColor: 'red',
    marginTop: 20,
    marginLeft: 250,
    width: 100,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 18,
  },
  accountStyle: {
    paddingHorizontal: 16,
    justifyContent: 'space-between',
    height: 300,
  },
});
