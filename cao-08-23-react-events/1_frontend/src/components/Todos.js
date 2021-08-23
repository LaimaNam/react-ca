import React, { useState, useEffect } from 'react';
import './Todos.css';
import Todo from './Todo';

const Todos = () => {
  // Todos state
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    const initialValue = JSON.parse(savedTodos);
    return initialValue || [];
  });
  //Done todos state
  const [doneItems, setDoneItems] = useState(() => {
    const savedCompletedItems = localStorage.getItem('doneItems');
    const initialValue = JSON.parse(savedCompletedItems);
    console.log(initialValue);
    return initialValue || [];
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    localStorage.setItem('doneItems', JSON.stringify(doneItems));
  }, [doneItems]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let inputValue = e.target.todoInput.value;
    if (!inputValue) return;
    setTodos([...todos, inputValue]);
    e.target.todoInput.value = '';
  };

  const deleteFromStorage = (todo) => {
    const currentTodosArray = todos.filter((item) => item !== todo);
    const deletedItem = todos.filter((item) => item === todo);

    setDoneItems(...doneItems, deletedItem);
    setTodos(currentTodosArray);
  };

  const sentBackToTodoLis = (todo) => {
    const currentDoneArray = doneItems.filter((item) => item !== todo);
    const deletedFromDoneList = doneItems.filter((item) => item === todo);

    console.log(currentDoneArray);
    console.log(deletedFromDoneList);

    setDoneItems(currentDoneArray);

    setTodos(...todos, deletedFromDoneList);
  };

  return (
    <>
      <div className="todos-wrapper">
        {todos.length === 0 ? (
          <h3>Please insert todo name and click submit!</h3>
        ) : (
          <>
            <h3>
              {todos.length > 1
                ? `You have ${todos.length} items on the list`
                : `You have ${todos.length} item on the list`}{' '}
            </h3>
            <div className="todos">
              {todos.map((todo) => (
                <Todo
                  key={Math.floor(Math.random() * 100)}
                  todo={todo}
                  action={deleteFromStorage}
                />
              ))}
            </div>
          </>
        )}

        <form onSubmit={(e) => handleSubmit(e)}>
          <input id="todoInput" type="text" placeholder="Enter Item" />
          <input type="submit" />
        </form>
      </div>

      <div className="done-items">
        {doneItems.map((completedItem) => (
          <div>
            <button>Delete</button>
            <Todo
              key={Math.floor(Math.random() * 100)}
              todo={completedItem}
              action={sentBackToTodoLis}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Todos;
