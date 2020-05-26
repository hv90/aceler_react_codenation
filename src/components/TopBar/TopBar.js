import React from 'react';
import './TopBar.css';
import logo from '../../assets/fashionista_logo1.png';
import SideBar from '../SideBar/SideBar';
import SearchBar from '../SearchBar/SearchBar';
import NavBar from '../NavBar/NavBar';

export default function topbar() {
  return (
    <header className="topbar">
      <nav className="topbar__items">
        <SideBar />

        <div className="topbar__logo" >
          <img src={logo} alt="" />
        </div>
        
        <div className="topbar__searchbar"><SearchBar /></div>
        
        <div className="topbar__navbar"><NavBar/></div>
      </nav>
    </header>
  )
}
