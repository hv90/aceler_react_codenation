import { CartConstants } from '../constants';
const { ADD_PRODUCT, DEL_PRODUCT } = CartConstants;

const cartInitialState = {
  products: [],
  amount: 0
}

const cartReducer = (state = cartInitialState, action) => {
  const { type, payload } = action;
  let { products, amount } = state;
  let value = { ...state }

  switch (type) {
    case ADD_PRODUCT:
      const { codeColor_add, size_add, product_add } = payload;
      if (size_add === "") return value;

      for (let i = 0; i < products.length; i++) {
        if (products[i].code_color === codeColor_add) {
          products[i].sizes.push(size_add);
          value = { ...state, amount: amount + 1 };
          return value;
        }
      }

      products.push({ code_color: codeColor_add, sizes: [size_add], product: product_add });
      value = { ...state, amount: amount + 1 };
      return value;

    case DEL_PRODUCT:
       const { codeColor_del, size_del } = payload;

      if (size_del === "") return value;

      const checkCodeColor = (prod, codeColor_del, size_del) => {
        if (prod.code_color === codeColor_del) {
          let index = prod.sizes.findIndex(s => s === size_del);

          if(index >= 0 ) prod.sizes.splice(index, 1);

          amount-1 < 0 ? value = { ...state, amount: amount } 
                      : value ={ ...state, amount: amount-1 }  ;
        }
      } 

      for (let i = 0; i < products.length; i++)
        checkCodeColor(products[i], codeColor_del, size_del);

      return value;

    default:
      return state
  }
}

export default cartReducer;