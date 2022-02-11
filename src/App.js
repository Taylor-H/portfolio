import React, { useState } from 'react';
import Footer from './components/Navigation/Footer';
import Navigation from './components/Navigation';
import { Link, Outlet } from 'react-router-dom';
import { CloseMenuIcon, OpenMenuIcon, Button } from './components/Styled';

function App() {
  const [navbarOpen, setNavbarOpen] = useState(true);
  function handleChange(newValue) {
    setNavbarOpen(newValue);
  }


  // const winHeight = window.innerHeight;
  return (
    <>
      <header>
        <div className="header">
          <div className="name-container logo">
            <Link to="/">Taylor Hembree</Link>
          </div>
          <div className="hamburg-icon">
            {navbarOpen ? (
              <Button
                navbarOpen={navbarOpen}
                onClick={(navbarOpen) => setNavbarOpen(navbarOpen)}
              >
                <CloseMenuIcon />
              </Button>
            ) : (
              <Button
                navbarOpen={navbarOpen}
                onClick={(navbarOpen) => setNavbarOpen(navbarOpen)}
              >
                <OpenMenuIcon />
              </Button>
            )}
          </div>
        </div>
      </header>
      <div className="home-container">
        <div className={'flex-item-left open'}>
          <Outlet />
        </div>
        <div
          className={` ${
            navbarOpen ? 'flex-item-right open' : 'flex-item-right closed'
          }`}
        >
          <Navigation navbarOpen={navbarOpen} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
