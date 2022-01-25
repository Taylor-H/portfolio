import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProjects } from '../../data/data-test';
import FourOFour from '../FourOFour';
import ItemList from '../ItemList';
import { ImNewTab } from 'react-icons/im';
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
    <React.Fragment>
      {/* <div className="x-back">
      <Link to="../../projects" alt="Back">
        X
      </Link>
    </div> */}
      <section className="projects">
        <div className="single-proj-row end">
          <span className="project-title">{project.title}</span>
          <div className="prevImg">
            <img
              src={`./images/preview/${project.prevImg}`}
              alt={project.title}
            />
          </div>
        </div>
        <div className="single-proj-row">
          <div className="single-proj-column">
            <div className="project-description">{project.description}</div>
            <div className="single-proj-row ">
              <div>
                <Link
                  to={project.gitHub}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </Link>
              </div>
              <div>
                <Link
                  to={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live <ImNewTab />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="single-proj-row">
          <ItemList itemName={'Tech Used'} itemList={project.tech} />
        </div>
      </section>
    </React.Fragment>
  ) : (
    <FourOFour />
  );
};

export default ProjectDetail;
