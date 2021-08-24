import React, { useState, useRef } from 'react';

const ContactPage = () => {
  const [formMessage, setFormMessage] = useState('');

  //Refs
  const userName = useRef();
  const userEmail = useRef();
  const userMessage = useRef();

  //functions
  const handleSubmit = (e) => {
    e.preventDefault();

    setFormMessage(
      'Thank you for your message! We will get back to you in 2 work days.'
    );
    userName.current.value = '';
    userEmail.current.value = '';
    userMessage.current.value = '';
  };
  return (
    <div>
      <h1>Contact us</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label htmlFor="userName">Name:</label>
          <input ref={userName} type="text" />
        </div>
        <div>
          <label htmlFor="userEmail">Email:</label>
          <input ref={userEmail} type="email" />
        </div>
        <div>
          <label htmlFor="userMessage">Message:</label>
          <textarea
            ref={userMessage}
            name=""
            id=""
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <input type="submit" />
      </form>
      <p>{formMessage}</p>
    </div>
  );
};

export default ContactPage;
