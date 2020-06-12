import {CatalogConstants} from '../constants';
const {SET_CATALOG} = CatalogConstants;

const catalogInitialState = {
  products: [],
  amount: 0
}

const catalogReducer = (state = catalogInitialState, action) => {
  const {type, payload} = action;

  switch(type){
    case SET_CATALOG :
      return{
        ...state,
        products: payload,
        amount: payload.length
      }
    default:
      return{
        ...state
      }
  }
}

export default catalogReducer;