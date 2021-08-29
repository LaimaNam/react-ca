import './App.css';
import React, { useReducer, createContext, useEffect } from 'react';

// -- components
import CompA from './components/compA/CompA';
import CompB from './components/compB/CompB';
import CompC from './components/compC/CompC';

// --  context
export const DataContext = createContext();

// initial state
const initialDataState = {
  dataArray: [],
  whatToLoad: '',
  whatToRender: '',
};

// -- useReducer reducer function to manage initialClickState
const dataReducer = (state, action) => {
  console.log('reducer: invoked for action: ', action);
  console.log('reducer: current state is: ', state);

  switch (action.type) {
    case 'POSTS_CLICKED':
      return {
        whatToLoad: 'posts',
      };
    case 'COMMENTS_CLICKED':
      return {
        whatToLoad: 'comments',
      };
    case 'TODOS_CLICKED':
      return {
        whatToLoad: 'todos',
      };
    case 'POSTS_LOADED':
      return {
        dataArray: action.data,
        whatToRender: 'posts',
      };
    case 'COMMENTS_LOADED':
      return {
        dataArray: action.data,
        whatToRender: 'comments',
      };
    case 'TODOS_LOADED':
      return {
        dataArray: action.data,
        whatToRender: 'todos',
      };
    default:
      return state;
  }
};

// data URLS
const TODOS_URI = 'https://jsonplaceholder.typicode.com/todos';
const COMMENTS_URI = 'https://jsonplaceholder.typicode.com/comments';
const POSTS_URI = 'https://jsonplaceholder.typicode.com/posts';

// -- custom functions
const getData = (url) => {
  return fetch(url)
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => console.log(err));
};

function App() {
  // -- hooks
  // -- global hooks
  const [state, dispatch] = useReducer(dataReducer, initialDataState);

  // -- getting data from API
  useEffect(() => {
    // console.log('use effect called', state);
    (async () => {
      if (state.whatToLoad === 'posts') {
        const dataArr = await getData(POSTS_URI);

        console.log('fetch', dataArr);

        dispatch({ data: dataArr, type: 'POSTS_LOADED' });
      } else if (state.whatToLoad === 'todos') {
        const dataArr = await getData(TODOS_URI);

        console.log('fetch', dataArr);

        dispatch({ data: dataArr, type: 'TODOS_LOADED' });
      } else if (state.whatToLoad === 'comments') {
        const dataArr = await getData(COMMENTS_URI);

        console.log('fetch', dataArr.splice(0, 3));

        dispatch({ data: dataArr, type: 'COMMENTS_LOADED' });
      }
    })();
  }, [state.whatToLoad]);

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      <div className="App">
        <h1>Posts, comments or todos:</h1>
        {/* comments rendering */}
        {console.log('component render state data array: ', state)}
        <div>
          {state.dataArray && state.whatToRender === 'comments' ? (
            <ul>
              {state.dataArray.splice(0, 3).map((comment) => (
                <>
                  <li>Name: {comment.name}</li>
                  <li>Email: {comment.email}</li>
                  <li>Comment: {comment.body}</li>
                </>
              ))}
            </ul>
          ) : null}
          {/* posts rendering*/}
          {state.dataArray && state.whatToRender === 'posts' ? (
            <ul>
              {state.dataArray.splice(0, 3).map((post) => (
                <>
                  <li>Post title: {post.title}</li>
                  <li>Post: {post.body}</li>
                </>
              ))}
            </ul>
          ) : null}
          {/* rodos rendering */}
          {state.dataArray && state.whatToRender === 'todos' ? (
            <ul>
              {state.dataArray.splice(0, 3).map((todo) => (
                <>
                  <li>Todo title:{todo.title}</li>
                  <li>{todo.completed ? 'completed' : 'not completed'}</li>
                </>
              ))}
            </ul>
          ) : null}
        </div>
        <div></div>
        <hr />

        <CompA />
        <CompB />
        <CompC />
      </div>
    </DataContext.Provider>
  );
}

export default App;
