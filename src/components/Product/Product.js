import React from 'react';
import not_found from '../../assets/image_not_found.png';
import { useDispatch } from 'react-redux';
import { newProduct } from '../../actions';
import { Link } from 'react-router-dom';
import './Product.css';

export default function Product({ product }) {
  const dispatch = useDispatch();

  const handleClick = () => dispatch(newProduct({ productToCart: product }));

  return (
    <div className="product">
      <div className="product__img">
        {product.image ?
          <img src={`${product.image}`} alt={`${product.name}`} />
          : <img src={`${not_found}`} alt={`${product.name}`} />
        }
      </div>

      <div className="product__info">
        <div className="product__name"><h2>{product.name}</h2></div>

        <div className="product__prices">
          {product.on_sale ?
            <div className="product__onsale">
              <ul className="onsale__list">
                <li className="product__actualprice"><h3>{product.actual_price}</h3></li>
                <li className="product__regprice">{product.regular_price}</li>
                <li className="product__discount">
                  <i class="fas fa-fire" />
                  -{product.discount_percentage}
                </li>
              </ul>
            </div>
            : <div className="product__actualprice"><h3>{product.actual_price}</h3></div>
          }

          {product.installments ?
            <div className="product__installments">{product.installments}</div>
            : null
          }
        </div>

        <div className="product__color"><h4>{product.color} - {product.code_color}</h4></div>

        <div className="product__sizes">
          <h3>Sizes Available</h3>
          <ul className="sizes__list">
            {product.sizes.map((size, index) => size.available ?
              <li className="sizes__item" key={index}>{size.size}</li>
              : null)
            }
          </ul>
        </div>


        <div className="product__button">
          <Link to="/cart">
            <button onClick={handleClick}>

              Add to <i className="fas fa-shopping-cart" />

            </button>
          </Link>
        </div>

      </div>
    </div>
  )
}
