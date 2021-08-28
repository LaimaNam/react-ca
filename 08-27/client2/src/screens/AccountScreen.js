import React, { useContext } from 'react';
import { UserContext } from '../App';
import { useHistory } from 'react-router-dom';

const AccountScreen = () => {
  // Hooks
  // -- state
  // -- -- global
  const userContext = useContext(UserContext);
  const { dispatch } = userContext;

  // --router
  let history = useHistory();

  //custom functions
  const clickHandler = () => {
    dispatch({ type: 'LOGOUT' });
    //redirecting to Account page
    history.push('/register');
  };

  return (
    <>
      <h2>Account page</h2>
      <button onClick={clickHandler}>Logout</button>
    </>
  );
};

export default AccountScreen;
