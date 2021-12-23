import { Icon } from '@core/icons';
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

const Container = styled.View``;

const Login = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [allAcount, setAllAcount] = useState([]);
  const getAccount = async () => {
    const res = await axios.get('https://fakestoreapi.com/users');
    setAllAcount(res.data);
    console.log(res.data);
  };
  useEffect(() => {
    getAccount();
  }, []);

  const accountVerification = allAcount.filter(
    (login: { username: string; password: string }) => {
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
        onPress: () => {
          console.log('oke pressed');
        },
      },
    ]);

  const Verification = condition => {
    if (username === '' || password === '') {
      Alert.alert(
        'Username and Password can not be empty',
        'Please try again',
        [
          {
            text: 'Congfirm',
            onPress: () => {
              console.log('confirm pressed');
            },
          },
        ],
      );
    } else if (condition.length !== 1) {
      console.log('login fail');
      createAlertLogin();
    } else {
      console.log('success');
      navigation.navigate('Home');
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
        <Text style={styles.subText2}>Or Continue With</Text>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Image source={Icon.Google} style={{ marginLeft: 25 }} />
          <Text style={{ alignItems: 'center', marginLeft: 10 }}>Google</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => Verification(accountVerification)}>
          <Text style={{ alignItems: 'center', marginTop: 20 }}>LOGIN</Text>
        </TouchableOpacity>
      </ScrollView>
    </Container>
  );
};

export default Login;

const styles = StyleSheet.create({
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
  subText2: {
    marginVertical: 20,
    alignSelf: 'center',
    fontSize: 12,
    fontWeight: 'bold',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 15,
    width: 152,
    height: 57,
    alignSelf: 'center',
    flexDirection: 'row',
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
