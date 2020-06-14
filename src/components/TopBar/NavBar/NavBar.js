import React from 'react';
import './NavBar.css';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';

export default function NavBar({hideLogin, hideContact, hideCart}) {
  let login = "notClicked";
  let contact = "notClicked";
  let cart = "notClicked";

  const length = useSelector(state => state.cart.amount);
  
  hideLogin ? login = "clicked" : login = "notClicked";
  hideContact ? contact = "clicked" : contact = "notClicked";
  hideCart ? cart = "clicked" : cart = "notClicked";


  return (
    <div className="navbar">
      <ul className="navbar__list">
        <li className={`navbar__item ${login}`}><Link to="/login"><h4>log in</h4></Link></li>
        <li className={`navbar__item ${contact}`}><Link to="/contact"><h4>contact</h4></Link></li>
        <li className={`navbar__item ${cart}`}>
          <Link to="/cart">
            <div className="cart__length">
            <h4 ><i className="fas fa-shopping-cart" /> ({length})</h4>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  )
}
