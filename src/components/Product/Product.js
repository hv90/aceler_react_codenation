import React from 'react';
import './Product.css';
import not_found from '../../assets/image_not_found.png';

export default function Product({ product }) {
  console.log(product);
  return (
    <article className="product">
      <div className="product__bordertop">
        k
      </div>

      <div className="product__img">
        {product.image ?
          <img src={`${product.image}`} alt={`${product.name}`} />
          : <img src={`${not_found}`} alt={`${product.name}`} />
        }
      </div>

      <div className="product__info">
        <h4>{product.name}</h4>

        {product.on_sale ?
          <div className="product__onsale">
            <span className="product__regprice">{product.regular_price} &nbsp;&nbsp;</span>
            <span className="product_actualprice">{product.actual_price}</span>
          </div>
          :<div className="product_actualprice">{product.actual_price}</div>
          
        }
      </div>



      <div className="product__borderbottom">
        k
      </div>
    </article>
  )
}
