import { Link } from 'react-router-dom';
import { getProjects } from '../../data/data';
const ProjectCards = () => {
  const projects = getProjects();
  return(
<div className="project-cards">
  {projects.map((project) => (
  <div key={project.id.toString()} className="proj-card">
    <Link to={`/projects/${project.id}`} alt={project.projectName}>
    <div className="proj-column">
      <img src={`/images/preview/${project.prevImg}`} className="project-image" alt={project.projectName} />
    </div>
    <div className="slide-info">
      <p className="slide-header">{project.title}</p>
      <p className="slide-summary">{project.tagLine}</p>
    </div>
    </Link>
  </div>
  ))}
</div>
  )
};

export default ProjectCards;


