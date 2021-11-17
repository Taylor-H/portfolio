import React from 'react';
import SingleProject from './SingleProject';
import { getProjects } from '../../data/projectdata';
class ProjectList extends React.Component {
  componentDidMount() {
    this.props.getProjects()
  }
  render() {
    const projects =this.props.projects;
    return(
      <div>
        {projects.map((project) => {
          <div key={project.id}>
          <h2>project: {project.title}</h2>
          <p>{project.description}</p>
          </div>
        })}
     </div> )
}
}
export default ProjectList;
