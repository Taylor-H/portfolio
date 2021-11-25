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
   <Router>
        <Switch>
            <Route path="/projects" component={ProjectList} />
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
        </Switch>
 </Router>













    );
  }
}
//functional style
export default Root;
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


{/* // const [categories, setCategories] = useState([]);
// const [projects, setProjects] = useState([]);
// const [error, setError] = useState(null);
// const [loading, setLoading] = useState(true);
// const [fetchCounter, setFetchCounter] = useState(0);

// useEffect(() => {
//   (async function () {
//     try {
//       const { data: projects } = await axios.get('/');
//       setProjects(projects);
//       console.log('projects from useEffect func', projects);
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   })();
// }, [fetchCounter]);
// const refetch = () => setFetchCounter(fetchCounter + 1);
*/}
