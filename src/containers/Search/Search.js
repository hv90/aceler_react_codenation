import React from 'react';
import './Search.css';
import {ProductThumbnail} from '../../components';

export default function Search({ products }) {
  const [searchkey, setSearchkey] = React.useState(""); 
  const [results, setResults] = React.useState([]);

  const liveSearch = (keyword) => {
      setSearchkey(keyword);

      setResults(
        products.filter(product => 
          product.name.toLowerCase()
            .includes(keyword.toLowerCase())
        )
      )
  }

  return (
    <div className="search__container">
      <div className="search__input">
        <input
          placeholder="Search"
          value={"" || searchkey}
          onChange={eventKeyDown => liveSearch(eventKeyDown.target.value) }
        /> 
      </div>

      <div className="search__results">
        {results.map(result =>
          <div key={result.code_color}><ProductThumbnail product={result}/></div>
        )
        }
      </div>

    </div>
  )
}
