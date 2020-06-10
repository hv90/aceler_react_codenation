import { combineReducers } from 'redux';

import appReducer from './app';
import cartReducer from './cart';

const appReducers = combineReducers({
  app: appReducer,
  cart: cartReducer
});

export default appReducers;