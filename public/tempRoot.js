import React, { Component, useState } from 'react';
import ProjectList from './ProjectList';
import SingleProject from './SingleProject';
import About from './About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
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
          {error && <div>Error: {error}</div>}
          {loading && <div>Loading</div>}
          <header>
            <div className="header">
              <div className="name-container logo">
                <Link to="/">Taylor Hembree</a>
              </div>
              <input className="menu-btn" type="checkbox" id="menu-btn" />
              <label className="menu-icon" for="menu-btn">
                <span className="navicon"></span>
              </label>
                <ul className="menu">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/#contact">Contact</Link></li>
              </ul>
              </div>
          </header>
        <Switch>
            <Route exact path="/projects" component={ProjectList} />
            <Route path="/projects/:id" component={SingleProject} />
            <Route exact path="/about" component={About} />
        </Switch>
    </div>













    );
  }
}

export default Root;
