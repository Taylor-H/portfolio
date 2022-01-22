import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  getProjects,
  getCategories,
} from '../../data/data-test.js';
// import { FaFileCode } from 'react-icons/fa';
import { Caret } from './Caret';
import { File } from './File';
// import { Minus } from './Minus';
import './styles.css';

export const Sidebar = () => {
  const params = useParams();
  const { projectId } = params;
  const [dropdownOpen, setDropdownOpen] = useState({});
  const categories = getCategories();
  const projects = getProjects();

  const onToggleHeader = (category) => {
    console.log('toggle', category.catName);
    if (dropdownOpen[category.catName]) {
      setDropdownOpen((prev) => ({
        ...prev,
        [category.catName]: false,
      }));
    } else {
      setDropdownOpen((prev) => ({
        ...prev,
        [category.catName]: true,
      }));
    }
  };

  const onCollapseCategories = () => {
    setDropdownOpen({});
  };

  useEffect(() => {
    const currentProject = projects.find(
      (project) => project.id === projectId
    );
    if (currentProject?.categories) {
      const currentCategories = currentProject.categories
      console.log('currentCat', currentCategories);
        currentCategories.reduce(
        (acc, val) => console.log(acc, val)({ ...acc, [val]: true }),
        {}
      );

      setDropdownOpen((prev) => ({
        ...prev,
        ...currentCategories,
      }));
    }
  }, [projects, projectId]);

  return (
    <aside className="sidebar">
      <div className="categories">
        <div className="title">
          <button
            onClick={onCollapseCategories}
            className="collapse-categories"
            title="Collapse Categories"
          >
<div>&#8722;</div>
          </button>
        </div>
        {categories.map((category) => {
          return (
            <React.Fragment key={category.catName}>
              <button
                className="category nowrap"
                onClick={() => onToggleHeader(category)}
              >
                <Caret
                  position={dropdownOpen[category.catName] ? 'down' : 'right'}
                />
                <div>{category.displayName}</div>
              </button>

              <nav
                className={
                  !dropdownOpen[category.catName] ? 'collapsed' : 'active'
                }
              >
                {projects
                  .filter((project) =>
                    (project.categories || []).includes(category.catName)
                  )
                  .map((project) => {
                    return (
                      <Link
                        key={project.projectName}
                        className={project.id === projectId ? 'active' : 'notactive'}
                        to={`/projects/${project.id}`}
                        onClick={() => onToggleHeader(category.catName)}
                      >
                        <File className="file-icon" />
                        <div className="file-div">
                          <span className="project__text">
                            <b className="nowrap">{project.title}</b>&nbsp;
                            {project.tagLine}
                          </span>
                        </div>
                      </Link>
                    );
                  })}
              </nav>
            </React.Fragment>
          );
        })}
      </div>
    </aside>
  );
};

export default Sidebar;
