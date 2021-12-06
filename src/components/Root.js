import React, { Component } from 'react';
import Contact from './Contact';
import CategoryList from './CategoryList';
import ProjectList from './ProjectList';
import SingleCategory from './SingleCategory';
import SingleProject from './SingleProject';
import About from './About';
import Home from './Home';
import Nav from './Nav';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Category from '../../db/models/categories';

const Root = () => {
  return (

      <div>
        <Nav />
        <div>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route exact path="/project">
            <CategoryList />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/project/:projectId">
            <SingleProject project={this.state.project} />
          </Route>
          </div>
      </div>
  );
};

export default Root;
