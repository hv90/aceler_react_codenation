import React from 'react';
import Product from '../../components/Product/Product';
import Load from '../../components/Load/Load';

export default function Catalog({products}) {
  return (
    <section className="products">       
          {products.length > 0 ?
            products.map( product =>
                product && <Product key={product.image} product={product} />
            )
            : <Load/>}
    </section >
  )
}
