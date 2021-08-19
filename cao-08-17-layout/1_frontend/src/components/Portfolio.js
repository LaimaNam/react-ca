import React, { useEffect, useState } from 'react';
import './Portfolio.css';
import PortfolioItem from './PortfolioItem';
import Button from './Button';

const Portfolio = ({ portfolioHeading, portfolioContent }) => {
  const [state, setState] = useState([]);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setState(data));
  }, []);

  return (
    <section className="portfolio-section">
      <div className="portfolio-information">
        <h2>{portfolioHeading}</h2>
        <p>{portfolioContent}</p>
        <Button btnText="Shop all" />
      </div>
      <div className="portfolio-items">
        {console.log(state)}
        {state.map((product) => (
          <PortfolioItem
            key={product.id}
            imgSrc={product.image}
            imgAlt={product.title}
            imgTitle={product.title}
            imgPrice={product.price}
          />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
