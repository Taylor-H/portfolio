import { Outlet, Link } from "react-router-dom";
import ProjectsList from "../ProjectsList";
import "./styles.css";

const ProjectsHome= (props) => {
  const {projects, categories } = props

// console.log('props from projects', props);
// const catButtons =categories.map((category) => (<div className={category.catName} key={category.id}>
//      {category.displayName}
//     </div>

return (<div className="outer-container"><div className="catNav-container">{categories.map((category) => (
    <ProjectsList
      key={category.catId}
      category={category}
      projects={projects}
    />
  )
)}
</div><div className="project-details"><Outlet /></div></div>)
 }





  export default ProjectsHome;
