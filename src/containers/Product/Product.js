import React from 'react';
import { Product } from '../../components';
import { Redirect } from 'react-router-dom';

export default function Prod({ props }) {
  const { products, style } = props;

  const getElementsByStyle = () => {
    if (products)
      return products.filter(prod => prod.style === style)
  }

  const product = getElementsByStyle();

  const prod_container = () => {
    if (product) {
      return (<section className="product__container">
        <article>
          {product.length > 1 ?
            product.map(prod => <Product key={prod.image} product={prod} />)
            : <Product product={product[0]} />
          }
        </article>


      </section>)
    }
    return <Redirect to="/" />
  }

  return (
    <>{prod_container()}</>
  )
}
