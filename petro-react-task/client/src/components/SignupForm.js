import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const SignupForm = () => {
  //hooks
  // -- state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  // redirects
  const history = useHistory();

  //custom functions
  const submitHandler = (e) => {
    e.preventDefault();
    if (!name || !email || !password)
      return alert('Please provide all information');

    const team = {
      name,
      email,
      password,
    };

    axios.post('http://localhost:5000/api/teams/signup', team).then((data) => {
      if (data.data.signupStatus === 'Failed') {
        setMessage('User already exists');

        setName('');
        setEmail('');
        setPassword('');
      } else if (data.data.signupStatus === 'Success') {
        localStorage.setItem('team', data.data.teamId);
        history.push('/admin');
      }
    });
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label htmlFor="name">Name</label>
        <br />
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
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
      <p>{message}</p>
    </div>
  );
};

export default SignupForm;
