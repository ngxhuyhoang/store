import { accountReducer } from '@redux/slices/account';
import { authReducer } from '@redux/slices/auth';
import { cartReducer } from '@redux/slices/cart';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
  account: accountReducer,
});

export default rootReducer;
