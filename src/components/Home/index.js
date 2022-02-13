import React from "react";
import { Link } from "react-router-dom";
 import { getProjects } from '../../data/data-test.js';


const Home = () => {
  const projects = getProjects();


  return (
  <div className="con-h">
    <div className="circle-image"></div>
    <div className="container">
      <h6>Hi, I'm Taylor.</h6>
      <p>
        I'm a Full Stack Web Developer based near Boston, MA. This is a
        collection of{' '}
        <Link id="projects-link" to="projects">
          projects
        </Link>{' '}
        I've created. I make dynamic web applications, and games.
        <br />
        <Link className="more-link" to="about">
          more &#8250;
        </Link>
      </p>
    </div>
    <div className="mini-slide flex-row wrap">
      {projects.map((project) => (
        project.featured ?
        <div key={project.id.toString()} className="mini-slide flex-col">
          <Link to={`/projects/${project.id}`}>{project.title}</Link>
        </div>  : null))}
      <Link className="mini-slide more-link" to="/projects">
        More Projects &#8250;
      </Link>
    </div>
  </div>
  );
  };
  export default Home;
