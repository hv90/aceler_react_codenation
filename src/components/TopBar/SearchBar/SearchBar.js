import React from 'react';
import {Link} from 'react-router-dom';
import './SearchBar.css';

export default function SearchBar({hideSearch}) {
  let isClicked = hideSearch ? "clicked" : "";

  return (
      <div className={`searchbar ${isClicked}`}>
          <Link to="/search"><h2>SEARCH ___________</h2></Link>
      </div>
  )
}
