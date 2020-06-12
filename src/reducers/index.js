import { combineReducers } from 'redux';

import appReducer from './app';
import cartReducer from './cart';
import catalogReducer from './catalog';

const appReducers = combineReducers({
  app: appReducer,
  cart: cartReducer,
  catalog: catalogReducer
});

export default appReducers;