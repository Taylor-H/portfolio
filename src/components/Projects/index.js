import { Link, Outlet } from 'react-router-dom';
import './styles.css';

const Projects = () => {
  return (
    <div className="projects-container">
      <h4 className='breadcrumb-link'><Link to="/">&lt; Home</Link></h4>
    <Outlet />
</div>

)
};

export default Projects;
