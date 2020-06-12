import React from 'react';
import { ProductThumbnail, Load } from '../../components';
import { useSelector } from 'react-redux';
import './Catalog.css';

export default function Catalog() {
  const products = useSelector(state => state.catalog.products)
  return (
    <section className="products__container darkable">
      <div className="products__amount">{products.length} items</div>
      {products.length > 0 ?
        products.map(product =>
          <ProductThumbnail
            key={product.image}
            product={product}
          />
        )
        : <Load />}
    </section >
  )
}
