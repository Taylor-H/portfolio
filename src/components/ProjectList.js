import React from 'react';
// import SingleProject from './SingleProject';

const ProjectList = (props) => {
  // const { id, title, category, image_url } = project;
  // const [filter, setFilter] = useState("all")
  console.log('from ProjectList', props);
  props.projects.map((project) => {
  return (
    <div key={project.id} className="project-title">
      <button value={project.categoryId}>{project.title}</button>
      <div>{project.short_description}</div>
    </div>

  )
}

)

}
export default ProjectList
