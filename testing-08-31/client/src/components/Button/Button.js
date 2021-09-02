import React from 'react';

const Button = ({ text, action }) => {
  return (
    <button onClick={action} data-testid="btn">
      {text}
    </button>
  );
};

export default Button;
