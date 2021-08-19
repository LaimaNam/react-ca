import React, { useState } from 'react';
import Button from './Button';

const Counter1 = () => {
  // hooks - priima skliaustuose skaiciu, array, object
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const showGreeting = () => setMessage('Labas!');

  return (
    <div>
      <h2>Counter 1</h2>
      <p>Count: {count}</p>
      <Button text="+1" action={increment} />
      <Button text="-1" action={decrement} />
      <br /> <br />
      <Button text="Show greeting" action={showGreeting} />
      <p>{message}</p>
    </div>
  );
};

export default Counter1;

//klasiu:
// state = {
// count: 0
// }

//this.setState({count: 1})
