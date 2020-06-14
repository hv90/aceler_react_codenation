import React from 'react';
import { ProductThumbnail, Load } from '../../components';
import { useSelector } from 'react-redux';
import './Catalog.css';

export default function Catalog() {
  const products = useSelector(state => state.catalog.products)
  return (
    <section className="products__container darkable">
      <div className="products__amount"><h4>{products.length} items</h4></div>
      <ul className="products_list">
        {products.length > 0 ?
          products.map(product =>
            <ProductThumbnail
              key={product.image}
              product={product}
            />
          )
          : <Load />}
      </ul>
      <div className="products__topButton">
        <a href="/#top" style={{ position: "fixed" }} className="topButton__link">
          <h2><i class="fa fa-angle-up"/></h2>
        </a>
      </div>
    </section >
  )
}
