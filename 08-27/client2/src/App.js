import './App.css';
import React, { useReducer, createContext } from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//components
import Header from './components/Header';
import Footer from './components/Footer';
//screens
import HomeScreen from './screens/HomeScreen';
import RegisterScreen from './screens/RegisterScreen';
import AccountScreen from './screens/AccountScreen';

//Context
export const UserContext = createContext();

//Global state
const initialState = { user: { name: '' } };

const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { user: { name: action.name } };
    case 'LOGOUT':
      return { user: { name: '' } };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <UserContext.Provider value={{ state, dispatch }}>
        <Router>
          <Header />
          <main>
            <Switch>
              <Route exact path="/" component={HomeScreen} />
              <Route path="/register" component={RegisterScreen} />
              <Route path="/account" component={AccountScreen} />
            </Switch>
          </main>
          <Footer />
        </Router>
      </UserContext.Provider>
    </>
  );
}

export default App;
