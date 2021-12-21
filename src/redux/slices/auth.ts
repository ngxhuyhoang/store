import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
});

export const authActions = authSlice.actions;

export const authReducer = authSlice.reducer;
