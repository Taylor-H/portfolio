import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavigationStyles.css';

const Navigation = () => {
  return(
  <ul className="menu">
    <li>
      <NavLink to="/about">About</NavLink>
    </li>
    <li>
      <NavLink to="/projects">Projects</NavLink>
    </li>
    <li>
      <NavLink to="/contact">Contact</NavLink>
    </li>
    <li>
      <NavLink to="/">Home</NavLink>
    </li>
  </ul>
  )};
export default Navigation;


// const GalleryNavigation = (props) => {
//   const galleries = props.galleries;

//   return (
//     <nav>
//       <h1>Galleries</h1>
//       <NavLink to="/">Home</NavLink>
//       {galleries.map((gallery) => {
//         return (
//           <NavLink to={`/galleries/${gallery.id}`} key={gallery.id}>
//             {gallery.name}
//           </NavLink>
//         );
//       })}
//     </nav>
//   );
// };
// export default GalleryNavigation;
