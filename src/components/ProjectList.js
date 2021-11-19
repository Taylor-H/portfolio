import React from 'react';
// import SingleProject from './SingleProject';

const ProjectList = (props) => {
  // const { id, title, category, image_url } = project;
  // const [filter, setFilter] = useState("all")
  // console.log('from projectList', props.project)
  const { id, title, category } = props.project;

  return (
    <>
    <div key={id} className={category}>
      <button value={category}>{category}</button>
      {console.log(id)}
      <h6>{title}</h6>
      <div>{category}</div>
      {/* <img src={project.image_url} alt={project.title} /> */}
    </div>
    </>
  );
}
export default ProjectList;
