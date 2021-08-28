import React, { useReducer } from 'react';

// useReducer initialState - pradinė vertė
let initialState = { count: 0, message: '' };

// useReducer reducer functions (describes how state shouwl change)
const clickReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      if (state.count < 10) return { ...state, count: state.count + 1 };
      return { ...state, message: 'Reached max: 10' };
    case 'DECREMENT':
      if (state.count === 10)
        return { ...state, count: state.count - 1, message: '' };
      if (state.count === 0) return { ...state };
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

const Counter = () => {
  // hooks
  // -- state  dispatch yra irankis, kuriuo mes valdysime state
  const [state, dispatch] = useReducer(clickReducer, initialState);

  return (
    <div>
      <h3>Count: {state.count}</h3>

      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-1</button>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+1</button>

      <p>{state.message}</p>
    </div>
  );
};

export default Counter;
