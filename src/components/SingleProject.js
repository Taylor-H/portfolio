import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, useParams, useRouteMatch } from 'react-router-dom';

// let { path, url } = useRouteMatch();
const SingleProject = (props) => {
  const project =
  console.log('from singleProject', props);
  const { projectId, title, short_description, image_url } = props.match.params
  return (
    <div key={projectId}>
      <h2>{title}</h2>
      <div>{short_description}</div>
      <img src={image_url} alt={title} />
    </div>
  )
}

// const SinglePet = props => {
//   const { id, name, description, species } = props.pet
//   const { handleDelete } = props
//   const [adopted, setAdopted] = useState(false)
//   return (
//     <div className={`single-pet ${adopted ? "adopted" : ""}`}>
//       <h2>{name}</h2>
//       <div>{species}</div>
//       <hr />
//       <div>{adopted ? "Adopted!" : "Available"}</div>
//       <button onClick={() => setAdopted(!adopted)}>Toggle Status</button>
//       {/* <DeletePet petId={id} handleDelete={deletePet} /> */}
//       <DeletePet petId={id} handleDelete={handleDelete} />
//     </div>
//   )
// }


// class SingleProject extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     include: true,
  //   };
  //   this.handleClick = this.handleClick.bind(this);
  // }
  // handleClick() {
  //   this.setState((prevState) => ({ included: !prevState.included }));
  // }

//   render() {
//     const { project } = this.state;
//     // const { project, handleDelete } = this.props;
//     const { id, title, short_description, image_url} = project;
//     console.log('What are project props?: ', this.props.project);
//     console.log('What is state?:', this.state);
//     return (
//       <div className="single-project">
//         <h2>{title}</h2>
//         <div>{short_description}</div>
//         <div className={project-image-container}>
//           <img src={image_url} />
//         </div>
//       </div>
//     );
//   }
// }
export default SingleProject;
// onClick={()=> this.props.changeClass(this.props.className)}

