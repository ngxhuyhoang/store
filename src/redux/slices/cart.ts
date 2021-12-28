import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
  totalPrice: 0,
};

const addToCart = (state, action) => {
  const existedProduct = state.cart.find(x => x.id === action.payload.id);

  if (existedProduct) {
    existedProduct.quantity += 1;
    return;
  }

  state.cart.push({ ...action.payload, quantity: 1 });
};

const quantityIncreament = (state, action) => {
  const existedProductIndex = state.cart.findIndex(
    x => x.id === action.payload.id,
  );

  if (existedProductIndex >= 0) {
    state.cart[existedProductIndex].quantity += 1;
    return;
  }
};

const quantityDecreament = (state, action) => {
  const existedProductIndex = state.cart.findIndex(
    x => x.id === action.payload.id,
  );

  if (existedProductIndex >= 0) {
    state.cart[existedProductIndex].quantity -= 1;
  }

  if (state.cart[existedProductIndex].quantity === 0) {
    console.log('ahhaha');
    state.cart = state.cart.filter(x => x.id !== action.payload.id);
  }
};

const caculateTotalPrice = state => {
  state.totalPrice = state.cart.reduce((previousValue, currentValue) => {
    return previousValue + currentValue.quantity * currentValue.price;
  }, 0);
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart,
    quantityIncreament,
    quantityDecreament,
    caculateTotalPrice,
  },
});

export const cartActions = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
