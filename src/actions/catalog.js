import {CatalogConstants} from '../constants';

export const setCatalog = (payload) =>{
  return {
    type: CatalogConstants.SET_CATALOG,
    payload: payload
  }
};