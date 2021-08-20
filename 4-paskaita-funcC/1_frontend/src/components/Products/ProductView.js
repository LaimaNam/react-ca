import React, { useState } from 'react';
import ProductButton from './ProductButton';

const ProductView = ({
  imgSrc,
  imgAlt,
  imgTitle,
  category,
  description,
  imgPrice,
  action,
}) => {
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
      <img src={imgSrc} alt={imgAlt} onClick={() => action(imgTitle)} />
      <div className="product-info">
        <p className="product-item-category">{category}</p>
        <p className="product-item-title">{imgTitle}</p>
        <p className="product-item-description">{description}</p>
        <p className="product-item-price">${imgPrice}</p>
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

export default ProductView;
