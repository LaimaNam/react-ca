import './App.css';
// import Counter1 from './hooks/Counter1';
// import Form from './hooks/Form';
// import Users from './hooks/Users';

// import Products from '../Products/Products';
// import MoodChecker from './hooks/MoodChecker';

//For basic navigation React Router needs 3 things: Router, Switch, Route and Link(should be used in navigation like in this example - in Header.js)
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from '../../Router/components/Header';
import AboutScreen from '../../Router/screens/AboutScreen';
import HomeScreen from '../../Router/screens/HomeScreen';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route path="/about" component={AboutScreen} />
        </Switch>
      </Router>

      {/* <main>
        <section><Products heading="Best Selers" /></section>
      </main>
      <footer></footer> */}
    </>
  );
}

export default App;
//  {/* <Counter1 /> */}
// {/* <Users /> */}
// {/* <Form /> */}
// {/* <MoodChecker /> */}
