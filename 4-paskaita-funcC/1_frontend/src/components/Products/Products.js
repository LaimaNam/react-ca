import React, { useEffect, useState } from 'react';
import Product from './Product';
import './Products.css';
import ProductView from './ProductView';

const Products = ({ heading }) => {
  //products state
  const [productItems, setProductItems] = useState([]);
  // product id state
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
      window.scrollTo(0, 0);
    } else {
      setProductId('');
    }
  };

  const findProductById = (products, id) => {
    let product = products.filter((product) => product.id === id);
    return product[0];
  };

  //ui
  if (productId === '') {
    return (
      <>
        <h2>{heading}</h2>
        <div className="products-section">
          {productItems.map((product) => (
            <Product
              action={selectProduct}
              key={product.id}
              id={product.id}
              imgSrc={product.image}
              imgAlt={product.title}
              imgTitle={product.title}
              imgPrice={product.price}
              category={product.category}
            />
          ))}
        </div>
      </>
    );
  } else {
    const product = findProductById(productItems, productId);
    return (
      <>
        <ProductView
          action={selectProduct}
          key={product.id}
          id={product.id}
          imgSrc={product.image}
          imgAlt={product.title}
          category={product.category}
          imgTitle={product.title}
          description={product.description}
          imgPrice={product.price}
        />
      </>
    );
  }
};

export default Products;
