import React from 'react';
import SingleProject from './SingleProject';
import { getProjects } from '../../data/projectdata'
class ProjectList extends React.Component {
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
      const { data: projects } = await axios.get('/api/projects');
      this.setState({ projects: data, loading: false });
    } catch (err) {
      this.setState({ error: err.message, loading: false });
    }
  }

  componentDidMount() {
  this.fetchProjects();
  }
  render() {
const { projects, loading, error } = this.state;
    // const { filter } = this.state;
    // const { handleDelete } = this.props;
// console.log(this.state.projects)
<div className="project-list">
  {this.projects.map((project) => {
      // if (filter === 'all') return project;
      // if (filter === 'Full Stack') return project.stack === 'Full Stack';
      // if (filter === 'Front End') return project.stack === 'Front End';
    // });

    return (
      <>
        <SingleProject project={this.project} key={project.id} />
      </>
    );
  }
  )}
</div>
  }
}

export default ProjectList;


