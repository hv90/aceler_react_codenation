import React from 'react';
import {Product} from '../../components';

export default function Prod({props}) {
  const {products, style} = props;
  
  const getElementsByStyle = () =>{
    if(products)
    return products.filter(prod => prod.style === style)
  }

  const product = getElementsByStyle();

  return (
    <section className="product">
      {product.length > 1 ?
        product.map(prod => <Product product={prod}/>)
        :<Product product={product[0]}/>
      }
    </section>
  )
}
