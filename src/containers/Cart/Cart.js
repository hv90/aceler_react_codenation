import React from 'react';
import {ProductsCart} from '../../components';

export default function Cart({cart}) {
  
  return (
    <section className="cart__container darkable">
      {cart.products.map(prod => 
        <ProductsCart key={`${prod.product.image}`} 
                 product={prod.product}
                 sizes={prod.sizes}
        />)}
    </section>
  )
}
