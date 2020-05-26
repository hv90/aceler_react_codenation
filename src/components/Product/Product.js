import React from 'react';
import './Product.css';
import not_found from '../../assets/image_not_found.png';

export default function Product({ product }) {
  console.log(product);
  return (
    <article className="product">
      {product.on_sale ? 
        <div className="product__discount">-{product.discount_percentage}</div>
        : null
      }
      <div className="product__img">
        {product.image ?
          <img src={`${product.image}`} alt={`${product.name}`} />
          : <img src={`${not_found}`} alt={`${product.name}`} />
        }
      </div>

      <div className="product__info">
        <div className="product__name">{product.name}</div>

        {product.on_sale ?
          <div className="product__onsale">
            <span className="product__regprice">{product.regular_price}</span>&nbsp;&nbsp;
            <span className="product__actualprice">{product.actual_price}</span>
          </div>
          : <div className="product__actualprice">{product.actual_price}</div>
        }
      </div>



      <div className="product__borderbottom">
        k
      </div>
    </article>
  )
}
