import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isSignedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    onLogin: (state, action) => {
      if (
        action.payload.username === 'Conlilo' &&
        action.payload.password === '123456'
      ) {
        state.isSignedIn = true;
      }
    },
  },
});

export const authActions = authSlice.actions;

export const authReducer = authSlice.reducer;
