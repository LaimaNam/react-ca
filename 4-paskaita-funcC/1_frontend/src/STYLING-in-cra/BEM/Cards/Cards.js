import React from 'react';
import Card from '../Card/Card';

//styles
import './Cards.css';

const Cards = ({ sectionTitle, cardsArray }) => {
  return (
    <section className="cards-section">
      <h2 className="cards-section__title">{sectionTitle}</h2>
      <div className="cards-section__cards">
        {cardsArray.map((item) => (
          <Card key={item.title} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Cards;
