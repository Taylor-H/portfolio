import { Link } from 'react-router-dom';
import { FaFileCode } from 'react-icons/fa';
import Chevron from './Chevron';
import React, { useState, useRef } from 'react';

const ProjectsList = (props) => {
  const { category, projects } = props;
  const [setActive, setActiveState] = useState('');
  const [setHeight, setHeightState] = useState('0px');
  const [setRotate, setRotateState] = useState('accordion__icon');
  const content = useRef(null);
  function toggleAccordion() {
    setActiveState(setActive === '' ? 'activeAccordion' : '');
    setHeightState(
      setActive === 'activeAccordion'
        ? '0px'
        : `${content.current.scrollHeight}px`
    );
    setRotateState(
      setActive === 'activeAccordion'
        ? 'accordion__icon'
        : 'accordion__icon rotate'
    );
  }
  return (
    <div className="accordion__section">
      <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
        <Chevron className={`${setRotate}`} width={8} fill={'#000000'} />
        <h2 className="accordion__title">{category.displayName}</h2>
      </button>
      {projects.map((project) => (
      <div className="bg" key={project.id}>
        {project.category === category.catName ? (
        <button ref={content} style={{ maxHeight: `${setHeight}` }} className="accordion__content">
          <Link to={`/projects/${project.id}`}> <div className="file-div">
          <FaFileCode className="file-icon" />
          {project.title}:
          <div className="accordion__text">{project.tagLine}</div>
      </div>
      </Link>
      </button>
      ) : null}
    </div>
    ))}
    </div>
  );
};

export default ProjectsList;

// const ProjectsList = (props) => {
//   const params = useParams();
//   const { projectId } = params;
//   const { category, projects } = props;
//   const [dropdownOpen, setDropdownOpen] = useState({});
//   const location = useLocation();
//   console.log('location', location?.pathname);
//   const categories = getCategoriesFromProjects(projects);
//   console.log('cat', categories);
//   console.log(params ? projectId : 'no project id');

//   const onToggleHeader = (category) => {
//     if (dropdownOpen[category]) {
//       setDropdownOpen((prev) => ({
//         ...prev,
//         [category]: false,
//       }));
//     } else {
//       setDropdownOpen((prev) => ({
//         ...prev,
//         [category]: true,
//       }));
//     }
//   };
//   const onCollapseCategories = () => {
//     setDropdownOpen({});
//   };

//   useEffect(() => {
//     const currentPost = projects.find(
//       (project) => project.id === location.pathname
//     );

//     if (currentPost?.categories) {
//       const categories = currentPost.categories.reduce(
//         (acc, val) => ({ ...acc, [val]: true }),
//         {}
//       );

//       setDropdownOpen((prev) => ({
//         ...prev,
//         ...categories,
//       }));
//     }
//   }, [projects, location]);
//   return (
//     <aside className="sidebar">
//       <div className="title">
//         <span>Categories</span>
//         <button
//           onClick={onCollapseCategories}
//           className="collapse-categories"
//           title="Collapse Categories"
//         >
//           <div>
//             <Minus />
//           </div>
//         </button>
//       </div>

//       <div className="categories">
//         {categories.map((category) => {
//           return (
//             <React.Fragment key={category.catId}>
//               <button
//                 className="category"
//                 onClick={() => onToggleHeader(category)}
//               >
//                 <Caret position={dropdownOpen[category] ? 'down' : 'right'} />
//                 <span>{category}</span>
//               </button>
//               <nav className={!dropdownOpen[category] ? 'collapsed' : ''}>
//                 {projects
//                   .filter((project) =>
//                     (project.category || []).includes(category.catName)
//                   )
//                   .map((project) => {
//                     return (
//                       <Link
//                         key={project.id}
//                         to={project.id}
//                         activeClassName="active"
//                       >
//                         <File />
//                         <span>{project.title}</span>
//                       </Link>
//                     );
//                   })}
//               </nav>
//             </React.Fragment>
//           );
//         })}
//       </div>
//     </aside>
//   );
// };
