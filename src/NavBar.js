import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';

function NavBar({ orgName, centerOnHome }) {
  return (
    <nav className={centerOnHome ? 'Portfolio-nav Portfolio-nav-home' : 'Portfolio-nav'}>
      <div className="Portfolio-orgname">{orgName}</div>
      <ul>
        <li>
          <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink>
        </li>
        <li>
          <NavLink to="/work" className={({ isActive }) => isActive ? 'active' : ''}>Work</NavLink>
        </li>
        <li>
          <NavLink to="/blog" className={({ isActive }) => isActive ? 'active' : ''}>Blog</NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar; 