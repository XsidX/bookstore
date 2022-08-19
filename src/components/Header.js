/* eslint-disable react/jsx-curly-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-confusing-arrow */
import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header className="header">
    <h1 className="header-heading">Bookstore CMS</h1>
    <nav className="header-nav">
      <NavLink
        className={(navData) =>
          navData.isActive ? 'header-nav-active-link' : 'header-nav-link'
        }
        to="/home"
      >
        Home
      </NavLink>
      <NavLink
        className={(navData) =>
          navData.isActive ? 'header-nav-active-link' : 'header-nav-link'
        }
        to="/categories"
      >
        Categories
      </NavLink>
    </nav>
  </header>
);

export default Header;
