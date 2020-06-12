import { CartConstants } from '../constants';
const { ADD_PRODUCT, SUBTRACT_PRODUCT, DEL_PRODUCT, NEW_PRODUCT } = CartConstants;

const cartInitialState = {
  products: [],
  amount: 0
}

const cartReducer = (state = cartInitialState, action) => {
  const { type, payload } = action;
  let { products, amount } = state;
  let value = { ...state }

  const updateAmount = () =>{
    let newAmount = 0;
    for (let i = 0; i < products.length; i++)
      newAmount += products[i].sizes.length;
    return newAmount;
  }

  switch (type) {
    case ADD_PRODUCT:
      const { codeColor_add, size_add } = payload;
      if (size_add === "") return value;

      for (let i = 0; i < products.length; i++) {
        if (products[i].code_color === codeColor_add) {
          products[i].sizes.push(size_add);
          value = { ...state, amount: amount + 1 };
          return value;
        }
      }

      value = { ...state, amount: amount + 1 };
      return value;

    case SUBTRACT_PRODUCT:
      const { codeColor_subtract, size_subtract } = payload;

      if (size_subtract === "") return value;

      const checkCodeColor = (prod, codeColor_subtract, size_subtract) => {
        if (prod.code_color === codeColor_subtract) {
          let index = prod.sizes.findIndex(s => s === size_subtract);

          if (index >= 0) prod.sizes.splice(index, 1);
        }
      }

      for (let i = 0; i < products.length; i++)
        checkCodeColor(products[i], codeColor_subtract, size_subtract);

      value = {
        ...state,
        amount: updateAmount()
      }

      return value;


    case DEL_PRODUCT:
      const { codeColor_del } = payload;
      let index = products.findIndex(prod => prod.code_color === codeColor_del);
      
      if (index >= 0) products.splice(index, 1);

      value = {
        ...state,
        amount: updateAmount()
      };

      return value;

    case NEW_PRODUCT:
      const { productToCart } = payload;

      for (let i = 0; i < products.length; i++) {
        if (products[i].code_color === productToCart.code_color)
          return { ...state };
      }

      products.push(
        {
          code_color: productToCart.code_color,
          sizes: [],
          product: productToCart
        }
      );

      return { ...state };


    default:
      return state
  }
}

export default cartReducer;