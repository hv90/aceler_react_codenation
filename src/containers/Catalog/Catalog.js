import React from 'react';
import {ProductThumbnail, Load} from '../../components';

export default function Catalog({products}) {
  return (
    <section className="products">       
          {products.length > 0 ?
            products.map( product =>
                <ProductThumbnail 
                  key={product.image} 
                  product={product} 
                  products={products}
                />
            )
            : <Load/>}
    </section >
  )
}
