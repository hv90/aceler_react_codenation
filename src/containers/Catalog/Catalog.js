import React from 'react';
import Product from '../../components/Product/Product';

export default function Catalog() {

  const [products, setProducts] = React.useState([]);

  React.useEffect(
    () => {
      fetch('https://5e9935925eabe7001681c856.mockapi.io/api/v1/catalog')
        .then(response => response.json())
        .then(products => setProducts(products))
        .catch(err => console.log(err))
    }, []);

  return (
    <section className="products">       
          {products.length > 0 ? products.map(
            product =>
              <Product key={product.image} product={product} />
          )
            : "Loading..."}
    </section >
  )
}
