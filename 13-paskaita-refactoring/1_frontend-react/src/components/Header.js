import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../App';
import styled from 'styled-components';

//styles
const HeaderStyled = styled.div`
  width: 100%;
  background-color: blue;
  color: #fff;

  header {
    display: flex;
    align-items: center;
    max-width: 1024px;
    margin: auto;
    justify-content: space-between;
    padding-left: 10px;
    padding-right: 10px;
  }

  ul {
    display: flex;
    gap: 10px;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: #fff;
  }
`;

//component
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
    <HeaderStyled>
      <header className="header">
        <div>CAR ADVERTS</div>
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
    </HeaderStyled>
  );
};

export default Header;
