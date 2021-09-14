import React from 'react';

const EmailInput = ({ label, id }) => {
  return label ? (
    <>
      <label>{label}</label>
      <input type="email" id={id} />
      <br />
    </>
  ) : (
    <input type="email" id={id} />
  );
};

export default EmailInput;
