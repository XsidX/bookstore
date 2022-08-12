import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <nav>
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/categories">Categories</NavLink>
    </nav>
  </header>
);

export default Header;
