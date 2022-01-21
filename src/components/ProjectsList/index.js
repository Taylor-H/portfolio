import React, { useState, useEffect } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { getProjects, getCategories } from '../../data/data.js';
import {Caret} from './Caret';
import {File}  from './File';
import './styles.css';

const ProjectsList = () => {
  const params = useParams();
  const { projectId } = params;
  const [dropdownOpen, setDropdownOpen] = useState({});
  // const [activeProject, setActiveProject] = useState({projectId: projectId});
  const location = useLocation();
  const categories = getCategories();
  const projects = getProjects();

  const onToggleHeader = (category) => {
    dropdownOpen[category.catName] ? setDropdownOpen((prev) => (
      { ...prev, [category.catName]: false }
    )) : setDropdownOpen((prev) => (
      { ...prev, [category.catName]: true }
    ))
  };
  // const onToggleActive = (project) => {
  //   activeProject[project.id] ? setActiveProject((prev) => (
  //     { ...prev, [project.id]: false }
  //   )) : setActiveProject((prev) => (
  //     { ...prev, [project.id]: true }
  //   ))
    const onCollapseCategories = () => {
      setDropdownOpen({});
    };

    useEffect(() => {
      // if (location.pathname === '/projects') {
      const currentProject = projects.find(
        (project) => project.id === projectId
      );
      console.log('current', currentProject);
      if (currentProject?.category) {

        const category = currentProject.category.reduce(
          (acc, val) => ({ ...acc, [val]: true }), {});
        console.log('current', category);

        setDropdownOpen((prev) => ({
          ...prev,
          ...category.catName,
        }));
        // setActiveProject((prev) => ({
        //   ...prev,
        //   [currentProject.id]: true,
        // }));

      }
    });
    return (
      <aside className="sidebar">
        <div className="title">
          <span>Categories</span>
          <button onClick={onCollapseCategories} className="collapse-categories" title="Collapse Categories">
            <div>&#8722;</div>
          </button>
        </div>

        <div className="categories">
          {categories.map((category) => {
          return (
          <React.Fragment>
            <button key={category.catId.toString()} className="category" onClick={()=> onToggleHeader(category)}>
              <Caret position={dropdownOpen[category.catName] ? 'down' : 'right' } />
              <span>{category.displayName}</span>
            </button>
            <nav className={ !dropdownOpen[category.catName] ? 'collapsed' : 'expanded' }>
              {projects.map((project) =>
              project.category.catName === category.catName ? (
                  <Link key={project.name} to={`/projects/${project.id}`} className="active" onClick={() =>
                    onToggleHeader(category)}>
                        <div className="file-div">
                          <File />
                          <b className="nowrap">{project.title}</b>&nbsp;
                          <p className="project__text">{project.tagLine}</p>
                        </div>
                      </Link>
                    ) : null
                  )}
                </nav>
              </React.Fragment>
            );
          })}
        </div>
      </aside>
    );
  };

export default ProjectsList;
