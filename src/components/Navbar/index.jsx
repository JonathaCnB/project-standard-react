import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuthemtication } from '../../hooks/useAuthentication';
import { useAuthValue } from '../../context/AuthContext';
import * as Styled from './styles';

const Navbar = () => {
  const { user } = useAuthValue();
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
        {!user && (
          <>
            <li>
              <NavLink
                to="/login"
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                Entrar
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/register"
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                Cadastrar
              </NavLink>
            </li>
          </>
        )}
        {user && (
          <>
            <li>
              <NavLink
                to="/posts/create"
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                Novo Post
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard"
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                Painel
              </NavLink>
            </li>
          </>
        )}
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
