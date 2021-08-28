import React, { useContext, useState } from 'react';
import { UserContext } from '../App';
import { useHistory } from 'react-router-dom';

const RegisterScreen = () => {
  //Hooks
  // -- state
  // -- -- global
  const userContext = useContext(UserContext);
  const { dispatch } = userContext;
  // -- -- local
  const [name, setName] = useState('');

  // --router
  let history = useHistory();

  // Custom functions
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch({ type: 'LOGIN', name: name });
    //redirecting to Account page
    history.push('/account');
  };

  return (
    <div>
      <h2>Register page</h2>
      <form onSubmit={submitHandler}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default RegisterScreen;
