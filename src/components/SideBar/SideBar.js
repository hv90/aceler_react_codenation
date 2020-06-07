import React from 'react';
import './SideBar.css';
import {NavBar, SearchBar} from '../TopBar';

export default function SideBar({ hideSearch = false,
                                  hideLogin = false,
                                  hideContact = false,
                                  hideCart = false 
                                }                       ) {
  const arrayDivs = [
    <div key="sidebar__searchbar" >
      < SearchBar hideSearch={hideSearch} />
    </div>,

    <div key="sidebar__navbar" >
      <NavBar
        hideLogin={hideLogin}
        hideContact={hideContact}
        hideCart={hideCart}
      />
    </div >
  ];
  const [isToggled, setToggled] = React.useState(false);
  const [display, setDisplay] = React.useState("none");

  const toggleMenu = () => {
    if (isToggled) {
      setDisplay("block");
      setToggled(false);
    } else {
      setDisplay("none");
      setToggled(true);
    }
  }

  React.useEffect(() => {
    setToggled(true);
  }, []);

  return (
    <>
      <div className="sidebar" >
        < button className="sidebar__toggle"
          onClick={() => toggleMenu()}
        >
          < i className="fas fa-bars fa-3x" />
        </button>

        <div className={`sidebar__content`}
          style={{ display: `${display}` }}
        >
          <div className="content" > {arrayDivs} </div >
        </ div>
      </div >
    </>
  )
}