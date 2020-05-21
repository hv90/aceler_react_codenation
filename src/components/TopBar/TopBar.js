import React from 'react';
import './TopBar.css';
import logo from '../../assets/fashionista_logo1.png';

export default function TopBar() {
    return (
        <div className="TopBar">
            <div className="TopBar__items">
                <div className="TopBar__toggle">
                    <i className="fas fa-bars fa-3x"/>
                </div>

                <div className="TopBar__logo" >
                    <img src={logo} alt=""/>
                </div> 

                <div className="TopBar__search">
                    <button><h2>SEARCH ___________</h2></button>
                </div>

                <ul className="TopBar__list">
                    <li className="list__item"><button><h4>log in</h4></button></li>
                    <li className="list__item"><button><h4>contact</h4></button></li>
                    <li className="list__item"><button><h4 ><i class="fas fa-shopping-cart"></i></h4></button></li>
                </ul>
            </div>
                       
        </div>
    )
}
