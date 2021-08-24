import React from 'react';
import Header from './Header';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-navigation">
        <Header />
      </div>
      <div>&copy; {new Date().getFullYear()}All rights reserved</div>
    </footer>
  );
};

export default Footer;
