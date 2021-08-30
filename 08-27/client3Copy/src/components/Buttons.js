import React, { useContext } from 'react';
import { DisplayContext } from '../App';

const Buttons = () => {
  // hooks
  // -- Context
  const { changeDisplayState } = useContext(DisplayContext);

  return (
    <div>
      <button onClick={() => changeDisplayState('posts')}>POSTS</button>
      <button onClick={() => changeDisplayState('comments')}>COMMENTS</button>
      <button onClick={() => changeDisplayState('todos')}>TODOS</button>
    </div>
  );
};

export default Buttons;
