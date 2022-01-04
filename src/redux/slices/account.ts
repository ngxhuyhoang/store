import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userAdmin: {
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
    name: { firstname: 'Nguyễn', lastname: 'Chien' },
    phone: '098-429-8754',
  },
  text: 1,
  accout: {},
};

const settingAccount = (state, action) => {
  state.account = action.payload;
  console.log(state.account);
};

const updateAccountFirstname = (state, action) => {
  if (action.payload.firstname !== '') {
    state.account[0].name.firstname = action.payload.firstname;
  }
};
const updateAccountLastname = (state, action) => {
  if (action.payload.lastname !== '') {
    state.account[0].name.lastname = action.payload.lastname;
  }
};

const updateAccountEmail = (state, action) => {
  if (action.payload.email !== '') {
    state.account[0].email = action.payload.email;
  }
};

const updateAccountCity = (state, action) => {
  if (action.payload.city !== '') {
    state.account[0].address.city = action.payload.city;
  }
};

const updateAccountStreet = (state, action) => {
  if (action.payload.street !== '') {
    state.account[0].address.street = action.payload.street;
  }
};

const updateAccountPhone = (state, action) => {
  if (action.payload.phone !== '') {
    state.account[0].phone = action.payload.phone;
  }
};

const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    updateAccountFirstname,
    updateAccountLastname,
    updateAccountEmail,
    updateAccountCity,
    updateAccountStreet,
    updateAccountPhone,
    settingAccount,
  },
});

export const accountActions = accountSlice.actions;

export const accountReducer = accountSlice.reducer;
