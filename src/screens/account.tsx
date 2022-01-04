import { AppImage } from '@core/images';
import { accountActions } from '@redux/slices/account';
import { authActions } from '@redux/slices/auth';
import React, { useState } from 'react';
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Modal,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
const Account = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [phone, setPhone] = useState('');
  const dispatch = useDispatch();

  const userProfile = useSelector(state => state.account.account)[0];

  const btnLogout = () => {
    Alert.alert('Logout', 'Are you sure to logout?', [
      {
        text: 'Logout',
        onPress: () => dispatch(authActions.onLogout('user-logout')),
      },
      { text: 'Cancel' },
    ]);
  };

  return (
    <SafeAreaView style={styleAccountScreen.accountStyle}>
      <View style={styleAccountScreen.cssFlexRow}>
        <Image source={AppImage.Profile} />
        <View style={styleAccountScreen.cssFlexColumn}>
          <Text style={styleAccountScreen.nameInfo}>Name: </Text>
          <Text style={styleAccountScreen.userNameInfo}>
            {`${userProfile?.name?.firstname} ${userProfile?.name?.lastname}`}
          </Text>
        </View>
      </View>

      <Text style={styleAccountScreen.titleInfo}>Email:</Text>
      <Text style={styleAccountScreen.userInfo}>{userProfile?.email}</Text>
      <Text style={styleAccountScreen.titleInfo}>Address:</Text>
      <Text style={styleAccountScreen.captucalizeCss}>
        {userProfile?.address?.street} street, {userProfile?.address?.city}
      </Text>
      <Text style={styleAccountScreen.titleInfo}>Phone: </Text>
      <Text style={styleAccountScreen.userInfo}>{userProfile?.phone}</Text>
      <View style={styles.css1}>
        <TouchableOpacity
          style={styleAccountScreen.btnEdit}
          onPress={() => setModalVisible(true)}>
          <Text>EDIT</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styleAccountScreen.btnLogout}
          onPress={btnLogout}>
          <Text>LOGOUT</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View
                style={
                  (styleAccountScreen.cssFlexRow, styleAccountScreen.editCss)
                }>
                <Text>First name: </Text>
                <TextInput
                  onChangeText={text => setFirstName(text)}
                  defaultValue={userProfile?.name?.firstname}
                  style={styles.inputText}
                />
              </View>
              <View
                style={
                  (styleAccountScreen.cssFlexRow, styleAccountScreen.editCss)
                }>
                <Text>Last name: </Text>
                <TextInput
                  onChangeText={text => setLastName(text)}
                  defaultValue={userProfile?.name?.lastname}
                  style={styles.inputText}
                />
              </View>
              <View
                style={
                  (styleAccountScreen.cssFlexRow, styleAccountScreen.editCss)
                }>
                <Text>Email:</Text>
                <TextInput
                  onChangeText={text => setEmail(text)}
                  defaultValue={userProfile?.email}
                  style={styles.inputText}
                />
              </View>
              <View
                style={
                  (styleAccountScreen.cssFlexRow, styleAccountScreen.editCss)
                }>
                <Text>Street:</Text>
                <TextInput
                  onChangeText={text => setStreet(text)}
                  defaultValue={userProfile?.address?.street}
                  style={styles.inputText}
                />
              </View>
              <View
                style={
                  (styleAccountScreen.cssFlexRow, styleAccountScreen.editCss)
                }>
                <Text>City:</Text>
                <TextInput
                  onChangeText={text => setCity(text)}
                  defaultValue={userProfile?.address?.city}
                  style={styles.inputText}
                />
              </View>
              <View
                style={
                  (styleAccountScreen.cssFlexRow, styleAccountScreen.editCss)
                }>
                <Text>Phone: </Text>
                <TextInput
                  onChangeText={text => setPhone(text)}
                  defaultValue={userProfile?.phone}
                  style={styles.inputText}
                />
              </View>

              <View
                // eslint-disable-next-line react-native/no-inline-styles
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: 250,
                }}>
                <TouchableOpacity
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => {
                    setModalVisible(!modalVisible);
                    dispatch(
                      accountActions.updateAccountLastname({ lastname }),
                    );
                    dispatch(
                      accountActions.updateAccountFirstname({ firstname }),
                    );
                    dispatch(accountActions.updateAccountEmail({ email }));
                    dispatch(accountActions.updateAccountCity({ city }));
                    dispatch(accountActions.updateAccountStreet({ street }));
                    dispatch(accountActions.updateAccountPhone({ phone }));
                  }}>
                  <Text style={styles.textStyle}>Save</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => {
                    setModalVisible(!modalVisible);
                    setFirstName(userProfile.name.firstname);
                    setLastName(userProfile.name.lastname);
                    setCity(userProfile.address.city);
                    setStreet(userProfile.address.street);
                    setEmail(userProfile.email);
                    setPhone(userProfile.phone);
                  }}>
                  <Text style={styles.textStyle}>Cancel</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
};
export default Account;

const styles = StyleSheet.create({
  css1: { flexDirection: 'row', justifyContent: 'space-between' },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  inputText: {
    borderWidth: 0,
    width: 150,
    height: 20,
    backgroundColor: '#c4c4c4',
  },
});

const styleAccountScreen = StyleSheet.create({
  cssFlexRow: {
    flexDirection: 'row',
  },
  cssFlexColumn: {
    flexDirection: 'column',
  },
  btnLogout: {
    backgroundColor: 'red',
    marginTop: 20,
    width: 100,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 18,
  },
  btnEdit: {
    backgroundColor: 'yellow',
    marginTop: 20,
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
  titleInfo: { fontSize: 30, marginTop: 30 },
  userInfo: { marginLeft: 14, fontSize: 24 },
  nameInfo: { marginLeft: 10, fontSize: 30 },
  captucalizeCss: { textTransform: 'capitalize', marginLeft: 14, fontSize: 24 },
  userNameInfo: {
    marginLeft: 10,
    fontSize: 24,
    textTransform: 'capitalize',
  },
  editCss: {
    flexDirection: 'row',
    margin: 10,
    justifyContent: 'space-between',
  },
});
