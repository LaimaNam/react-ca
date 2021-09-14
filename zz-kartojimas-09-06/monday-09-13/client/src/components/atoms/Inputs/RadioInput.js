import React from 'react';

const RadioInput = ({ name, label, value, id }) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input type="radio" name={name} id={id} value={value} />
    </>
  );
};

export default RadioInput;
