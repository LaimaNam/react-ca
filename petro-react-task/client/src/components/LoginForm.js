import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const LoginForm = () => {
  // Hooks
  // -- state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  // -- redirects
  const history = useHistory();

  // custom functions
  const submitHandler = (e) => {
    e.preventDefault();
    if (!email || !password) return alert('Please provide email and passsword');
    const team = { email, password };

    axios
      .post('http://localhost:5000/api/teams/login', team)
      .then((data) => {
        if (data.data.loginStatus === 'failed') {
          setMessage("Team doesn't exist");
          setEmail('');
          setPassword('');
        } else if (data.data.loginStatus === 'success') {
          localStorage.setItem('team', data.data.teamId);
          history.push('/admin');
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label htmlFor="email">Email</label>
        <br />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label htmlFor="password">Password</label>
        <br />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <input type="submit" />
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default LoginForm;
