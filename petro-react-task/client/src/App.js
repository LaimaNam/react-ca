import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import ProtectedRoutes from './ProtectedRoutes';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route path="/admin" component={ProtectedRoutes} />
      </Switch>
    </Router>
  );
}

export default App;
