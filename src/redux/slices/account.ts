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

const updateAccount = (state, action) => {
  state.userAdmin.name.firstname = action.payload.firstname;
  state.userAdmin.name.lastname = action.payload.lastname;
  state.userAdmin.email = action.payload.email;
  state.userAdmin.address.city = action.payload.city;
  state.userAdmin.address.street = action.payload.street;
  state.userAdmin.phone = action.payload.phone;
};

const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: { updateAccount },
});

export const accountActions = accountSlice.actions;

export const accountReducer = accountSlice.reducer;
