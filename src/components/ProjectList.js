import React from 'react';
import SingleProject from './SingleProject';

class ProjectList extends React.Component {
  constructor() {
    super();
    this.state = {
      filter: 'all',
    };
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }
  handleSelectChange(evt) {
    this.setState({ filter: evt.target.value });
  }
  render() {
    const { filter } = this.state;
    const { handleDelete } = this.props;

    const projects = this.props.projects.filter((project) => {
      if (filter === 'all') return project;
      if (filter === 'Included!') return project.include === 'Included!';
      if (filter === 'Include') return project.include === 'Include';
    });

    return (
      <>
        <div>
          <label htmlFor="includedFilter">Filter by species: </label>
          <select
            onChange={this.handleSelectChange}
            value={filter}
            name="includedFilter"
          >
            <option>all</option>
            <option>Included</option>
            <option>Excluded</option>
          </select>
        </div>
        <div className="project-list">
          {projects.map((project) => {
            return (
              <SingleProject key={project.title} project={project}handleDelete={handleDelete} />
            );
          })}
        </div>
      </>
    );
  }
}

export default ProjectList;
