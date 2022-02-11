import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProjects } from '../../data/data-test';
import FourOFour from '../FourOFour';
import ItemList from '../ItemList';
import { NewTab, GithubIconSmall, } from '../Styled';


const ProjectDetail = () => {
const projects = getProjects();
let params = useParams();
const projectId = params.projectId;

const project = projects.find((project) =>
project.id.toString() === projectId ? project : null
);

console.log('project.links', project.links.gitHub ? 'true': project.id);
// const previewName = project ? project.projectName : null;
  return project ? (
    <div className='con-h'>
      <div className="single-project">
        <div className="column">
          <div className="row">
            <img
              src={`./images/preview/${project.images.prevImg}`}
              alt={project.title}
              className="project-image"
            />
          </div>
          <span className="slide-header">{project.title}</span>
          <p className="slide-text">{project.description}</p>
          <div className="row">
            <a
              href={project.links.gitHub}
              target="_blank"
              rel="noopener noreferrer"
              alt={`${project.title} repo on github`}
            >
              <h5>
                Github
                <GithubIconSmall />
              </h5>
            </a>
            <Link
              to={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h5>
                {project.links.live}
                <NewTab />
              </h5>
            </Link>
          </div>
        </div>
        {/* <div className="row">
          <ItemList itemName={'Tech Stack'} itemList={project.tech} />
        </div> */}
      </div>
    </div>
  ) : (
    <FourOFour />
  );
};

export default ProjectDetail;
