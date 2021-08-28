import './App.css';
// import ClassCounter from './components/Class/ClassCounter';
// import { FuncCounter } from './components/Functional/FuncCounter';

// -- router
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// -- components
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';

function App() {
  return (
    <div className="App">
      {/* <ClassCounter />
      <FuncCounter /> */}

      <Router>
        <Header />
        <Main>
          <Switch>
            <Route exact path="/" component={HomeScreen} />
            <Route path="/about" component={AboutScreen} />
          </Switch>
        </Main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
