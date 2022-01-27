import React,{ useState} from 'react';
import Footer from './components/Navigation/Footer';
import Navigation from './components/Navigation';
import { Link, Outlet } from 'react-router-dom';
import { MdCloseIcon, FiMenuIcon } from './components/Styled';

function App() {
  const [navbarOpen, setNavbarOpen] = useState(true);
  const openMenu = () => setNavbarOpen(true);
  const closeMenu = () => setNavbarOpen(false);
  // const winHeight = window.innerHeight;
  return (
    <div className="page-wrapper">
      <header>
        <div className="header">
          <div className="name-container logo">
            <Link to="/">Taylor Hembree</Link>
          </div>
          <div className="hamburg-icon">
            {' '}
            {navbarOpen ? (
              <button className="hamburg-icon closeIcon" onClick={closeMenu}>
                <MdCloseIcon />
              </button>
            ) : (
              <button className="hamburg-icon open" onClick={openMenu}>
                <FiMenuIcon />
              </button>
            )}
          </div>
        </div>
      </header>
      <div className="home-container">
        <div className="flex-item-right">
          <Outlet />
        </div>
        <div className={`flex-item-left ${navbarOpen ? 'open' : 'closed'}`}>
          <Navigation />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;

            /*function App() {
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
 <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label className="menu-icon" htmlFor="menu-btn">
            <span className="navicon"></span>
          </label> */
