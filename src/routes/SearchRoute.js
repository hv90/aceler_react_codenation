import React from 'react';
import {Search} from '../containers';
import {Load} from '../components';

export default function SearchRoute() {
  const [products, setProducts] = React.useState([]);

  React.useEffect( () => {
      fetch('https://5e9935925eabe7001681c856.mockapi.io/api/v1/catalog')
        .then(response => response.json())
        .then(products => setProducts(products))
        .catch(err => console.log(err))
    }, []);

  return (
    <div className="search__route">
      {products.length > 0 ?
        <Search products={products}/>
        : <Load/>
      }
    </div>
  )
}
