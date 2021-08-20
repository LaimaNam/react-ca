import React, { useState } from 'react';
import MoodButton from './MoodButton';

const MoodChecker = () => {
  const [message, setMessage] = useState('Kaip jaučiatės?');

  const showMessage = (text) => {
    if (text === 'Jaučiuosi prastai :(') {
      setMessage('Nieko tokio, viskas bus gerai');
    } else if (text === 'Jaučiuosi normaliai :|') {
      setMessage('Gerai, nujaučiu, kad greitu metu jausitės puikiai');
    } else if (text === 'Jaučiuosi puikiai :)') {
      setMessage('Smagu girdėti, taip ir toliau');
    }
  };

  let buttonTextArray = [
    'Jaučiuosi prastai :(',
    'Jaučiuosi normaliai :|',
    'Jaučiuosi puikiai :)',
  ];

  return (
    <>
      <h2>{message}</h2>
      {buttonTextArray.map((btnText) => (
        <MoodButton key={btnText} action={showMessage} text={btnText} />
      ))}
    </>
  );
};

export default MoodChecker;
