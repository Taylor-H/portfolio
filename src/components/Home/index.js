import ProjectsList from '../ProjectsList';
import './styles.css';


const Home = (props) => {
  const categories = props.categories;
  const projects = props.projects;

  return (
    <div className="projects">
      <div id="section-title">
        <a href="/projects">&#8250; Projects</a>
      </div>
      <div className="post-wrapper">
        {categories.map((category) => {
          return (
            <ProjectsList key={category.catId} category={category} projects={projects} />
          );
        })}
      </div>
      <div id="links">
        <h5>
          <a href="/projects">more &#8250;</a>
        </h5>
      </div>
    </div>
  );
};
export default Home;
