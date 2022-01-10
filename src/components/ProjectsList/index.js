import { Routes, Route, Outlet, Link } from 'react-router-dom';
import { FaFileCode } from 'react-icons/fa';
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
    <Chevron className={`${setRotate}`} width={8} fill={"#000000"} />
    <h2 className="accordion__title">{category.displayName}</h2>
  </button>
    {projects.map((project) => (
      <div className='bg' key={project.id}>
        {project.category === category.catName ? (
          <button ref={content}  style={{ maxHeight: `${setHeight}` }} className="accordion__content"><Link to={`/projects/${project.id}`}>
            <div className="accordion__text"><FaFileCode /> {`${project.title}: ${project.tagLine}`}</div>
          </Link></button>
        ) : null}
      </div>
    ))}
  </div>
);

};

export default ProjectsList;
