import { authReducer } from '@redux/slices/auth';
import { cartReducer } from '@redux/slices/cart';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
});

export default rootReducer;
