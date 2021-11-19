import React from 'react';
import About from './about';
import Home from './home';
// import Contact from './contact';
import ProjectList from './ProjectList';
import SingleProject from './SingleProject';
import Nav from './Nav';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const Root = () => {
  return (
    <>
      <Nav />
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/projects" component={ProjectList} />
        <Route path="/projects/:id" component={SingleProject} />
        <Route path="/contact" />
        <Route exact path="/" component={Home} />
      </Switch>
    </>
  );
};

export default Root;
