import ProjectCards from "../ProjectCards";


const ProjectsHome= (props) => {
  const {projects } = props
  return (
    <div class="project-container">
      <ProjectCards projects={projects} />
    </div>)
 }
  export default ProjectsHome;

