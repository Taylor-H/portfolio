import { useParams } from 'react-router-dom';
import FourOFour from '../FourOFour';
import ItemList from '../ItemList';
import './styles.css';

// const previewImage = () => {


//   function importAll(r) {
//     let images = {};
//     r.keys().forEach((item, index) => (images[item.replace('./', '')] = r(item)));
//   console.log('images', images);
//     return images;
//   }

//   const images = importAll(require.context('./assets', false, /\.(png|jpe?g|JPG|svg)$/));
// const imgNames = Object.keys(images);
// console.log('imageNames', imgNames);
// return (
//   <div className='image-list'>
//     {imgNames.map((image, index) => (
//       <img key={index} src={`/images/preview/${image}`} alt={image} value={image}/>
//     ))}
//   </div>
// )
// }



const SingleProject = (props) => {
console.log(props)
const projects = props.projects;
  let params = useParams();
const projectId = params.projectId;

const project = projects.find((project) => (project.id.toString() === projectId) ? project : null)

console.log('project', project);
const previewName = project? project.projectName: null;
  return (project)? (
    <div className="single-project">
      <div className='section-title'>{project.title}</div>
      <div className='project-description'>{project.description}</div>
      <div className={previewName + ' prevImg'}></div>
      {/* <ImageList projects={projects} /> */}
      <div className='project-links'>
        <h6>Open in a new tab.</h6>
        <ul>
          <li><a href={project.gitHub} target="_blank" rel="noopener noreferrer">Github</a></li>
          <li><a href={project.live} target="_blank" rel="noopener noreferrer">Live</a></li>
        </ul>
        </div>
      <ItemList itemName={'Role'} itemList={project.role} />
      <ItemList itemName={'Tech Stack'} itemList={project.tech} />
    </div>
        ): (<FourOFour />)
    }


export default SingleProject;
// (project.id.toString() === projectId)? project: null);
