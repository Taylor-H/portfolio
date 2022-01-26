import React, { useState } from 'react';
import Sidebar from '../Sidebar';
import { NavLink } from 'react-router-dom';



const Navigation = () => {
  return (
    <aside className="sidebar">
      <div className="categories">
        <Sidebar />
      </div>
    </aside>
  );
}
export default Navigation;

        /* <ul className={`menuNav ${navbarOpen ? ' showMenu' : ''}`}>
        <li>
          <NavLink
            to="/projects"
            activeclassname="active-link"
            onClick={closeMenu}
          >
            Projects
          </NavLink>
        </li>
        <li>
          <Sidebar />
        </li>
        <li>
          <NavLink
            to="/about"
            activeclassname="active-link"
            onClick={closeMenu}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            activeclassname="active-link"
            onClick={closeMenu}
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink to="/" activeclassname="active-link" onClick={closeMenu}>
            Home
          </NavLink>
        </li>
      </ul> */
