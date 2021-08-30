import './App.css';
import React, { useReducer, useEffect, useRef, isValidElement } from 'react';
import axios from 'axios';

//components
import CompA from './components/CompA';
import CompB from './components/CompB';
import CompC from './components/CompC';

// CONTEXT
export const DisplayContext = React.createContext();

// STATE MANAGEMENT
const initialState = { posts: [], comments: [], todos: [], display: '' };

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_POSTS':
      return { ...state, posts: action.payload };
    case 'FETCH_COMMENTS':
      return { ...state, comments: action.payload };
    case 'FETCH_TODOS':
      return { ...state, todos: action.payload };
    case 'SET_DISPLAY':
      return { ...state, display: action.category };
    default:
      return state;
  }
};

function App() {
  // HOOKS
  // -- global state
  const [state, dispatch] = useReducer(reducer, initialState);

  // -- REFS
  let initialMount = useRef(true);

  // -- SIDE EFFECTS
  useEffect(() => {
    if (!initialMount.current) {
      (async () => {
        if (state.display === 'posts' && !state.posts.length) {
          // get posts
          const posts = await axios.get(
            'https://jsonplaceholder.typicode.com/posts'
          );
          dispatch({ type: 'FETCH_POSTS', payload: posts.data.slice(0, 3) });
          console.log('getting posts');
        } else if (state.display === 'comments' && !state.comments.length) {
          // get comments
          const comments = await axios.get(
            'https://jsonplaceholder.typicode.com/comments'
          );
          dispatch({
            type: 'FETCH_COMMENTS',
            payload: comments.data.slice(0, 3),
          });
          console.log('getting comments');
        } else if (state.display === 'todos' && !state.todos.length) {
          // get todos
          const todos = await axios.get(
            'https://jsonplaceholder.typicode.com/todos'
          );
          dispatch({ type: 'FETCH_TODOS', payload: todos.data.slice(0, 3) });
          console.log('getting todos');
        }
      })();
    }

    initialMount.current = false;
  }, [
    state.display,
    state.todos.length,
    state.comments.length,
    state.posts.length,
  ]);

  // -- CUSTOM FUNCTIONS
  const changeDisplayState = (dataType) => {
    dispatch({ type: 'SET_DISPLAY', category: dataType });
  };

  let content;
  if (state.display === 'posts') {
    content = state.posts.map((item) => (
      <ul key={item.id}>
        <li>{item.title}</li>
        <li>{item.body}</li>
      </ul>
    ));
  } else if (state.display === 'comments') {
    content = state.comments.map((item) => (
      <ul key={item.id}>
        <li>{item.email}</li>
        <li>{item.body}</li>
      </ul>
    ));
  } else if (state.display === 'todos') {
    content = state.todos.map((item) => (
      <ul key={item.id}>
        <li>{item.title}</li>
        <li>{item.completed ? 'Completed' : 'Not completed'}</li>
      </ul>
    ));
  } else {
    content = <p>Please select data to show</p>;
  }

  return (
    <>
      <DisplayContext.Provider value={{ changeDisplayState }}>
        <div>{content}</div>
        <CompA />
        <CompB />
        <CompC />
      </DisplayContext.Provider>
    </>
  );
}

export default App;
