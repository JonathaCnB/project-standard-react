import React from 'react';
import { NavLink } from 'react-router-dom';
import * as Styled from './styles';

const Navbar = () => {
  return (
    <Styled.Navbar>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? 'brand' : 'brand')}
      >
        Mini <span>Blog</span>
      </NavLink>
      <ul className="links_lists">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Sobre
          </NavLink>
        </li>
      </ul>
    </Styled.Navbar>
  );
};

export default Navbar;
