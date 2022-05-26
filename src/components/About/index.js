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
            My tech history begins in Southern California in the mid 90s. Having
            a parent that was a software developer and several CS classes in
            high school and college coupled with customer service experience I
            was hired at an ISP and web hosting company in an entry level
            Technical Support role connecting people all over the US to the
            World Wide Web at Earthlink. It was internet boom time and I quickly
            moved through the ranks ultimately landing in Earthlink's commercial
            web hosting department.
          </p>
          <p className="summary-text">
            I ensured customer retention and success by troubleshooting
            software, assisting domain name registration and forwarding,
            configuring enterprise email and DNS/A Records, and supporting
            server side scripting on a Unix/Apache server. Users had only FTP
            access to the server so calling support was the only way to access
            their files from the command line. The amazing resources that we
            enjoy today where rudimentary at the time. In learning to
            effectively support our commercial web hosting clients I learned
            everything I could about web design, web browsers, HTML, Javascript
            and server side scripting. Most importantly I learned how to
            communicate with people of varying technical backgrounds in an
            informed yet empathetic manner.
          </p>
        </div>
      </li>
      <li className="flex-item one">
        <div className="photo1">
          <img src={rioport} alt="rioport preview" />
          <p>
            Rioport was the first app that legally sold music online. A
            precursor to iTunes.
          </p>
        </div>
      </li>
      <li className="flex-item two">
        <div className="photo-small">
          <img src={mtv} alt="mtv preview" />
          <img src={vh1} alt="vh1 preview" />
          <p>
            While at Rioport we made music download sites for companies like
            Nike, MTV, Vh1 and HP. I was their primary front end developer.
          </p>
        </div>
      </li>
      <li className="flex-item one">
        <div className="para">
          <h5 id="detail-header">Things got real.</h5>
          <p className="summary-text">
            Utilizing my experience in supporting web developers I landed a
            front end developer position at an internet start up in Los Angeles.
            I played an integral part in building an app that allowed users to
            create and edit their own personal website right in the browser (new
            concept at the time). I played an integral part in integrating the
            branding, UI, and support pages for consistent experience in web
            browsers. Homepage was a very fast environment. I gained extensive
            experience with interacting with SQL database through HTML forms,
            integrating and optimizing graphics and code, quality assurance and
            working on a team. I worked with graphic designers to rebrand our
            application to build online communities for partners like Petsmart,
            and hollywood.com before social media existed.
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
            Later I moved to a prominent position at
            <a href="https://en.wikipedia.org/wiki/RioPort">
              the first internet music service (cloud service) to legally offer
              digital songs from all the major music labels
            </a>". Rioport's main product was a precursor to iTunes * . This was the
            most exciting and technically challenging role for me yet. I worked
            closely with our in-house graphic designers and designers from
            companies like Nike, and MTV to rebrand Rioport's app and content to
            their specific design and use. Working with design, engineering and
            marketing integrate graphics, data, and HTML/CSS for the web browser
            and then optimizing the final product was my main role. Additionally
            I worked with marketing to set up scheduled press releases,
            promotional pages, and content updates on the corporate marketing
            side of the site.
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
