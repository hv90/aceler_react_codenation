import {CartConstants} from '../constants';

export const addProduct = (payload) =>{//console.log(payload)
  return {
    type: CartConstants.ADD_PRODUCT,
    payload: payload
  }
};

export const delProduct = (payload) => {
  return {
    type: CartConstants.DEL_PRODUCT,
    payload: payload
  }
};