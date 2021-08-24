import React from 'react';
import './Service.css';

const Service = ({ name, content, price }) => {
  return (
    <div className="single-service-item">
      <h3>{name}</h3>
      <p>{content}</p>
      <p className="service-price">€{price}</p>
    </div>
  );
};

export default Service;
