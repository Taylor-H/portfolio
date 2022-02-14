import React from "react";
import { Link } from "react-router-dom";
import { getProjects } from '../../data/data-test.js';
import { techList } from '../../data/data-test.js';

const Home = () => {
  const projects = getProjects();
  const tech = techList;
  console.log(tech['javascript'].icon);
  return (
  <div className="con-h">
    <div className="circle-image"></div>
    <div className="container">
      <p>Hi, I'm Taylor.</p>
      <p>
        I'm a Full Stack Web Developer based near Boston, MA. This is a collection of{' '}
        <Link id="projects-link" to="projects">
          projects
        </Link>{' '}
        I've created. I make dynamic web applications, and games.
      </p>
      <div className="more-link-container"><div>
        <Link className="more-link" to="about">
          more &#8250;
        </Link>
      </div>
  </div>
      <div className="mini-slide flex-row wrap">
        {projects.map((project) => ( project.featured ?
            <div key={project.id.toString()} className="flex-col">
              <Link to={`/projects/${project.id}`}>
                <p className="slide-header">{project.title}</p>
                <img
                  src={`/images/preview/${project.images.prevImg}`}
                  className="mini-slider-img"
                  alt={project.projectName} />
                <div className="slide-info">
                  <p className="slide-summary">{project.tagLine}</p>
              </div>
              </Link>
            </div> : null))}
        <div className='more-link-container'>
          <Link className="more-link" to="/projects">
            More Projects &#8250;
          </Link>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Home;
