import { Link } from 'react-router-dom';
const ProjectCards = ({ projects }) => {
  return(
<>
  {projects.map((project) => (<div key={project.Id} class="post">
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
  </>
  )
};

export default ProjectCards;


