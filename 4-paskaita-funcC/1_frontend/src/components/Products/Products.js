import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = ({ heading }) => {
  const [productItems, setProductItems] = useState([]);
  const [productId, setProductId] = useState('');

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setProductItems(data));
  }, []);

  //functions
  const selectProduct = (id) => {
    if (productId === '') {
      setProductId(id);
    } else {
      setProductId('');
    }
  };

  return (
    <>
      <h2>{heading}</h2>
      <div className="products-section">
        {productItems
          //first time productId state is empty string "", so rendering all products, when clicking on product img stateId becomes product id and showing one product
          .filter((product) => productId === '' || product.id === productId)
          .map((product) => (
            <Product
              action={selectProduct}
              key={product.id}
              id={product.id}
              imgSrc={product.image}
              imgAlt={product.title}
              imgTitle={product.title}
              imgPrice={product.price}
            />
          ))}
      </div>
    </>
  );
};

export default Products;
