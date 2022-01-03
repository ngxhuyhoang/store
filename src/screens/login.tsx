import { AppImage } from '@core/images';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import styled from 'styled-components/native';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '@redux/slices/auth';

const Container = styled.View``;

const Login = () => {
  const dispatch = useDispatch();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [allAcount, setAllAcount] = useState([]);

  const userAdmin = useSelector(state => state.account.userAdmin);
  const getAccount = async () => {
    const res = await axios.get('https://fakestoreapi.com/users');
    setAllAcount(res.data);
  };
  useEffect(() => {
    getAccount();
  }, []);

  const handleVerification = [...allAcount, userAdmin].filter(
    (login: { username: string; password: string; email: string }) => {
      return (
        (login.username === username || login.email === username) &&
        login.password === password
      );
    },
  );

  const createAlertLogin = () =>
    Alert.alert('Login failed', 'username or password was wrong', [
      {
        text: 'Ok',
      },
    ]);

  const Verification = (condition: string | any[]) => {
    if (username === '' || password === '') {
      Alert.alert(
        'Username and Password can not be empty',
        'Please try again',
        [{ text: 'Confirm' }],
      );
    } else if (condition.length !== 1) {
      createAlertLogin();
    } else {
      dispatch(authActions.onLogin({ login: 'login-success', username }));
    }
  };

  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image source={AppImage.Logo} style={styles.logoImage} />
        <Text style={styles.logoText}>FoodNinja</Text>
        <Text style={styles.subText}>Deliever Favorite Food</Text>
        <Text style={styles.titleScreen}>Login To Your Account</Text>
        <TextInput
          onChangeText={text => setUsername(text)}
          style={styles.inputText}
          placeholder=" Account or email "
        />
        <TextInput
          onChangeText={text => setPassword(text)}
          secureTextEntry={true}
          style={styles.inputText}
          placeholder=" Password"
        />
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => Verification(handleVerification)}>
          <Text style={styles.buttunLogin}>LOGIN</Text>
        </TouchableOpacity>
      </ScrollView>
    </Container>
  );
};

export default Login;

const styles = StyleSheet.create({
  buttunLogin: {
    alignItems: 'center',
    marginTop: 20,
  },
  logoImage: {
    marginTop: 30,
    alignSelf: 'center',
    width: 175,
    height: 139,
  },
  logoText: {
    alignSelf: 'center',
    color: '#53E88B',
    fontSize: 40,
  },
  subText: {
    alignSelf: 'center',
    fontSize: 13,
  },
  titleScreen: {
    marginTop: 60,
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  inputText: {
    borderWidth: 1,
    borderRadius: 15,
    width: 325,
    height: 57,
    alignSelf: 'center',
    marginTop: 12,
    borderColor: 'gray',
  },
  loginButton: {
    alignItems: 'center',
    backgroundColor: '#53E88B',
    width: 141,
    height: 57,
    alignSelf: 'center',
    marginTop: 26,
    marginBottom: 30,
    borderRadius: 15,
  },
});
