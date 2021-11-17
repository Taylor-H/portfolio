import React from 'react';
import ProjectList from './ProjectList';
import skillList from './SkillList'
import { getProjects } from '../../data/projectdata'
import axios from 'axios';
class Home extends React.Component {
  componentWillMount() {
   this.props.getProjects();
   console.log(this.props.projects);
  }
  render() {
    const projects = this.props.projects;
    return (
      <main>
        <div className="grid-container">
          <div className="portrait"></div>
          <div className="hi">
            <div>
              <h6>Hi, I'm Taylor.</h6>
            </div>
            <div>
              <p>
                A front-end web developer especially adept at bridging the gap
                between design and development...{' '}
              </p>
            </div>
            <div id="links">
              <h5>more &#8250;</h5>
            </div>
          </div>
          <div className="skills">
            <div id="section-title">
              <h4>
                <a href="/about">&#8250; Skills</a>
              </h4>
            </div>
            <div className="skill-list">
    <ul>
    {/* {this.skillList.map((skill, index) => {
    return (
      console.log(skill),
        <li key={this.index}>{this.skill}</li>
    );
})} */}
             </ul>
            </div>
            <div id="links">
              <h5>
                <a href="/">more &#8250;</a>
              </h5>
            </div>
          </div>
          <div className="tools">
            <div id="section-title">
              <h4>&#8250; Tools</h4>
            </div>
            <div className="tool-list">
              <ul>
                <li>VS Code</li>
                <li>Terminal</li>
                <li>Git</li>
                <li>Sketch/XD</li>
                <li>Photoshop</li>
                <li>Illustrator</li>
                <li>Unix/Linux</li>
              </ul>
            </div>
            <div id="links">
              <h5>
                <a href="/about#tools">more &#8250;</a>
              </h5>
            </div>
          </div>
          <div className="projects">
            <h4 id="section-title">
              <a href="/projects">&#8250; Projects</a>
            </h4>
            <div className="post-wrapper">
            <div className="project-list">
            {/* <ProjectList /> */}
            {projects.map((project) => {
          <div key={project.id}>
          <h2>project: {project.title}</h2>
          <p>{project.description}</p>
          </div>
        })}
            </div>;
            </div>
            <div id="links">
              <h5>
                <a href="/projects">more &#8250;</a>
              </h5>
            </div>
          </div>

          <div className="con-h">
            <a name="contact"></a>
            <h4 id="section-title">
              <a href="/about">&#8250; Contact</a>
            </h4>
            <h5 id="detail-header">Interested in working with me?</h5>
            <p>Message me and let's get started.</p>
            <div className="email">
              <div className="em">
                <a id="mailto" alt="email me"></a>
              </div>
            </div>
            <div className="linkedin">
              <div className="in">
                <a
                  id="linkedin-link"
                  target="_blank"
                  href="http://www.linkedin.com/in/taylor-hembree-pell"
                  alt="my linkedIn profile"
                ></a>
              </div>
            </div>
          </div>
          <div className="footer">
            <a href="#top" alt="top of page">
              top
            </a>
          </div>
        </div>
      </main>
    );
  }
}

export default Home;
