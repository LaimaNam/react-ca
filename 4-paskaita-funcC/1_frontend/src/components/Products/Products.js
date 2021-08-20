import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = ({ heading }) => {
  const [productItems, setProductItems] = useState([]);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setProductItems(data));
  }, []);
  return (
    <>
      <h2>{heading}</h2>
      <div className="products-section">
        {productItems.map((product) => (
          <Product
            key={product.id}
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
