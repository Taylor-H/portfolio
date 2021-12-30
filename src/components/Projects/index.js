import SingleProject from '../SingleProject';
import ProjectsHome from './ProjectsHome';
import { Route, Routes } from 'react-router-dom';
import FourOFour from '../FourOFour';

import './styles.css';

// const getCategory = ( catId) => {
//   return taylorsProjects.categories.find(({  category }) =>  category.catId ===  catId);
// }




  const Projects = (props) => {
    const {projects, categories} = props;
console.log('props from projects', props);
  return (
    <Routes>
      <Route path="/*" element={<ProjectsHome projects={projects} categories={categories} />} />
      <Route path=":projectId" element={<SingleProject projects={projects}/>} />
      <Route path =":projectId/*" element={<FourOFour projects={projects}/>} />
    </Routes>
      )
    };

export default Projects;


