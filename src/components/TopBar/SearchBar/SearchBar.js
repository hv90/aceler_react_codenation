import React from 'react';
import {Link} from 'react-router-dom';
import './SearchBar.css';

export default function SearchBar({hideSearch}) {
  let isClicked = "notCliked"; 
  hideSearch ? isClicked = "clicked" : isClicked = "notClicked";

  return (
      <div className={`searchbar ${isClicked}`}>
          <Link to="/search"><h2>SEARCH ___________</h2></Link>
      </div>
  )
}
