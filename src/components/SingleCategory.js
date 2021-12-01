import React from 'react';
import { Link } from 'react-router-dom';

const SingleCategory = (props) => {
  return (
    <>
      {props.projects.map((project) => {
        console.log('from SingleCategory render', project);
        return (
          <li key={project.id} className="project-list-item">
            <Link to={`/project/${project.id}`}>{project.title}: {project.short_description}</Link>
          </li>
        );
      })}
      </>
  );
};

export default SingleCategory;
