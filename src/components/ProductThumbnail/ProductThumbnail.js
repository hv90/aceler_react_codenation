import React from 'react';
import { Link } from 'react-router-dom';
import './ProductThumbnail.css';
import not_found from '../../assets/image_not_found.png';

export default function ProductThumbnail({ product }) {
  return (
    <li className="productThumbnail">
      <Link to={{
                  pathname: `/product/${product.style}`,
                  style: `${product.style}`
                }}
      >
        {product.on_sale ?
          <div className="productThumbnail__discount">-{product.discount_percentage}</div>
          : null
        }

        <div className="productThumbnail__img">
          {product.image ?
            <img src={`${product.image}`} alt={`${product.name}`} />
            : <img src={`${not_found}`} alt={`${product.name}`} />
          }
        </div>

        <div className="productThumbnail__info">
          <div className="productThumbnail__name">{product.name}</div>

          {product.on_sale ?
            <div className="productThumbnail__onsale">
              <span className="productThumbnail__regprice">{product.regular_price}</span>&nbsp;&nbsp;
              <span className="productThumbnail__actualprice">{product.actual_price}</span>
            </div>
            : <div className="productThumbnail__actualprice">{product.actual_price}</div>
          }
        </div>
      </Link>

    </li>
  )
}
