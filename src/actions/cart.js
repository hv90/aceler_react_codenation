import { CartConstants } from '../constants';

export const addProduct = (payload) => {
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

export const newProduct = (payload) => {
  return {
    type: CartConstants.NEW_PRODUCT,
    payload: payload
  }
};

export const subtractProduct = (payload) =>{
  return {
    type: CartConstants.SUBTRACT_PRODUCT,
    payload: payload
  }
}