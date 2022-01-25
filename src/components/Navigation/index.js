import React, { useState } from 'react';
import Sidebar from '../Sidebar';
import { NavLink } from 'react-router-dom';
import { MdClose } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';


const Navigation = () => {

  const [navbarOpen, setNavbarOpen] = useState(true);
  const handleToggle = () => setNavbarOpen(!navbarOpen);
    const closeMenu = () => setNavbarOpen(false);


  return (
    <aside className={`sidebar ${navbarOpen? 'open' : 'closed' }`}>
      {navbarOpen ? (
      <button className="hamburg-icon" onClick={closeMenu}>
        <MdClose style={{
              background: 'transparent',
              color: '#000000',
              width: '40px',
              height: '40px',
            }} />
      </button>
      ) : (
      <button className="hamburg-icon" onClick={handleToggle}>
        <FiMenu style={{
              background: 'transparent',
              color: '#000000',
              width: '40px',
              height: '40px',
            }} />
      </button>
      )}

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
