import React from 'react';
import './SideBar.css';
import { NavBar, SearchBar } from '../TopBar';

export default function SideBar(
  {
    hideSearch = false,
    hideLogin = false,
    hideContact = false,
    hideCart = false
  }) {
  const [isToggled, setToggled] = React.useState(false);
  const [display, setDisplay] = React.useState("none");

  const handleClick = () => {
    setToggled(false);
    toggleMenu();
  }

  const arrayDivs = [
    <div key="sidebar__searchbar" onClick={handleClick}>
      < SearchBar hideSearch={hideSearch} />
    </div>,

    <div key="sidebar__navbar" onClick={handleClick}>
      <NavBar
        hideLogin={hideLogin}
        hideContact={hideContact}
        hideCart={hideCart}
      />
    </div >
  ];

  let darkableComponent = document.getElementsByClassName("darkable");

  const toggleMenu = () => {
    console.log(darkableComponent)
    if (isToggled) {
      setDisplay("block");
      darkableComponent[0] !== undefined ?
        darkableComponent[0].style.opacity = "0.6"
        : darkableComponent = document.getElementsByClassName("darkable");
      setToggled(false);
    } else {
      setDisplay("none");
      darkableComponent[0] !== undefined ?
        darkableComponent[0].style.opacity = "1"
        : darkableComponent = document.getElementsByClassName("darkable");
      setToggled(true);
    }
  }

  React.useEffect(() => {
    setToggled(true);
  }, []);

  return (
    <aside className="sidebar" >
      < button className="sidebar__toggle"
        onClick={toggleMenu}
      >
        < i className="fas fa-bars fa-3x" />
      </button>

      <div className="sidebar__content"
        style={{ display: `${display}` }}
      >
        <div className="content" > {arrayDivs} </div >
      </ div>
    </aside >
  )
}