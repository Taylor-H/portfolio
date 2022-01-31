import React from 'react';
import { Link } from 'react-router-dom';
import { getProjects } from '../../data/data-test';


const ProjectCards = () => {
  const projects = getProjects();
  return (
    <div className="project-cards">
      {projects.map((project) => (
        <div key={project.id.toString()} className="proj-card">
          <Link to={`/projects/${project.id}`} alt={project.projectName}>
            <div className="proj-column">
              <p className="slide-header">{project.title}</p>
              <img
                src={`/images/preview/${project.images.prevImg}`}
                className="project-image"
                alt={project.projectName}/>
            <div className="slide-info">
              <p className="slide-summary">{project.tagLine}</p>
            </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProjectCards;


