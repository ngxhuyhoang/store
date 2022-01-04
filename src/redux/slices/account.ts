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
};
const updateAccountFirstname = (state, action) => {
  if (action.payload.firstname !== '') {
    state.userAdmin.name.firstname = action.payload.firstname;
  }
};
const updateAccountLastname = (state, action) => {
  if (action.payload.lastname !== '') {
    state.userAdmin.name.lastname = action.payload.lastname;
  }
};

const updateAccountEmail = (state, action) => {
  if (action.payload.email !== '') {
    state.userAdmin.email = action.payload.email;
  }
};

const updateAccountCity = (state, action) => {
  if (action.payload.city !== '') {
    state.userAdmin.address.city = action.payload.city;
  }
};

const updateAccountStreet = (state, action) => {
  if (action.payload.street !== '') {
    state.userAdmin.address.street = action.payload.street;
  }
};

const updateAccountPhone = (state, action) => {
  if (action.payload.phone !== '') {
    state.userAdmin.phone = action.payload.phone;
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
  },
});

export const accountActions = accountSlice.actions;

export const accountReducer = accountSlice.reducer;
