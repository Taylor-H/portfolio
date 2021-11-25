import React from 'react';
import { Link } from 'react-router-dom';

const SingleCategory = (props) => {
  const { category, projects } = props;
  return (
    <React.Fragment>
      {props.projects.map((project) => {
        return (
          <li key={project.id} className="project-list-item">
            <Link to={`/category/${project.id}`}>  {project.title}
            {project.short_description}</Link>
          </li>
        );
      })}
    </React.Fragment>
  );
};

export default SingleCategory;
