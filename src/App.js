import React from 'react';
import taylorsProjects from './data/taylorsProjects';
import Navigation from './components/Navigation';
import ProjectHome from './components/ProjectHome';
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
      <Route exact path="/" element={<Home projects={projects} categories={categories} />} />
      <Route path="/projects" element={<ProjectHome projects={projects} />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/contact" element={<Contact />} />

    </Routes>
      </div>
    </div>
  );
}

export default App;
