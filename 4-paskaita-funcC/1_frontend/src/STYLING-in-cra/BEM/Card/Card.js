import React, { useRef } from 'react';
// import Button from './Button';
import './Card.css';

const Card = ({ item }) => {
  const clickHandler = (e) => {
    //after button click
    console.log('btn clicked');
    // e.target.classList.add('card__button--clicked');
    btnRef.current.classList.add('card__button--clicked');
  };

  const btnRef = useRef();

  return (
    <div className="card">
      <h3 className="card__title">{item.title}</h3>
      <p className="card__content">{item.content}</p>
      <button className="card__button" onClick={clickHandler} ref={btnRef}>
        {item.buttonText}
      </button>
      {/* <Button
        text={item.buttonText}
        action={() => console.log('Hello world')}
        primary
      />

      <Button
        text="Order item"
        action={() => console.log('Hello world')}
        secondary
      /> */}
    </div>
  );
};

export default Card;
