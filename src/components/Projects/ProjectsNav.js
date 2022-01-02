
import { Link } from 'react-router-dom';
import './styles.css';
import React, { useState, useRef } from "react";



const ProjectsNav = (props) => {
  const {category, projects} = props;


  return (
    <div className="accordion__section">
    <button className="project__accordion">
      <p className="port-header">{category.shortDisplay}</p>

    </button>
      {projects.map((project) => (
        <div key={project.id}>
          {project.category === category.catName ? (
           <button className="project__content"><Link to={`/projects/${project.id}`}>
             <div className="project__text">{project.title}</div>
            </Link></button>
          ) : null}
        </div>
      ))}
    </div>
  );

          }
export default ProjectsNav;
