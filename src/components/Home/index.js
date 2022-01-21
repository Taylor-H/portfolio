import { Link } from "react-router-dom";


const Home = () => {
const winHeight = window.innerHeight;
console.log(winHeight)
  return (
    <>
      <div className="hi">
        <div className="circle-image"></div>
        <div className="container">
          <h6>Hi, I'm Taylor.</h6>
          <p>
            I'm a Full Stack Web Developer based near Boston, MA. This is a
            collection of{' '}
            <Link id="projects-link" to="projects">
              projects
            </Link>{' '}
            I've created. I make dynamic web applications, and games.
            <br />
            <Link className="more-link" to="about">
              more &#8250;
            </Link>
          </p>
        </div>
      </div>
      <div className="mini-slide flex-row">
        {/* <h6>
          <Link to="projects">Featured Projects</Link>
        </h6> */}
        <div className="container flex-row">
          <div className="mini-slide flex-col">
            <Link className="more-link" to={`/projects`}>
              Project Name 1
            </Link>
          </div>
          <div className="mini-slide flex-col">
            <Link className="more-link" to={`/projects`}>
              Project Name 2
            </Link>
          </div>
          <div className="mini-slide flex-col">
            <Link className="more-link" to={`/projects`}>
              Project Name 3
            </Link>
          </div>
        </div>
        <Link
          className="mini-slide more-link"
          to="/projects"
        >
          Projects &#8250;
        </Link>
      </div>
    </>
  );
  };
  export default Home;
