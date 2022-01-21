import { File } from "./File";
import { Link } from "react-router-dom";

const ProjectsByCategory = (props) => {
  const { category, projects } = props;
  console.log('projects!!', props, category.catName);

  projects.map((project) => (
    (project.category.catName === category.catName) ? (
      <Link className="proj-link" to={`/projects/${project.id}`} key={project.id}>
        <div className="file-div">
          <File className="file-icon" />
          <b className="nowrap">{project.title}</b>&nbsp;
          <p className="project__text">{project.tagLine}</p>
        </div>
      </Link>) : null
  ));
};

export default ProjectsByCategory;
  //   project.category.catName === category.catName ? (
  //     <Link
  //       className="proj-link"
  //       to={`/projects/${project.id}`}
  //       key={project.id}
  //     >
  //       <div className="file-div">
  //         <File className="file-icon" />
  //         {/* <h6 className="port-header nowrap">&nbsp;</h6> */}
  //         <b className="nowrap">{project.title}</b>&nbsp;
  //         <p className="project__text">{project.tagLine}</p>
  //       </div>
  //     </Link>
  //   ) : null
  // );
