import React from 'react';
import not_found from '../../assets/image_not_found.png';
import { useDispatch } from 'react-redux';
import { addProduct, delProduct, subtractProduct } from '../../actions';
import './ProductsCart.css';

export default function ProductsCart({ product, sizes }) {
  const [isClicked, setClicked] = React.useState(false);
  const [index, setIndex] = React.useState(-1);
  const [size, setSize] = React.useState("");

  const dispatch = useDispatch();

  const handleClickSize = (e, s = "", i) => {
    e.preventDefault();

    if (!isClicked && size === "") {      
      setSize(s);
      setClicked(true);
      setIndex(i);
    }
    else if(isClicked && size !== s){
      setSize(s);
      setClicked(true);
      setIndex(i);
    }
    else if(isClicked && size === s){
      setSize("");
      setClicked(false);
      setIndex(-1);
    }
  }

  const handleClickAdd = () => {
    const { code_color } = product;
    dispatch(addProduct({ codeColor_add: code_color, size_add: size }));
    //size = "";
  }

  const handleClickSubtract = () => {
    const { code_color } = product;
    dispatch(subtractProduct({ codeColor_subtract: code_color, size_subtract: size }));
    //size = "";
  }

  const handleClickDel = () => {
    const { code_color } = product;
    dispatch(delProduct({ codeColor_del: code_color }))
  }

  return (
    <li className="cart__item">
      <div className="product__img">
        {product.image ?
          <img src={`${product.image}`} alt={`${product.name}`} />
          : <img src={`${not_found}`} alt={`${product.name}`} />
        }
      </div>

      <div className="product__info">
        <div className="product__remove">
          <button onClick={handleClickDel}><i className="fa fa-times" aria-hidden="true" /></button>
        </div>
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

        <div className="product__userData">
          <h3>Sizes in <i className="fas fa-shopping-cart" /></h3>
          <ul className="userData__sizes">
            {sizes.map((size, index) => <li className="size_item" key={index}><h4>{size}</h4> </li>)}
          </ul>

          <div className="product__buttons">
            <h3>Sizes Available</h3>
            <ul className="sizeButtons__list">
              {product.sizes.map((size, i) => size.available ?
                <li className="sizeButton__item" key={i}>
                  <button className={ `sizeButton__button${ isClicked && i === index ? "--clicked" : ""}`} key={i} onClick={e => handleClickSize(e, size.size, i)}>
                    <h4>{size.size}</h4>
                  </button>
                </li>
                : null)
              }
            </ul>

            <ul className="controlButtons__list">
              <li className="controlButton__item">
                <button onClick={handleClickAdd}>
                  <h2> <i className="fa fa-plus" aria-hidden="true" /></h2>
                </button>
              </li>
              <li className="displayAmount__item">
                <h2>{sizes.length}</h2>
              </li>
              <li className="controlButton__item">
                <button onClick={handleClickSubtract}>
                  <h2> <i className="fa fa-minus" aria-hidden="true" /></h2>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </li>)
}
