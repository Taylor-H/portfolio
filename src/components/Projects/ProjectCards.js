import React from 'react';
import { Link } from 'react-router-dom';
import { getProjects } from '../../data/data';


const ProjectCards = () => {
  const projects = getProjects();
  return (
    <div className="project-cards">
      {projects.map((project) => (
        <div key={project.id.toString()} className="proj-card">
          <Link to={`/projects/${project.id}`} alt={project.projectName}>
            <div className="proj-column">
              <p></p>
              <img
                src={`/images/preview/${project.images.prevImg}`}
                className="project-image"
                alt={project.projectName}
              />
              <span className="mini-title">
                <b>{project.title}</b> {project.tagLine}
              </span>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProjectCards;


