import ProjectDetail from './ProjectDetail';
import FourOFour from '../FourOFour';
import ProjectCards from './ProjectCards';
import ProjectsNav from './ProjectsNav';
import { Route, Routes, Link, Outlet } from 'react-router-dom';
import './styles.css';


 const Layout = (props) => {
 const {projects} = props;
  return (
  <div className="outer-container">
    <div className="catNav-container">
      {props.categories.map((category) => (
      <ProjectsNav key={category.catId} category={category}projects={props.projects} />
    ))}
    </div>
  <div class="projects-container">
    <div className="projects-header">
    <h4 className='section-title'><Link to="/projects">&lt; projects</Link></h4>
    </div>


<ProjectCards projects={projects} />
</div>
  </div>

  )
}

  const Projects = (props) => {
    const {projects, categories} = props;
console.log('props from projects', props);
  return (
    <Routes>
      <Route index element={<Layout categories={categories} projects={projects} />} />
      <Route path=":projectId" element={<ProjectDetail projects={projects} categories={categories}/>} />
      <Route path ="*" element={<FourOFour projects={projects}/>} />
    </Routes>
      )
    };

export default Projects;


