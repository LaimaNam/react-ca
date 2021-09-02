import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../App';

const Header = () => {
  //Hooks
  // -- state
  const { state, dispatch } = useContext(UserContext);

  //--side effects
  useEffect(() => {
    console.log(localStorage.getItem('user'));
    if (localStorage.getItem('user')) {
      console.log('User found');

      dispatch({
        type: 'LOGIN',
        payload: localStorage.getItem('user'),
      });
    } else {
      console.log('User not found');
    }
  }, [dispatch]);

  return (
    <header>
      <div className="container">CAR ADVERTS</div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          {state.user ? (
            <li>
              <Link to="/myaccount">My Account</Link>
            </li>
          ) : (
            <li>
              <Link to="/login">Login/Signup</Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
