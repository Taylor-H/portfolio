
// import { Link } from 'react-router-dom';

// import React, { useState, useRef } from "react";
// import Chevron from './Chevron';



// const ProjectsNav = (props) => {
//   const { category, projects } = props;
//   console.log(props.categories)
//   const [setActive, setActiveState] = useState("");
//   const [setHeight, setHeightState] = useState("0px");
// const [setRotate, setRotateState] = useState
// ("accordion__icon");
// const content = useRef(null);
// function toggleAccordion() {
//   setActiveState(setActive === "" ? "activeProject" : "");
//   setHeightState(
//     setActive === "activeProject" ? "0px" : `${content.current.scrollHeight}px`
//   );
//   setRotateState(
//     setActive === "activeProject" ? "project-accordion__icon" : "project-accordion__icon rotate"
//   );
// }
//   return (
//     <div className="accordion__section">
//       <button className={`project__accordion ${setActive}`}onClick={toggleAccordion}>
//         <p className="port-header">{category.shortDisplay}
//           <Chevron className={`${setRotate}`} width={5} fill={"#000"} />
//         </p>
//       </button>
//       {projects.map((project) => (
//         <div key={project.id}>
//           {project.category === category.catName ? (
//            <button  ref={content}  style={{ maxHeight: `${setHeight}` }}className="project__content"><Link to={`/projects/${project.id}`}>
//              <div className="project__text">{project.title}</div>
//             </Link></button>
//           ) : null}
//         </div>
//       ))}
//     </div>
//   );

//           }
// export default ProjectsNav;
