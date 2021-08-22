import React, { useState } from 'react';
import ProductButton from './ProductButton';
import './Product.css';

const Product = ({ imgSrc, imgAlt, imgTitle, imgPrice, action, id }) => {
  const [count, setCount] = useState(1);

  // const increment = () => {
  //   setCount(count + 1);
  // };

  // const decrement = () => {
  //   if (count === 1) return;
  //   setCount(count - 1);
  // };

  return (
    <div className="product-item">
      <img src={imgSrc} alt={imgAlt} onClick={() => action(id)} />
      <div className="product-info">
        <p className="product-item-title">{imgTitle}</p>
        <p className="product-item-price">${imgPrice.toFixed(2)}</p>
        <div className="product-state">
          {/* <div className="product-count">
            <span onClick={decrement}>-</span>
            <span>{count}</span>
            <span onClick={increment}>+</span>
          </div> */}
          {/* <ProductButton /> */}
        </div>
      </div>
    </div>
  );
};

export default Product;
