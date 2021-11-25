import React, { Component } from 'react';
import Contact from './Contact';
import CategoryList from './CategoryList';
import ProjectList from './ProjectList';
import SingleCategory from './SingleCategory';
import SingleProject from './SingleProject';
import About from './About';
import Home from './Home';
import Nav from './Nav';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


  const Root = () => {
    return (
      <>
        <Nav />
        <Router>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/category" component={ProjectList} />
          <Route path="/category/:projectId" component={SingleProject} />
          <Route path="/contact" component={Contact} />
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
      </>
    );
  }

export default Root;
