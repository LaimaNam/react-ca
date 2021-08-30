import './App.css';
import React, { useReducer, useEffect } from 'react';
import axios from 'axios';
//components
import CompA from './components/CompA';
import CompB from './components/CompB';
import CompC from './components/CompC';

// -- CONTEXT
export const DisplayContext = React.createContext();

// -- STATE MANAGEMENT
const initialState = {
  posts: [],
  comments: [],
  todos: [],
  display: '',
};

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
  //HOOKS
  // -- state hooks
  // state.comments -komentarai, state.todos - todos'ai ir t.t.
  const [state, dispatch] = useReducer(reducer, initialState);

  // -- side effects
  useEffect(() => {
    (async () => {
      // Posts
      let posts = await axios.get('https://jsonplaceholder.typicode.com/posts');
      dispatch({ type: 'FETCH_POSTS', payload: posts.data.slice(0, 3) });
      // comments
      let comments = await axios.get(
        'https://jsonplaceholder.typicode.com/comments'
      );
      dispatch({ type: 'FETCH_COMMENTS', payload: comments.data.slice(0, 3) });
      // todos
      let todos = await axios.get(
        'https://jsonplaceholder.typicode.com/comments'
      );
      dispatch({ type: 'FETCH_TODOS', payload: todos.data.slice(0, 3) });
    })();
    // get posts
  }, []);

  // -- refs
  // const ref = useRef(initialValue);

  //custom  functions
  const displayData = (dataType = '') => {
    const { posts, comments, todos, display } = state;

    if (dataType) dispatch({ type: 'SET_DISPLAY', category: dataType });

    switch (display) {
      case 'posts':
        return posts.map((post) => (
          <ul key={post.id}>
            <li>{post.title}</li>
            <li>{post.body}</li>
          </ul>
        ));
      case 'comments':
        return comments.map((comment) => (
          <ul key={comment.id}>
            <li>{comment.email}</li>
            <li>{comment.body}</li>
          </ul>
        ));
      case 'todos':
        return todos.map((todo) => (
          <ul key={todo.id}>
            <li>{todo.title}</li>
            <li>{todo.completed ? 'completed' : 'not completed'}</li>
          </ul>
        ));
      default:
        return <p>Please select data to show</p>;
    }
  };

  return (
    <>
      <div>{displayData()}</div>
      <DisplayContext.Provider value={{ displayData }}>
        <CompA />
        <CompB />
        <CompC />
      </DisplayContext.Provider>
    </>
  );
}

export default App;
