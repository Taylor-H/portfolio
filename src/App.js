import React from 'react';
import taylorsProjects from './data/taylorsProjects';
import Footer from './components/Navigation/Footer';
import Navigation from './components/Navigation';
import Projects from './components/Projects';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import { Route, Routes, Link } from 'react-router-dom';


function App() {
  const projects = taylorsProjects.projects;
  const categories = taylorsProjects.categories;
  return (
    <div className="App">
      <header>
        <div className="header">
          <div className="name-container logo">
            <Link to="/">Taylor Hembree</Link>
          </div>
          <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label className="menu-icon" htmlFor="menu-btn">
            <span className="navicon"></span>
          </label>
          <Navigation />
        </div>
      </header>
      <div className="page-wrapper">
        <Routes>
          <Route path="/" element={<Home projects={projects} categories={categories} />} />
          <Route
            path="projects/*"
            element={<Projects projects={projects} categories={categories}/>} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </div>
      <div className="footer"><Footer /></div>
    </div>

  );
}

export default App;
