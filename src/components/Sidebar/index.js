import React, { useState, useEffect  } from 'react';
import { NavLink, Link, useParams } from 'react-router-dom';
import { getProjects, getCategories } from '../../data/data-test.js';
import { MdClose } from 'react-icons/md';
import { BsChevronContract, BsChevronExpand } from 'react-icons/bs';
import { FiMenu } from 'react-icons/fi';
import { IconContext } from 'react-icons';
import { Caret } from './Caret';
import { File } from './File';
import './styles.css';

export const Sidebar = () => {
  const params = useParams();
  const { projectId } = params;
  const [dropdownOpen, setDropdownOpen] = useState({});
  const categories = getCategories();
  const projects = getProjects();
  const onToggleHeader = (category) => {
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
    <>
      {categories.map((category) =>
        category.subCategory ? (
          <React.Fragment key={category.catName}>
            <button
              className="category nowrap title border-bottom"
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
                      className={project.id === projectId ? 'active' : ''}
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
        ) : (
          <React.Fragment key={category.catName}>
            <button
              className="category nowrap title"
              onClick={() => onToggleHeader(category)}
            >
                <NavLink to={`/${category.catName}`}>
                  <IconContext.Provider value={{ color: '#00000000'  }}>
                  <Caret />
                    </IconContext.Provider>
                  <div>{category.displayName}</div>
                  </NavLink>
            </button>
          </React.Fragment>
        )
      )}
    </>
  );

}
export default Sidebar;


  /* <button
      onClick={onCollapseCategories}
      className={`collapse-categories ${!dropdownOpen ? 'visible' : ''}`}
      title="Collapse Categories"
    >{dropdownOpen ? <BsChevronContract /> : <BsChevronExpand />}
    </button> */

