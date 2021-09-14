import React from 'react';

const TextInput = ({ label, id }) => {
  return label ? (
    <>
      <label>{label}</label>
      <input type="text" id={id} />
      <br />
    </>
  ) : (
    <input type="text" id={id} />
  );
};

export default TextInput;
