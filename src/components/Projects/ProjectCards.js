import { Link } from 'react-router-dom';
import { getProjects } from '../../data/data';
const ProjectCards = () => {
  const projects = getProjects();
  return(
<div className="project-cards">
  {projects.map((project) => (
  <div key={project.Id} class="card">
      <Link to={`/projects/${project.id}`} alt={project.projectName}>
        <div className="column">
          <img
            src={`/images/preview/${project.prevImg}`}
            class="project-image"
            alt={project.projectName}
          />
        </div>
        <div class="slide-info">
          <p class="slide-header">{project.title}</p>
          <p class="slide-summary">{project.tagLine}</p>
        </div>
      </Link>
    </div>
  ))}
  </div>
  )
};

export default ProjectCards;


