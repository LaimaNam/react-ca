import React, { useState } from 'react';
import ProductButton from './ProductButton';

const Product = ({ imgSrc, imgAlt, imgTitle, imgPrice }) => {
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count === 1) return;
    setCount(count - 1);
  };

  return (
    <div className="product-item">
      <img src={imgSrc} alt={imgAlt} />
      <div className="product-info">
        <p className="portfolio-item-title">{imgTitle}</p>
        <p className="portfolio-item-price">${imgPrice}</p>
        <div className="product-state">
          <div className="product-count">
            <span onClick={decrement}>-</span>
            <span>{count}</span>
            <span onClick={increment}>+</span>
          </div>
          <ProductButton />
        </div>
      </div>
    </div>
  );
};

export default Product;
