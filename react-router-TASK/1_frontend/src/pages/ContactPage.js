import React, { useState, useRef } from 'react';
import './ContactPage.css';

const ContactPage = () => {
  const [formMessage, setFormMessage] = useState('');

  //Refs
  const userName = useRef();
  const userEmail = useRef();
  const userMessage = useRef();

  //functions
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userName.current.value || !userEmail.current.value) return;
    setFormMessage(
      'Thank you for your message! We will get back to you in 2 work days.'
    );
    userName.current.value = '';
    userEmail.current.value = '';
    userMessage.current.value = '';
  };
  return (
    <main>
      <h1 className="contact-page-heading">Contact us</h1>
      <div className="contact-page-form">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div>
            <label htmlFor="userName">Name</label>
            <input ref={userName} type="text" />
          </div>
          <div>
            <label htmlFor="userEmail">Email</label>
            <input ref={userEmail} type="email" />
          </div>
          <div>
            <label htmlFor="userMessage">Message</label>
            <textarea
              ref={userMessage}
              name=""
              id=""
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <input className="contact-form-btn" type="submit" />
        </form>
        <p>{formMessage}</p>
      </div>
    </main>
  );
};

export default ContactPage;
