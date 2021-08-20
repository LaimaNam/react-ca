import React, { useState, useEffect, useRef } from 'react';

const Form = () => {
  //Hooks
  // - form state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  // - message state
  const [message, setMessage] = useState('');

  //Side Effects
  useEffect(() => {
    console.log(focusInput);
    focusInput.current.focus();
  }, []);

  //Refs
  const focusInput = useRef();

  //custom functions
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(name, email, age);
    if (+age >= 18) {
      setMessage(`Welcome, ${name}`);
    } else {
      setMessage('You need to be at least 18 years old');
      setAge('');
    }
  };

  return (
    <div>
      <h2>Form</h2>
      <form onSubmit={submitHandler}>
        <label htmlFor="name">Name:</label>
        <br />
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          ref={focusInput}
        />
        <br />

        <label htmlFor="email">Email:</label>
        <br />
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />

        <label htmlFor="age">Age:</label>
        <br />
        <input
          type="text"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <br />
        <br />
        <input type="submit" />
      </form>
      <p>{message}</p>
    </div>
  );
};

export default Form;
