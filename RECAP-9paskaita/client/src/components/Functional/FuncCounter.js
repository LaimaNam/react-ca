import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

export const FuncCounter = () => {
  //Hooks
  // -- state
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  const [displayTodos, setDisplayTodos] = useState([]);

  //refs
  let initialLoad = useRef(true);

  //side effects
  useEffect(() => {
    if (initialLoad.current) {
      axios
        .get('https://jsonplaceholder.typicode.com/todos')
        .then((response) => {
          setTodos(response.data);
          initialLoad.current = false;
        })
        .catch((err) => console.log(err));
    } else {
      console.log('Many times');
      setDisplayTodos(todos.splice(0, count));
    }
  }, [count]);

  // custom functions
  const increment = () => setCount((prevCount) => prevCount + 1);
  const decrement = () => setCount((prevCount) => prevCount - 1);

  return (
    <div>
      <h2>Functional counter: {count}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <h3>todos</h3>
      {displayTodos.map((todo) => (
        <ul>
          <li>{todo.title}</li>
          <li>
            {todo.completed ? 'Task is completed' : 'Task is not completed'}
          </li>
        </ul>
      ))}
    </div>
  );
};
