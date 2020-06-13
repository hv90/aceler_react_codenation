import React from 'react';
import { Product } from '../../components';
import { Redirect } from 'react-router-dom';
import './Products.css';

export default function Products({ style, products }) {
  const prodsToShow = products.filter(prod => prod.style === style);

  return (
    <section className="product__container darkable">
      {prodsToShow.length > 0 ?
        prodsToShow.map((prod, index) => 
          <Product key={index} product={prod} />)
        : <Redirect to="/" />
      }
    </section>
  )
}
