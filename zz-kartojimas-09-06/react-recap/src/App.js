import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PostsPage from './pages/PostsPage';

//Components
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/posts" component={PostsPage} />
      </Switch>
    </Router>
  );
}

export default App;
