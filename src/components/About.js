import React from 'react';

const About = () => {

    return (
  <div className="about">
    <a href="/about"></a>
    <ul className="prof">
      <li className="flex-item one">
        <div id="para">
          <h5 id="detail-header">Front End Developer</h5>
          <p id="summary-text">I have passion for coding sites that function and look flawless. I've contributed to a diverse array of projects from static marketing sites to database driven web aplications.  I'm a naturally curious problem solver that is perpetually learning and improving one problem at a time.</p>
          <p id="summary-text">Technically I am highly experienced in HTML5, CSS3. jQuary and JavaScript are my new loves. I have a very strong understanding of DOM manipulation, HTTP protocol, XML, CSS and JS libraries, W3C accessibility and usability best practices. I work in any environment including the command line and I have experience with version control using CVS and Git.</p>
        </div>
      </li>

      <li className="flex-item two">
        <div id="photo1">
        {/* <img src="images/port6.jpg" className="head-shot"/>  */}
        </div>
      </li>

      <li className="flex-item three"><div id="graph1"><img src="images/graph.svg" className="graphs" /></div>
      </li>

      <li className="flex-item four">
        <div className="creative" id="para">
          <h5 id="detail-header">Creative Developer</h5>
          <p id="summary-text">Employing modern UI/UX and graphic design conventions I can go from wireframes and mockups to beautiful commercial products for businesses and end users. Please see my <a href="/projects">projects</a> for examples and more info about my skills.</p>
        </div>
     </li>

      <li className="flex-item five">
        <div id="para">
        <h5 id="detail-header">Random Facts About Me</h5>
        <p id="summary-header"></p>
        <p id="summary-text">I live and work in The Greater Boston area.
          I have two kids, two cats, and an extremly energetic dog.
          My hobies include CNC laser cutting, silk screen, and abstract acrylic painting.</p>
          </div>
      </li>
        <li className="flex-item six"><div id="photo1-plum"><img src="images/graph2.svg" className="personal" /></div></li>
    </ul>
  </div>

    );
  }


export default About;