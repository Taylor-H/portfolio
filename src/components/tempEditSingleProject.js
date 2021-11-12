import React, { useEffect, useState } from 'react';
import ProjectList from './ProjectList';
import axios from 'axios';

// We'll render these sample Projects for now. Later, we'll instead fetch the list
// of Projects from the server! We won't need sampleProjects after that.
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
    this.handleDelete = this.handleDelete.bind(this);
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

  handleDelete(id) {
    // Refetch after delete:
    // this.fetchProjects()

    // Remove from state:
    this.setState((prevState) => ({
      projects: prevState.projects.filter((project) => project.id !== id),
    }));
  }


  render() {
    const { error, loading, projects } = this.state;
    const { handleDelete } = this;
    return (
      <>
        {error && <div>Error: {error}</div>}
        {loading && <div>Loading</div>}
        <h1>Projects</h1>
        <ProjectList projects={projects} handleDelete={handleDelete} />
      </>
    );
  }
}

export default Root;
