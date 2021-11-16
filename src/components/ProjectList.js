import React from 'react';
import SingleProject from './SingleProject';

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
      const { data } = await axios.get('/api/projects');
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
console.log(projects)
    // .map((project) => {
      // if (filter === 'all') return project;
      // if (filter === 'Full Stack') return project.stack === 'Full Stack';
      // if (filter === 'Front End') return project.stack === 'Front End';
    // });

    return (
      <>
        {/* <div className="post">
          <label htmlFor="includedFilter">Filter by species: </label>
          <select
            onChange={this.handleSelectChange}
            value={filter}
            name="includedFilter"
          >
            <option>all</option>
            <option>Full Stack</option>
            <option>Front End</option>
          </select>
        </div> */}
        <div className="project-list">
          {console.log(this.projects)}
          {this.projects.map((project) => {
            return (
              {title}

              // <SingleProject key={project.id} />
            );
          })}
        </div>
      </>
    );
  }
}

export default ProjectList;


