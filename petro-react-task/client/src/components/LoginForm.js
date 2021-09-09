import React from 'react';

const LoginForm = () => {
  return (
    <form>
      <label htmlFor="email">Email</label>
      <br />
      <input type="email" />
      <br />
      <label htmlFor="password">Password</label>
      <br />
      <input type="password" />
      <br />
      <input type="submit" />
    </form>
  );
};

export default LoginForm;
