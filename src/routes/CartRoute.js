import React from 'react';
import {useSelector} from 'react-redux';
import {Cart} from '../containers';

export default function CartRoute() {
  const cart = useSelector(state => state.cart);
  
  return (
    <main className="cart__route">
      {cart.products.length > 0 ? 
        <Cart cart={cart}/>
        : <div style={{
                  position: "absolute",
                  display: "flex",
                  marginTop: "270px",
                  width:" 100%",
                  justifyContent: "center"
              }}
                className="noProd darkable">
                <h3 >No Products Selected :(</h3>
          </div>
      }      
    </main>
  )
}
