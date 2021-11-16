import React from 'react';
import {Link } from 'react-router-dom';


const Nav = () => {
  return(
<header>
<div className="header">
  <div className="name-container logo">
    <a href="/">Taylor Hembree</a>
  </div>
  <input className="menu-btn" type="checkbox" id="menu-btn" />
  <label className="menu-icon" htmlFor="menu-btn">
    <span className="navicon"></span>
  </label>
  <ul className="menu">
    <li>
      <Link to="/about">About</Link>
    </li>
    <li>
      <Link to="/projects">Projects</Link>
    </li>
    <li>
      <Link to="/#contact">Contact</Link>
    </li>
    <li>
      <Link to="/">Home</Link>
    </li>
  </ul>
</div>
</header>
  )};
export default Nav;
