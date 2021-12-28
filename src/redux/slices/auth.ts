import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isSignedIn: false,
  username: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    onLogin: (state, action) => {
      if (action.payload.login === 'login success') {
        state.isSignedIn = true;
        state.username = action.payload.username;
      }
    },
    onLogout: (state, action) => {
      if (action.payload === 'user logout') {
        state.isSignedIn = false;
      }
    },
  },
});

export const authActions = authSlice.actions;

export const authReducer = authSlice.reducer;
