import React, { useState } from 'react';
import ProductButton from './ProductButton';
import './productView.css';

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
    <div className="productView-item">
      <img src={imgSrc} alt={imgAlt} onClick={() => action(imgTitle)} />
      <div className="productView-info">
        <p className="productView-item-category">{category}</p>
        <p className="productView-item-title">{imgTitle.toUpperCase()}</p>
        <p className="productView-item-description">{description}</p>
        <p className="productView-item-price">${imgPrice.toFixed(2)}</p>
        <div className="productView-state">
          <div className="productView-count">
            <button className="productView-count-btn" onClick={decrement}>
              -
            </button>
            <button className="productView-count-btn">{count}</button>
            <button className="productView-count-btn" onClick={increment}>
              +
            </button>
          </div>
          <ProductButton />
        </div>
      </div>
    </div>
  );
};

export default ProductView;
