import { useParams, Link } from 'react-router-dom';
import ProjectsNav from './ProjectsNav';
import FourOFour from '../FourOFour';
import ItemList from '../ItemList';
import './styles.css';

const ProjectDetail = (props) => {
console.log(props)
const projects = props.projects;
  let params = useParams();
const projectId = params.projectId;

const project = projects.find((project) => (project.id.toString() === projectId) ? project : null)

console.log('projectDetail', props);
const previewName = project? project.projectName: null;
  return (project)? (
    <div className="outer-container">
    <div className="catNav-container">
      {props.categories.map((category) => (
      <ProjectsNav key={category.catId} category={category}projects={props.projects} />
    ))}
    </div>



    <div className="single-project">
    <h4 className='breadcrumb-link'><Link to="/">&lt; Home</Link></h4>
      <div className="x-back"><Link to="/projects" alt="Back">X</Link></div>
      <div className="row">
      <div className='prevImg'><img src={`./images/preview/${project.prevImg}`} alt={project.title}></img></div>
      <div className='column'>
      <div className='project-title'>{project.title}</div>
      <div className='project-description'>{project.description}</div>
      <div className='project-links'>
        <h6>Open in a new tab.</h6>
        <ul>
          <li><a href={project.gitHub} target="_blank" rel="noopener noreferrer">Github</a></li>
          <li><a href={project.live} target="_blank" rel="noopener noreferrer">Live</a></li>
        </ul>
        </div>
      </div>

      </div>

        <div className="row">
      <ItemList itemName={'Role'} itemList={project.role} />
      <ItemList itemName={'Tech Stack'} itemList={project.tech} />
      </div>
    </div>

    </div>    ): (<FourOFour />)
    }


export default ProjectDetail;
