// import Counter1 from './hooks/Counter1';
// import Form from './hooks/Form';
// import Users from './hooks/Users';

// import Products from '../Products/Products';
// import MoodChecker from './hooks/MoodChecker';

//For basic navigation React Router needs 3 things: Router, Switch, Route and Link(should be used in navigation like in this example - in Header.js)
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Header from '../../Router/components/Header';
// import AboutScreen from '../../Router/screens/AboutScreen';
// import HomeScreen from '../../Router/screens/HomeScreen';

//Adding styles to create-react-app
// import Cards from '../../STYLING-in-cra/BEM/Cards/Cards';
// import Hero from '../../STYLING-in-cra/CSSmodules/Hero/Hero';
// import Hero from '../../STYLING-in-cra/StyledComponents/Hero';
import CardComponent from '../../STYLING-in-cra/Bootstrap/CardComponent';
import './App.css'; //global css
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <CardComponent />
      {/* <Hero /> */}
      {/* <Hero /> */}
      {/* <Cards
        sectionTitle="Services"
        cardsArray={[
          {
            title: 'Service 1',
            content: 'Best service 1 ever',
            buttonText: 'Learn more',
          },
          {
            title: 'Service 2',
            content: 'Best service 2 ever',
            buttonText: 'Learn more',
          },
          {
            title: 'Service 3',
            content: 'Best service 3 ever',
            buttonText: 'Learn more',
          },
        ]} */}
      {/* /> */}
      {/* <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route path="/about" component={AboutScreen} />
        </Switch>
      </Router> */}
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
