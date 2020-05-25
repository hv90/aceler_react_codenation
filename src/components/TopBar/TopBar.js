import React from 'react';
import './TopBar.css';
import logo from '../../assets/fashionista_logo1.png';
import SideBar from '../SideBar/SideBar';

export default function topbar() {
  return (
    <header className="topbar">
      <nav className="topbar__items">
        <SideBar />

        <div className="topbar__logo" >
          <img src={logo} alt="" />
        </div>

        <div className="topbar__searchbar">
          <button><h2>SEARCH ___________</h2></button>
        </div>

        <ul className="topbar__navbar">
          <li className="topbar__item"><button><h4>log in</h4></button></li>
          <li className="topbar__item"><button><h4>contact</h4></button></li>
          <li className="topbar__item">
            <button>
              <h4 ><i className="fas fa-shopping-cart" /></h4>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  )
}
