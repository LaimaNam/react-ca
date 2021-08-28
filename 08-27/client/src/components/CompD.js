import React, { useState, useContext } from 'react';
import { ClicksContext } from '../App';

const CompD = () => {
  //Hooks
  // --state
  // Global state
  const clicksContext = useContext(ClicksContext);
  const { dispatch } = clicksContext;
  // Local state
  const [btnClicks, setbtnClicks] = useState(0);

  //Custom functions
  const clickHandler = () => {
    //changing global state
    dispatch({ type: 'INCREMENT' });
    //changing local state
    setbtnClicks(btnClicks + 1);
  };

  return (
    <>
      <h3>Component D</h3>
      <button onClick={clickHandler}>Clicked: {btnClicks}</button>
    </>
  );
};

export default CompD;
