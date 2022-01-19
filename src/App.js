import React from 'react';
import {  Container } from 'react-bootstrap';
import { getProjects, getCategories } from './data/data.js';
import Footer from './components/Navigation/Footer';
import Navigation from './components/Navigation';
// import ProjectsList from './components/ProjectsList';
import ProjectNav from './components/ProjectNav';
import {  Link, Outlet } from 'react-router-dom';
import './index.css';

function App() {
  const featured = getProjects().filter((project) => project.featured);
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
          <div className="spacer">
          </div>
            <ProjectNav projects={projects} categories={categories} />

        </div>
        <div className="flex-item-right">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
