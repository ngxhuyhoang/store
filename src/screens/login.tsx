import { Icon } from '@core/icons';
import { AppImage } from '@core/images';
import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View``;

const Login = () => {
  return (
    <Container>
      <Image source={AppImage.Logo} style={styles.logoImage} />
      <Text style={styles.logoText}>FoodNinja</Text>
      <Text style={styles.subText}>Deliever Favorite Food</Text>
      <Text style={styles.titleScreen}>Login To Your Account</Text>
      <TextInput style={styles.inputText} placeholder=" Account or email" />
      <TextInput style={styles.inputText} placeholder=" Password" />
      <Text style={styles.subText2}>Or Continue With</Text>
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Image source={Icon.Google} style={{ marginLeft: 25 }} />
        <Text style={{ alignItems: 'center', marginLeft: 10 }}>Google</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginButton}>
        <Text style={{ alignItems: 'center', marginTop: 20 }}>LOGIN</Text>
      </TouchableOpacity>
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
    borderRadius: 15,
  },
});
