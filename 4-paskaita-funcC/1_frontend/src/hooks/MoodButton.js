import React from 'react';

const MoodButton = ({ text, action }) => {
  return (
    <>
      <button onClick={() => action(text)}>{text}</button>
    </>
  );
};

export default MoodButton;
