import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import logo2 from './assets/logo2.png';

//Pages
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import NewsPage from './pages/NewsPage';
import PortfolioPage from './pages/PortfolioPage';
import ServicePage from './pages/ServicePage';

function App() {
  return (
    <div className="App">
      <>
        <Router>
          <div className="top-navigation-wrapper">
            <div>
              <img src={logo2} alt="Logo" />
            </div>
            <Header />
          </div>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/news" component={NewsPage} />
            <Route path="/service" component={ServicePage} />
            <Route path="/portfolio" component={PortfolioPage} />
            <Route path="/contact" component={ContactPage} />
          </Switch>

          <Footer />
        </Router>
      </>
    </div>
  );
}

export default App;
