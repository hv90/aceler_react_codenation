import React from 'react';
import {Search} from '../containers';
import {useSelector} from 'react-redux';
import {Redirect} from 'react-router-dom';

export default function SearchRoute() {
  const products = useSelector(state => state.catalog.products);

  return (
    <main className="search__route">
      {products.length > 0 ?
        <Search products={products}/>
        : <Redirect to ="/"/>
      }
    </main>
  )
}
