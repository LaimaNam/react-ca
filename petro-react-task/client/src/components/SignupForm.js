import React, { useState } from 'react';
import axios from 'axios';

const SignupForm = () => {
  //hooks
  // -- state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //custom functions
  const submitHandler = (e) => {
    e.preventDefault();
    if (!name || !email || !password) alert('Please provide all information');

    const team = {
      name,
      email,
      password,
    };
    axios.post('http://localhost:5000/api/teams', team);
  };

  return (
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
  );
};

export default SignupForm;
