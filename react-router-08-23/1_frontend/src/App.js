import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicePage from './pages/ServicePage';
import ContactPage from './pages/ContactPage';
import TeamMemberPage from './pages/TeamMemberPage';

//Components
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Router>
        <Header />

        <Switch>
          <Route exact path="/" component={HomePage} />

          <Route exact path="/about" component={AboutPage} />

          <Route path="/about/:id" component={TeamMemberPage} />

          <Route path="/service" component={ServicePage} />

          <Route path="/contact" component={ContactPage} />
        </Switch>

        <Footer />
      </Router>
    </>
  );
}

export default App;
