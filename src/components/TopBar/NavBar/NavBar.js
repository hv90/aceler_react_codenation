import React from 'react';
import './NavBar.css';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';

export default function NavBar({hideCart}) {
  let cart = "notClicked";

  const length = useSelector(state => state.cart.amount);
  
  hideCart ? cart = "clicked" : cart = "notClicked";


  return (
    <div className="navbar">
      <ul className="navbar__list">
        <li className={`navbar__item ${cart}`}>
          <Link to="/cart">
            <div className="cart__length">
            <h3 ><i className="fas fa-shopping-cart" /> ({length})</h3>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  )
}
