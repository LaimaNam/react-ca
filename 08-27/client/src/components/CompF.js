import React, { useState, useContext } from 'react';
import { ClicksContext } from '../App';

export const CompF = () => {
  //Hooks
  // -- state
  // -- global
  const clicksContext = useContext(ClicksContext);
  const { dispatch } = clicksContext;
  // -- local
  const [btnClicks, setBtnClicks] = useState(0);
  // -- custom funcs
  const handleClick = () => {
    //changing global state
    dispatch({ type: 'INCREMENT' });
    //changing local state
    setBtnClicks(btnClicks + 1);
  };
  return (
    <>
      <h4> Component F</h4>
      <button onClick={handleClick}>Clicked: {btnClicks}</button>
    </>
  );
};
