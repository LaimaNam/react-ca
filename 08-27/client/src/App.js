import './App.css';
import React, { useReducer } from 'react';

// -- Components
// import Counter from './components/Counter';
import CompA from './components/CompA';
import CompB from './components/CompB';
import CompC from './components/CompC';

//Context (for managing global state)
export const ClicksContext = React.createContext();

// useReducer initial state
const initialClickState = { clicks: 0 };
// useReducer reducer function to manage initialClickState
const clickReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { clicks: state.clicks + 1 };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(clickReducer, initialClickState);

  return (
    <div className="App">
      <ClicksContext.Provider value={{ dispatch }}>
        <h1>
          Buttons clicked <u>{state.clicks}</u> times in total
        </h1>
        <CompA />
        <CompB />
        <CompC />
      </ClicksContext.Provider>
      {/* <Counter /> */}
    </div>
  );
}

export default App;
