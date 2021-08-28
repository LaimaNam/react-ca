import './App.css';
import React, { useReducer, createContext } from 'react';
import axios from 'axios';

//components
import CompA from './components/compA/CompA';
import CompB from './components/compB/CompB';
import CompC from './components/compC/CompC';

// context
export const DataContext = createContext();

// initial state
const initialDataState = {
  whatToRender: '',
};

// useReducer reducer function to manage initialClickState
const dataReducer = (state, action) => {
  switch (action.type) {
    case 'POSTS':
      return { whatToRender: 'posts' };
    case 'COMMENTS':
      return { whatToRender: 'comments' };
    case 'TODOS':
      return { whatToRender: 'todos' };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(dataReducer, initialDataState);

  axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
    return response.data;
  });

  return (
    <div className="App">
      <DataContext.Provider value={{ state, dispatch }}>
        <h1>Posts, comments or todos:</h1>
        {console.log(state.whatToRender)}
        <div>{state.whatToRender === 'posts' && <h1>posts rendered</h1>}</div>
        <div></div>
        <div> ----- ------ ------ </div>
        <CompA />
        <CompB />
        <CompC />
      </DataContext.Provider>
    </div>
  );
}

export default App;
