import { Link } from 'react-router-dom';
const ProjectCards = ({ projects }) => {
  return(
<>
  {projects.map((project) => (<div key={project.Id} class="post">
      <Link to={`/projects/${project.id}`} alt={project.projectName}>
        <div className="project-image">
          <img
            src={`/images/preview/${project.prevImg}`}
            class="preview"
            alt={project.projectName}
          />
        </div>
        <div class="slide-info">
          <p class="slide-header">{project.title}</p>
          <p class="slide-summary">{project.tagLine}</p>
        </div>
      </Link>
    </div>
  ))}
  </>
  )
};

export default ProjectCards;

{
  /* <div class="project-container">
    <div>
      <h4 id="section-title"><a href="/projects">&lt; projects</a></h4>
    </div>
    <div class="detail-nav">
      <!-- <span class="port-header"><p>more projects</p></span> -->
      <div class="post-wrapper2">
        <!-- <div class="prev"></div> -->

        <div class="post">
          <a href="../projects/coffee_clicker/proj-10.html" alt="pop">
            <div class="project-image">
              <img src="../images/800x600_2019-assets/pop-desktop.jpg" class="preview">
            </div>
            <div class="slide-info">
              <p class="slide-header">pop!:</p>
              <p class="slide-summary">Responsive e-commerce.</p>
            </div></a>
        </div>

        <div class="post">
          <a href="../projects/proj-1.html" alt="pop">
            <div class="project-image">
              <img src="../images/800x600_2019-assets/pop-desktop.jpg" class="preview">
            </div>
            <div class="slide-info">
              <p class="slide-header">pop!:</p>
              <p class="slide-summary">Responsive e-commerce.</p>
            </div></a>
        </div>

        <div class="post">
          <a href="../projects/proj-2.html" alt="templates">
            <div class="project-image">
              <img src="../images/800x600_2019-assets/monument_desktop.jpg" class="preview">
            </div>
            <div class="slide-info">
              <p class="slide-header">Monument/Relaxr</p>
              <p class="slide-summary">Responsive blog templates.</p>
            </div></a>
        </div>

        <div class="post">
          <a href="../projects/proj-3.html" alt="rioport">
            <div class="project-image">
              <img src="../images/800x600_2019-assets/rioport1.jpg" class="preview">
            </div>
            <div class="slide-info">
              <p class="slide-header">Rioport</p>
              <p class="slide-summary">E-commerce music app.</p>
            </div></a>
        </div>

        <div class="post">
          <a href="../projects/proj-4.html" alt="port">
            <div class="project-image">
              <img src="../images/javascript.png" class="preview2">
            </div>
            <div class="slide-info">
              <p class="slide-header">JavaScript and jQuery</p>
              <p class="slide-summary">Examples.</p>
            </div></a>
        </div>

        <div class="post">
          <a href="../projects/proj-5.html" alt="port">
            <div class="project-image">
              <img src="../images/portfolio-big.png" class="preview">
            </div>
            <div class="slide-info">
              <p class="slide-header">Portfolio</p>
              <p class="slide-summary">Responsive design.</p>
            </div></a>
        </div>

        <div class="post">
          <a href="../projects/proj-6.html" alt="homepages">
            <div class="project-image">
              <img src="../images/800x600_2019-assets/gurlpages.jpg" class="preview2">
            </div>
            <div class="slide-info">
              <p class="slide-header">HomePages</p>
              <p class="slide-summary">Homepage building site.</p>
            </div>
          </a>
        </div>

        <div class="post">
          <a href="../projects/proj-7.html" alt="port">
            <div class="project-image">
              <img src="../images/800x600_2019-assets/earthlink1.jpg" class="preview2">
            </div>
            <div class="slide-info">
              <p class="slide-header">Earthlink</p>
              <p class="slide-summary">Tutorials.</p>
            </div>
          </a>
        </div>

        <div class="post">
          <a href="../projects/proj-8.html" alt="port">
            <div class="project-image">
              <img src="../images/800x600_2019-assets/garden-club.jpg" class="preview2">
            </div>
            <div class="slide-info">
              <p class="slide-header">Design</p>
              <p class="slide-summary">Creative Development.</p>
            </div>
          </a>
        </div>

        <div class="post">
          <a href="../projects/proj-9.html" alt="port">
            <div class="project-image">
              <img src="../images/800x600_2019-assets/insidemoney.jpg" class="preview">
            </div>
            <div class="slide-info">
              <p class="slide-header">Inside Money...</p>
              <p class="slide-summary">Marketing and promotion.</p>
            </div>
          </a>
        </div>
        <!-- <div class="next"></div> -->
      </div>
    </div>
  </div> */
}
