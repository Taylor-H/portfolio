// import SingleProject from './SingleProject';
import React,{ useState } from 'react';
const ProjectList = (props) => {
  // const { id, title, category, image_url } = project;
  const [filter, setFilter] = useState('all');
  const { handleDelete } = props;
  const handleSelectChange = (evt) => {
    setFilter(evt.target.value);
  };
  console.log('from projectList', props)
  const projects = props.projects.filter((project) => {
    if (filter === 'all') return project;
    if (filter === 'app') return project.category === 'app';
    if (filter === 'game') return project.category === 'game';
    if (filter === 'code') return project.category === 'code';
  });

console.log(props)
  return (
    <>

      <label htmlFor="categoryFilter">Filter by category: </label>
      {console.log(props)}
        <button onclick={handleSelectChange} value="app" name='categoryFilter'>app</button>
      <div key={props.project.id} className={category}>
        <h6>{project.title}</h6>
        <div className={project.category}>{project.category}</div>
        {/* <img src={project.image_url} alt={project.title} /> */}
      </div>
    </>
  );
};
export default ProjectList;
