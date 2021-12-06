import { Link } from 'react-router-dom';
import './styles.css';
import Chevron from './Chevron'
import React, { useState, useRef } from "react";



const ProjectsList = (props) => {
  const {category, projects} = props;
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const [setRotate, setRotateState] = useState("accordion__icon");
  const content = useRef(null);
  function toggleAccordion() {
    setActiveState(setActive === "" ? "activeAccordion" : "");
    setHeightState(
      setActive === "activeAccordion" ? "0px" : `${content.current.scrollHeight}px`
    );
    setRotateState(
      setActive === "activeAccordion" ? "accordion__icon" : "accordion__icon rotate"
    );
  }
  return (
    <div className="accordion__section">
    <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
      <p className="accordion__title">{category.displayName}</p>
      <Chevron className={`${setRotate}`} width={8} fill={"#000"} />
    </button>
      {projects.map((project) => (
        <>
          {project.category === category.catName ? (
           <button key={project.id} ref={content}  style={{ maxHeight: `${setHeight}` }} className="accordion__content"><Link to={`/projects/${project.id}`}>
             <div className="accordion__text">{project.title}</div>
            </Link></button>
          ) : null}
        </>
      ))}
    </div>
  );
};

export default ProjectsList;
