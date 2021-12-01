import React from 'react';
import { Link } from 'react-router-dom';


const Nav = () => {
  return(
<header>
<div className="header">
  <div className="name-container logo">
    <Link to="/">Taylor Hembree</Link>
  </div>
  <input className="menu-btn" type="checkbox" id="menu-btn" />
  <label className="menu-icon" htmlFor="menu-btn">
    <span className="navicon"></span>
  </label>
  <ul className="menu">
    <li>
      <NavLink to="/about">About</NavLink>
    </li>
    <li>
      <NavLink to="/project">Projects</NavLink>
    </li>
    <li>
      <NavLink to="/contact">Contact</NavLink>
    </li>
    <li>
      <NavLink to="/">Home</NavLink>
    </li>
  </ul>
</div>
</header>
  )};
export default Nav;
