import React from 'react';
//components
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';

const loginPage = () => {
  return (
    <main>
      <h1>Login/Signup</h1>
      <section>
        <h2>Login</h2>
        <LoginForm />
      </section>
      <section>
        <h2>Signup</h2>
        <SignupForm />
      </section>
    </main>
  );
};

export default loginPage;
