import React from 'react';
import { useSelector } from 'react-redux';
import { Products } from '../containers';

export default function ProductRoute({ props }) {
  const { style } = props;
  const products = useSelector(state => state.catalog.products);
  const prodsFromCart = useSelector(state => state.cart.products);

  return (
    <main className="products__route">
      <Products style={style}
        products={products}
        prodsCart={prodsFromCart}
      />
    </main>
  )
}
