import React from 'react';
import './Search.css';
import { ProductThumbnail } from '../../components';

export default function Search({ products }) {
  const [searchkey, setSearchkey] = React.useState("");
  const [results, setResults] = React.useState([]);

  const liveSearch = (keyword) => {
    setSearchkey(keyword);

    keyword === "" ?
      setResults([])
      : setResults(
        products.filter(product =>
          product.name.toLowerCase()
            .includes(keyword.toLowerCase())
        )
      )
  }

  return (
    <section className="search__container darkable">
      <div className="search__input">
        <input
          autoFocus
          placeholder="Search"
          value={"" || searchkey}
          onChange={eventKeyDown => liveSearch(eventKeyDown.target.value)}
        />
      </div>

      <div className="search__results">
        <ul className="products_list">
          {results.map(result =>
            <div key={result.code_color}><ProductThumbnail product={result} /></div>
          )
          }
        </ul>

      </div>

    </section>
  )
}
