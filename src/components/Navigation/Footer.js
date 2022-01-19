import { Link } from 'react-router-dom';

const footer = () => {
  return (
    <div className="footer">
          <Link to="mailto: taylor@htmlartist.net" id="mailto" alt="email me">
        <div className="em">
        </div>
          </Link>
          <Link id="linkedin-link" target="_blank" to="http://www.linkedin.com/in/taylor-hembree-pell"
            alt="my linked in profile" rel="noreferrer">
        <div className="in">
        </div>
          </Link>
    </div>
  );
};
export default footer;
