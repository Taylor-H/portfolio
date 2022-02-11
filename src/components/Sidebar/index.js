import React, { useState, useEffect } from 'react';
import { NavLink, Link, useParams } from 'react-router-dom';
import { getProjects, getCategories } from '../../data/data-test.js';
import { SiteIcon, PageIcon, CaretIconBlack, CloseMenuIcon } from '../Styled';

export const Sidebar = props => {
console.log('navbarOpen', props.navbarOpen);
  const params = useParams();
  const { projectId } = params;
  const [dropdownOpen, setDropdownOpen] = useState({});
    // const [sidebarOpen, setSidebarOpen] = useState(true);
    // const openSidebar = () => setSidebarOpen(true);
    // const closeSidebar = () => setSidebarOpen(false);
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
//   function handleChange() {
//   console.log('handleChange event: ', event.target.value);
//   navbarOpen.handlechange(event.target.value);
// }
  const onCollapseCategories = () => {
    setDropdownOpen({});
  };

  useEffect(() => {
    const currentProject = projects.find((project) => project.id === projectId);
    if (currentProject?.categories) {
      const currentCategories = currentProject.categories;
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
              className="category nowrap title"
              onClick={() => {
                onToggleHeader(category);
              }}
            >
              <CaretIconBlack
                position={dropdownOpen[category.catName] ? 'down' : 'right'}
              />
              <div className="sub-category" onClick={event => event.target.value}>
                {category.displayName}
              </div>
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
                      <div className="file-div">
                        <div className="icon">
                          <SiteIcon />
                        </div>

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
              className="category nowrap border-bottom"
              onClick={() => onToggleHeader(category)}
            >
              <div className="site-link">
                <NavLink
                  to={`/${category.catName === 'home' ? '' : category.catName}`}
                >
                  {category.displayName}
                </NavLink>
              </div>
            </button>
          </React.Fragment>
        )
      )}
    </>
  );
};
export default Sidebar;
