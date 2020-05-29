import React from 'react';
import {Link} from 'react-router-dom';
import './TopBar.css';
import logo from '../../assets/fashionista_logo1.png';
import SideBar from './SideBar/SideBar';
import SearchBar from './SearchBar/SearchBar';
import NavBar from './NavBar/NavBar';

export default function topbar({hideSearch=false, hideLogin=false, hideContact=false, hideCart=false}) {
  return (
    <header className="topbar">
      <nav className="topbar__items">
        <SideBar hideSearch={hideSearch}/>

        <div className="topbar__logo" >
          <Link to ="/">
            <img src={logo} alt="fashionista_logo" />
          </Link>
          
        </div>
        
        <div className="topbar__searchbar">
          <SearchBar hideSearch={hideSearch} />
        </div>
        
        <div className="topbar__navbar">
          <NavBar 
            hideLogin={hideLogin}
            hideContact={hideContact}
            hideCart={hideCart}
          />
        </div>
      </nav>
    </header>
  )
}
