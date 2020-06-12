import React from 'react';
import not_found from '../../assets/image_not_found.png';
import { useDispatch } from 'react-redux';
import { addProduct, delProduct, subtractProduct } from '../../actions'

export default function ProductsCart({ product, sizes }) {
  const dispatch = useDispatch();
  let size = "";

  const handleClickSize = (e, s = "") => {
    e.preventDefault();
    size = s;
  }

  const handleClickAdd = () => {
    const { code_color } = product;
    dispatch(addProduct({ codeColor_add: code_color, size_add: size }));
    size = "";
  }

  const handleClickSubtract = () => {
    const { code_color } = product;
    dispatch(subtractProduct({ codeColor_subtract: code_color, size_subtract: size }));
    size = "";
  }

  const handleClickDel = () =>{
    const {code_color} = product;
    dispatch(delProduct({codeColor_del: code_color}))
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

        <div className="product__userData">
          <div className="userData__sizes">
            <h3>Sizes Selected</h3>
            <h4>{sizes.map((size, index) => <span key={index}>{size} &nbsp;&nbsp;</span>)}</h4>
          </div>

          <div className="product__buttons">
            <div className="buttons__sizes">
              <h3>Sizes Available</h3>
              {product.sizes.map(size => size.available ?
                <button key={size.size} onClick={e => handleClickSize(e, size.size)}>
                  <h4>{size.size}</h4>
                </button>
                : null)
              }
            </div>

            <button onClick={handleClickAdd}><h2>add</h2></button>
            <button onClick={handleClickSubtract}><h2>subtract</h2></button>
            <button onClick={handleClickDel}><h2>del</h2></button>
            <br /><br /><br /><br /><br />
          </div>
        </div>
        }

      </div>


    </div>)
}
