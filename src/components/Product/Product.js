import React from 'react';
import not_found from '../../assets/image_not_found.png';
import {useDispatch} from 'react-redux';
import {newProduct} from '../../actions';
import {Link} from 'react-router-dom';

export default function Product({ product}) {
  const dispatch = useDispatch();

  const handleClick = () => dispatch(newProduct({productToCart: product}));

  return (
    <div className="product">
      <div className="product__bordertop">
        k
      </div>

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

        <div className="product__sizes">
          <h3>Sizes Available</h3>
          {product.sizes.map((size, index) => size.available ?
            <span key={index}>{size.size}&nbsp;&nbsp;</span>
            : null)
          }
        </div>

        <div className="product__button">
          <button onClick={handleClick}>
            <Link to="/cart">
              Add to <i className="fas fa-shopping-cart" />
            </Link>
          </button>
        </div>        
        <br /><br /><br /><br /><br />
      </div>
    </div>)
}
