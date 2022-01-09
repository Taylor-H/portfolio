import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.css';

const Navigation = () => {
  return(
  <ul className="menu">
    <li>
      <NavLink to="/about">About</NavLink>
    </li>
    <li>
      <NavLink to="/projects">Projects</NavLink>
    </li>
    <li>
      <NavLink to="/contact">Contact</NavLink>
    </li>
    <li>
      <NavLink to="/home">Home</NavLink>
    </li>
  </ul>
  )};
export default Navigation;
