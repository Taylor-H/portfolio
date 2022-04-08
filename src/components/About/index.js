import React from 'react';
import { Link } from 'react-router-dom';
import rioport from '../../images/preview/rioport-big.jpg';
import mtv from '../../images/preview/mtv-big.jpg';
import vh1 from '../../images/preview/vh1-big.jpg';
const About = () => {
  return (
    <ul className="prof">
      <li className="flex-item one">
        <div className="para">
          <h5 id="detail-header">Web Developer Back Story</h5>
          <p className="summary-text">
            I've lived about half my life in Las Vegas and Los Angeles CA and
            the other half in Massachusetts. My professional web development
            experience goes way back to the mid '90s in Pasadena CA. I got my
            introduction to the internet at one of the first ISP's in the LA
            area, Earthlink. I started in Technical Support helping people all
            over the country get connected to the World Wild Web. It wasn't long
            before I moved to supporting our commercial and corporate web
            hosting clients. That's where I learned to make web sites that were
            more than static pages.
          </p>
        </div>
      </li>
      <li className="flex-item one">
        <div className="photo1">
          <img src={rioport} alt="rioport preview" />
          <p>
            Rioport was the first app that legally sold music online. A precursor to iTunes.
          </p>
        </div>
      </li>
      <li className="flex-item two">
        <div className="photo-small">
          <img src={mtv} alt="mtv preview" />
          <img src={vh1} alt="vh1 preview" />
          <p>
            While at Rioport we made music download sites for companies like Nike, MTV, Vh1 and HP. I was their primary front end developer.
          </p>
        </div>
      </li>
      <li className="flex-item one">
        <div className="para">
          <p className="summary-text">
            By the end of the '90s I was working on ground breaking technology
            at internet start ups including{' '}
            <a href="https://en.wikipedia.org/wiki/RioPort">
              "the first internet music service (cloud service) to legally offer
              digital songs from all the major music labels".
            </a>{' '}
            The precursor to{' '}
            <a
              href="https://variety.com/2001/digital/news/mtvi-rioport-big-5-pact-for-downloads-1117796560/"
              alt="another RioPort article">
              iTunes *
            </a>{' '}
            among others. I had quickly become a Front End guru primarily
            integrating graphics, data, and code for the web browser. I enjoyed
            a successful and rewarding career until 2005 when I took some time
            off to start a family. Time kept doing what time does and due to
            circumstances I was not able to continue my career for a very long
            time.
          </p>
        </div>
      </li>
      <li className="flex-item one">
        <div className="para">
          <h5 id="detail-header">My Journey</h5>
          <p className="summary-text">
            {' '}
            Flash forward to 2018, my family commitments eased I began to look
            into coming back to my previous occupation. The advent of hand held
            devices like tablets and phones, social media, streaming platforms
            had all come about in the time I was away. I wanted to get back to
            building websites and web applications but I really didn't know
            where to start. I turned to General Assembly in Boston. I was able
            to refresh my HTML and CSS skills and I was introduced to GitHub.
          </p>
        </div>
      </li>
      <li className="flex-item one">
        <div className="photo1">
          {/* <img src="images/port6.jpg" className="head-shot"/>  */}
        </div>
      </li>
      <li className="flex-item two">
        <div className="photo1">
          {/* <img src="images/port6.jpg" className="head-shot"/>  */}
        </div>
      </li>
      <li className="flex-item one">
        <div className="para">
          <p className="summary-text">
            Back in the day I knew enough Javascript to allow me to add some
            interactivity or check that a form was filled out correctly. When
            the pandemic started I finally had the opportunity to take some time
            and go in depth with software development and computer science in
            general. I really focused on Javascript. When I felt I'd gotten far
            enough I moved on to the data part. I was able to learn PostgreSQL
            and Sequelize. I learned not just how to display data but how to
            structure, verify and have save it for later. I was then able to
            make <Link to="">a basic CRUD app</Link> with NodeJS and Express.
          </p>
        </div>
      </li>
      <li className="flex-item one">
        <div className="para">
          <h5 id="detail-header">Currently</h5>
          <p className="summary-text">
            The seven or so years of prior Front End experience was not for
            nothing. The interpersonal and communication skills I gained from
            that experience are certainly still relevant. Working on a team and
            being able to translate technical concepts to non technical team
            mates is always going to be a useful skill. I may have had to learn
            a lot of new technologies to be able to make modern web apps but it
            was so worth it. It's a great feeling to be able to create something
            that actually does something. Something that improves peoples lives
            and helps them to achieve their goals. It's a great feeling to be
            able to say I'm a Full Stack Software developer.
          </p>
        </div>
      </li>
      <li className="flex-item one">
        <div className="photo1">
          {/* <img src="images/port6.jpg" className="head-shot"/>  */}
        </div>
      </li>
      <li className="flex-item">
        <div className="photo1">
          {/* <img src="images/port6.jpg" className="head-shot"/>  */}
        </div>
      </li>
      <li className="flex-item">
        <div className="para">
          <p className="summary-text">
            I currently live near Boston with my family, our cat, and an
            extremely energetic dog. You can find me parenting and developing
            software most of the time. In my downtime I like to do ceramics,
            silk screen printing, and abstract acrylic painting.
          </p>
        </div>
      </li>
    </ul>
  );
};

export default About;
