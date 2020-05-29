import React from 'react';
import Catalog from '../../containers/Catalog/Catalog';
import Load from '../../components/Load/Load';

export default function CatalogRoute() {
  const [products, setProducts] = React.useState([]);

  React.useEffect(
    () => {
      fetch('https://5e9935925eabe7001681c856.mockapi.io/api/v1/catalog')
        .then(response => response.json())
        .then(products => setProducts(products))
        .catch(err => console.log(err))
    }, []);

  return (
    <div className="catalog__route">
    {products.length > 0 ?
      <Catalog products={products}/>
      : <Load/>
    }
    
    </div>
  )
}
