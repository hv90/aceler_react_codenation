import React from 'react';
import not_found from '../../assets/image_not_found.png';
import { useDispatch } from 'react-redux';
import { addProduct, delProduct } from '../../actions'

export default function Product({ product }) {
  const dispatch = useDispatch();
  let size = "";

  const handleClickSize = (e, s = "") => {
    e.preventDefault();
    size = s;
  }

  const handleClickAdd = () => {
    const { code_color } = product;
    dispatch(addProduct({ codeColor_add: code_color, size_add: size, product_add: product }));
    size = "";
  }

  const handleClickDel = () => {
    const { code_color } = product;
    dispatch(delProduct({codeColor_del: code_color, size_del: size }));
    size = "";
  }

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
        <div className="product__buttons">
          <div className="buttons__sizes">
            {product.sizes.map(size => size.available ?
              <button key={size.size} onClick={e => handleClickSize(e, size.size)}>
                <h3>{size.size}</h3>
              </button>
              : null)
            }
          </div>
          <button onClick={handleClickAdd}><h2>add</h2></button>
          <button onClick={handleClickDel}><h2>del</h2></button>
          <br /><br /><br /><br /><br />
        </div>
      </div>
    </div>
  )
}
