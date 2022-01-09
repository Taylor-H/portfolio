import { Link } from 'react-router-dom';

const footer = () => {
  return (
    <div className="footer">
        <div className="em">
          <Link
            to="mailto: taylor@htmlartist.net"
            id="mailto"
            alt="email me"
          ></Link>
        </div>
        <div className="in">
          <Link
            id="linkedin-link"
            target="_blank"
            to="http://www.linkedin.com/in/taylor-hembree-pell"
            alt="my linked in profile"
            rel="noreferrer"
          ></Link>
        </div>
    </div>
  );
};
export default footer;
