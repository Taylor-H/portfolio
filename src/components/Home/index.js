import React from 'react';
import { Link } from 'react-router-dom';
import { getProjects, techList } from '../../data/data-test.js';
import { GithubIconSmall, NewTab } from '../Styled/index.js';

const Home = () => {
  const projects = getProjects();
  const tech = techList;
  return (
    <div className="con-h">
     <div className="circle-image"></div>
     <div className="container">
       <p>Hi, I'm Taylor.</p>
       <p>
         I'm a Full Stack Web Developer based near Boston, MA. I design and develop dynamic web applications, and games. This is a collection of{' '}
         <Link to="projects">
         <b>projects</b>
         </Link>{' '}that I built recently.
       </p>
       <div className="more-link-container">
         <div>
           <Link className="more-link" to="about">
           About&nbsp;Taylor&#8250;
           </Link>
         </div>
       </div>
       <div className="mini-slide flex-row wrap">
         {projects.map((project) =>
         project.featured ? (
         <div key={project.id.toString()} className="flex-col">
           <Link to={`/projects/${project.id}`}> <img src={`/images/preview/${project.images.prevImg}`}
             className="mini-slider-img" alt={project.projectName} />
           </Link>
           <span className="mini-project-link-container">
             <div className="link-box">
               <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                 Live&nbsp;
                 <NewTab />
               </a>
             </div>

             <div className="link-box">
               <a href={project.links.gitHub} target="_blank" rel="noopener noreferrer" alt={`${project.title} repo on
                 github`}>
                 Github&nbsp;
                 <GithubIconSmall />
               </a>
             </div>
           </span>
           <Link to={`/projects/${project.id}`}> <div className="mini-title">{project.title} </div>
           <span className="mini-tagline">{project.tagLine}</span>
           </Link>
         </div>
         ) : null
         )}
         <div className="more-link-container">
           <Link className="more-link" to="/projects">
           More&nbsp;Projects &#8250;
           </Link>
         </div>
       </div>
     </div>
   </div>  );
};

export default Home;
