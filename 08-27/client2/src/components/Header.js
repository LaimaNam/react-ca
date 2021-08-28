import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../App';

const Header = () => {
  //Hooks
  // -- state
  // ---- global state
  const userContext = useContext(UserContext);
  const { state } = userContext;
  console.log(userContext);

  return (
    <header>
      <div>Logo</div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          {!state.user.name && (
            <li>
              <Link to="/register">Register</Link>
            </li>
          )}

          {state.user.name && (
            <li>
              <Link to="/account">Account</Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
