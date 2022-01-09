import React from 'react';
import { getProjects, getCategories } from './data/data.js';
import Footer from './components/Navigation/Footer';
import Navigation from './components/Navigation';
// import ProjectsNav from './components/Projects/ProjectsNav';
// import Projects from './components/Projects';
// import ProjectDetail from './components/Projects/ProjectDetail';
import ProjectsList from './components/ProjectsList';
import FourOFour from './components/FourOFour';
import { Route, Routes, Link, Outlet } from 'react-router-dom';
import './index.css';

function App() {
  let projects = getProjects();
  let categories = getCategories();
  console.log(' from App', projects, categories);
  return (
    <div className="page-wrapper">
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
      <div className="home-container">
        <div className="flex-item-left">
          <div className="projects">
          </div>
            <div className="post-wrapper">
              {categories.map((category) => (
                <ProjectsList
                  key={category.catId}
                  projects={projects}
                  category={category}
                />
                // <h1 >{category.shortDisplay}</h1>
              ))}

          </div>
        </div>
        <div className="flex-item-right">
          <Outlet />
        </div>
        <Footer />
      </div>
      <div className="spacer"></div>
    </div>
  );
}

export default App;
