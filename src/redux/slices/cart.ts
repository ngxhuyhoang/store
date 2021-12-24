import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};

const addToCart = (state, action) => {
  const existedProduct = state.cart.find(x => x.id === action.payload.id);

  if (existedProduct) {
    existedProduct.quantity += 1;
    return;
  }

  state.cart.push({ ...action.payload, quantity: 1 });
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart,
  },
});

export const cartActions = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
