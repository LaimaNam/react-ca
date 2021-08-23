import React from 'react';
import './Todo.css';

const Todo = ({ todo, action }) => {
  return (
    <div className="todo-item-wrapper">
      <p className="todo-item">{todo}</p>
      <button className="todo-delete-btn" onClick={() => action(todo)}>
        &#10060;
      </button>
    </div>
  );
};

export default Todo;
