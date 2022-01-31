import React,{ useState} from 'react';
import Footer from './components/Navigation/Footer';
import Navigation from './components/Navigation';
import { Link, Outlet } from 'react-router-dom';
import { CloseMenuIcon, OpenMenuIcon, Button } from './components/Styled';

function App() {
  const [navbarOpen, setNavbarOpen] = useState(true);
  const openMenu = () => setNavbarOpen(true);
  const closeMenu = () => setNavbarOpen(false);
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
              <Button onClick={closeMenu}>
                <CloseMenuIcon />
              </Button>
            ) : (
              <Button onClick={openMenu}>
                <OpenMenuIcon />
              </Button>
            )}
          </div>
        </div>
      </header>
      <div className="home-container">
        <div className="flex-item-right">
          <Outlet />
        </div>
        <div
          className={` ${
            navbarOpen ? 'flex-item-left open' : 'flex-item-left closed'
          }`}
        >
          <Navigation />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
