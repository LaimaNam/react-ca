import React, { useContext } from 'react';
import { DisplayContext } from '../App';

const Buttons = () => {
  // hooks
  // -- Context

  const { displayData } = useContext(DisplayContext);

  return (
    <div>
      <button onClick={() => displayData('posts')}>POSTS</button>
      <button onClick={() => displayData('comments')}>COMMENTS</button>
      <button onClick={() => displayData('todos')}>TODOS</button>
    </div>
  );
};

export default Buttons;
