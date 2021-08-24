import React from 'react';
import Header from './Header';

const Footer = () => {
  return (
    <footer>
      <div>
        <Header />
      </div>
      <div>&copy; {new Date().getFullYear()}All rights reserved</div>
    </footer>
  );
};

export default Footer;
