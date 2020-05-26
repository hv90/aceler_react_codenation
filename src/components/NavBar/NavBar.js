import React from 'react';
import './NavBar.css';

export default function NavBar() {
  return (
    <>
      <ul className="navbar__list">
        <li className="navbar__item"><button><h4>log in</h4></button></li>
        <li className="navbar__item"><button><h4>contact</h4></button></li>
        <li className="navbar__item">
          <button><h4 ><i className="fas fa-shopping-cart" /></h4></button>
        </li>
      </ul>
    </>
  )
}
