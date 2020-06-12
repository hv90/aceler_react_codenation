import React from 'react';
import { Catalog } from '../containers';
import { Load } from '../components';
import { useDispatch } from 'react-redux';
import { setCatalog } from '../actions';

export default function CatalogRoute() {
  const dispatch = useDispatch();
  const [hasError, setError] = React.useState(false);
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
     fetch('https://5e9935925eabe7001681c856.mockapi.io/api/v1/catalog')
      .then(response => response.json())
      .then(prods => setProducts(prods))
      .catch(err => setError(true))
  }, []);

  dispatch(setCatalog(products));

  return (
    <main className="catalog__route" >
      {products.length > 0 ?
        <Catalog />
        : <Load hasError={hasError}/>
      }
    </main>
  )
}
