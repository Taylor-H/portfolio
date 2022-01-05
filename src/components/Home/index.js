import { Link } from "react-router-dom";
import ProjectsList from '../ProjectsList';
import Hi from './Hi';
import './styles.css';

const Home = (props) => {
  const categories = props.categories;
  const projects = props.projects;

  return (
    <div className="home-container">
      <div className="projects flex-item-left">
      <h4 className='breadcrumb-link'><Link to="projects" className="white">Projects &#8250;</Link></h4>
        <div className="post-wrapper">
          {categories.map((category) => {
            return (
              <ProjectsList
                key={category.catId}
                category={category}
                projects={projects}
              />
            );
          })}
        </div>
        <div id="links">
          <h5>
            <Link to="projects" className="white">more &#8250;</Link>
          </h5>
        </div>
      </div>
      <div className="hi flex-item-right">
        <Hi />
      </div>
      <div className="space"></div>
    </div>
  );
};
export default Home;
