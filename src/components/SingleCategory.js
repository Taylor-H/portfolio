import React from 'react';

const SingleCategory = (props) => {
  console.log('SingleCategory', props)
  return (
    <React.Fragment>
      {props.projects.map((project) => {
        return (
          <li key={project.id} className="project-list-item">
            <a href='/project/:id'>  {project.title}
            {project.short_description}</a>
          </li>
        );
      })}
    </React.Fragment>
  );
};

export default SingleCategory;
