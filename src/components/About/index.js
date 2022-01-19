import React from 'react';
// import './styles.css';
const About = () => {

    return (
  <div className="about">
    <a href="/about"> </a>
    <ul className="prof">
      <li className="flex-item one">
        <div id="para">
          <h5 id="detail-header">Front End Developer</h5>
          <p id="summary-text">I Design, develop, deploy, and support scalable software. I've contributed to a diverse array of projects from static marketing sites to database driven web applications.  I'm a naturally curious problem solver that is perpetually learning while delivering solutions.</p>
          <p id="summary-text">I am highly experienced in Front End development HTML5, CSS3 and Javascript, JS platforms. I have a very strong understanding of DOM manipulation, HTTP protocol, XML, CSS and JS libraries, accessibility and usability best practices.</p>
        </div>
      </li>

      <li className="flex-item two">
        <div id="photo1">
        {/* <img src="images/port6.jpg" className="head-shot"/>  */}
        </div>
      </li>

      <li className="flex-item three"><div id="graph1"><img src="images/graph.svg" className="graphs" alt="" /></div>
      </li>

      <li className="flex-item four">
        <div className="creative" id="para">
          <h5 id="detail-header">Creative Developer</h5>
          <p id="summary-text">Employing modern UI/UX and graphic design conventions and a deep understanding of client side rendering I deliver sites that are intuitive. Please see my <a href="/projects">projects</a>.</p>
        </div>
     </li>

      <li className="flex-item five">
        <div id="para">
        <h5 id="detail-header">Random Facts About Me</h5>
        <p id="summary-header"></p>
        <p id="summary-text">I live and work in The Greater Boston area.
          I have two kids, two cats, and an extremely energetic dog.
          My hobbies include CNC laser cutting, silk screen, and abstract acrylic painting.</p>
          </div>
      </li>
        <li className="flex-item six"><div id="photo1-plum">
          {/* <img src="images/graph2.svg" className="personal" alt="a graph" /> */}
          </div></li>
    </ul>
  </div>

    );
  }


export default About;
