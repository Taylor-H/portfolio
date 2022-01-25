import React from 'react';
import Footer from './components/Navigation/Footer';
import Navigation from './components/Navigation';
import Sidebar from './components/Sidebar';
import { Link, Outlet } from 'react-router-dom';


function App() {
  // const winHeight = window.innerHeight;
  return (
    <div className="page-wrapper">
      <header>
        <div className="header">
          <div className="name-container logo">
            <Link to="/">Taylor Hembree</Link>
          </div>
        </div>
      </header>
      <div className="home-container">
        <div className="flex-item-left">
          <Navigation />
        </div>
        <div className="flex-item-right">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;

            /* <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label className="menu-icon" htmlFor="menu-btn">
            <span className="navicon"></span>
          </label> */
