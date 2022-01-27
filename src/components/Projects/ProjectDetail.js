import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProjects } from '../../data/data-test';
import FourOFour from '../FourOFour';
import ItemList from '../ItemList';
import { NewTab, GithubSmallIcon } from '../Styled';


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
    <div className="single-project">
      <div className="column">
        <div className="row">
          <img
            src={`./images/preview/${project.prevImg}`}
            alt={project.title}
            className="project-image"
          />
        </div>
        <span className="slide-header">{project.title}</span>
        <p className="slide-text">{project.description}</p>
        <div className="row">
          <Link to={project.gitHub} target="_blank" rel="noopener noreferrer">
            <h3>
              Github
              <GithubSmallIcon />
            </h3>
          </Link>
          <Link to={project.live} target="_blank" rel="noopener noreferrer">
            <h3>
              Live
              <NewTab />
            </h3>
          </Link>
        </div>
      </div>

      {/* <div className="row">
          <ItemList itemName={'Tech Stack'} itemList={project.tech} />
        </div> */}
    </div>
  ) : (
    <FourOFour />
  );
};

export default ProjectDetail;
