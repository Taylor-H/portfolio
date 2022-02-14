import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProjects } from '../../data/data-test';
import FourOFour from '../FourOFour';
import ItemList from '../ItemList';
import { NewTab, GithubIconSmall } from '../Styled';
import { NodeJS, Javascript, HTML5, CSS, ExpressIcon, FaGithubIcon, HerokuIcon, SequelizeIcon, SchemaIcon, ReactJS } from "../Styled/index.js";

const ProjectDetail = () => {
  const projects = getProjects();
  const techIcons = {
    node: <NodeJS />,
    html5: <HTML5 />,
    css3: <CSS />,
    javascript: <Javascript />,
    express: <ExpressIcon />,
    git: <FaGithubIcon />,
    heroku: <HerokuIcon />,
    sequelize: <SequelizeIcon />,
    postgresql: <SchemaIcon />,
    reactJS: <ReactJS />,
  };
  let params = useParams();
  const projectId = params.projectId;

  const project = projects.find((project) =>
    project.id.toString() === projectId ? project : null
  );
  return project ? (
    <div className="con-h">
      <div className="single-project">
        <div className="column">
          <div className="row">
            <img
              src={`./images/preview/${project.images.prevImg}`}
              alt={project.title}
              className="project-image"
            />
          </div>
          <div className="slide-header">
            <h1>{project.title}</h1>

            <div className="project-link-container">
              <div className="link-box">
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer">
                  Live
                  <NewTab />
                </a>
              </div>
            </div>
            <div className="link-box">
              <a
                href={project.links.gitHub}
                target="_blank"
                rel="noopener noreferrer"
                alt={`${project.title} repo on github`}>
                Github
                <GithubIconSmall />
              </a>
            </div>
          </div>
          <p className="slide-text">{project.description}</p>
          <div className="icon-row">
            {project.tech.map((item) =>
              techIcons[item] ? <div key={item}>{techIcons[item]}</div> : null
            )}
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
