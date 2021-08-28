import React, { useState, useContext } from 'react';
import { ClicksContext } from '../App';

const CompA = () => {
  //Hooks
  // -- state
  // -- Global state
  const clickContext = useContext(ClicksContext);
  const { dispatch } = clickContext;
  // -- Local state
  const [btnClicks, setComponentBtnClicks] = useState(0);

  //custom Funcs
  const clickHandler = () => {
    //changing global state
    dispatch({ type: 'INCREMENT' });
    //changing local state
    setComponentBtnClicks(btnClicks + 1);
  };
  return (
    <>
      <h2>Component A</h2>
      <button onClick={clickHandler}>Clicked: {btnClicks}</button>
    </>
  );
};

export default CompA;
