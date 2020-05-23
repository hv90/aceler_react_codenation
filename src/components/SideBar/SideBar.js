import React from 'react';
import './SideBar.css';
import SearchBar from '../SearchBar/SearchBar';
import NavBar from '../NavBar/NavBar';

export default function SideBar() {
  const arrayDivs = [
    <div key="s" > < SearchBar /> </div>,
    <div key="n" > <NavBar/> </div >
  ]
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

        <div className="sidebar__content"
          style={{ display: `${display}` }}
        >
          <div className="content" > {arrayDivs} </div >
        </ div>
      </div >
    </>
  )
}