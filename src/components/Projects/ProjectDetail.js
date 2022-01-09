import { useParams, Link } from 'react-router-dom';
import { getProjects } from '../../data/data';
import FourOFour from '../FourOFour';
import ItemList from '../ItemList';
import './styles.css';

const ProjectDetail = () => {
  const projects = getProjects();
  let params = useParams();
  const projectId = params.projectId;

  const project = projects.find((project) =>
    project.id.toString() === projectId ? project : null
  );

  // console.log('projectDetail', project);
  // const previewName = project ? project.projectName : null;
  return project ? (
    <div className="project-card">
      <div className="x-back">
        <Link to="../../projects" alt="Back">
          X
        </Link>
      </div>
      <div className="row end">
        <span className="project-title">{project.title}</span>
        <div className="prevImg">
          <img src={`./images/preview/${project.prevImg}`} alt={project.title} />
        </div>
        </div>
        <div className="row">
      <div className="column">
        <div className="project-description">{project.description}</div>
        <div className="project-links">
          <h6>Open in a new tab.</h6>
          <ul>
            <li>
              <a
                href={project.gitHub}
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </li>
            <li>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live
              </a>
            </li>
          </ul>
        </div>
      </div>

      </div>

      <div className="row">
        <ItemList itemName={'Role'} itemList={project.role} />
        <ItemList itemName={'Tech Stack'} itemList={project.tech} />
      </div>
      {/* </div> */}
    </div>
  ) : (
    <FourOFour />
  );
};

export default ProjectDetail;
