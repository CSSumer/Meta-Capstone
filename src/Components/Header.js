import React from 'react';
import Lit from '/Users/sumersinghkang/Desktop/Final Project/littleleomon/src/Asset/Logo.svg'
import Nav from './Nav.js';

const Header = () => {
  return (
    <header>
      <img src={Lit} alt = "Little Lemon Logo" />
    <Nav />
    </header>
  );
};

export default Header;
