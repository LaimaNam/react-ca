////For basic navigation React Router uses Link to open new routes(Router, Switch and Route used in app.js)
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div>Logo</div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
