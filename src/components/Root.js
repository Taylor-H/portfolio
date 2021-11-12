import React, { Component, useState } from 'react';
import ProjectList from './ProjectList';
import SingleProject from './SingleProject';
import About from './About';
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom';
import axios from 'axios';
import projects from '../../projectdata';

class Root extends React.Component {
  constructor() {
    super();
    this.state = {
      projects: [],
      error: null,
      loading: true,
    }
    this.fetchProjects = this.fetchProjects.bind(this);
  }
  async fetchProjects(){
    try{
      this.setState({loading: true})
      const {data} = await axios.get('/api/projects');
      this.setState({ projects: data, loading: false });
    } catch (err) {
      this.setState({ error: err.message, loading: false });
    }
  }
  componentDidMount() {
    this.fetchProjects();
  }
  render() {
    const { error, loading, projects } = this.state;
    return (
    <div id="app">
      <Router>
          {error && <div>Error: {error}</div>}
          {loading && <div>Loading</div>}
          <header>
            <div class="header">
              <div class="name-container logo">
                <a href="/">Taylor Hembree</a>
              </div>
              <input class="menu-btn" type="checkbox" id="menu-btn" />
              <label class="menu-icon" for="menu-btn">
                <span class="navicon"></span>
              </label>
                <ul class="menu">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><a href="/#contact">Contact</a></li>
              </ul>
              </div>
          </header>
        <Switch>
            <Route exact path="/projects" component={ProjectList} />
            <Route path="/projects/:id" component={SingleProject} />
            <Route exact path="/about" component={About} />
        </Switch>
      </Router>
    </div>













    );
  }
}

export default Root;
