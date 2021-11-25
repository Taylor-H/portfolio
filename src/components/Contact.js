import React from 'react';

const Contact = () => {
return (
<>
{/* <div className="connect-container">
  <form name="connect" action="https://htmlartist.net/formtools/process.php" method="post" onsubmit="return rsv.validate(this, rules)">
<input type="hidden" name="form_tools_form_id" value="4" />
  <div>
    <input className="input-box" type="text" name="name" placeholder="Full Name:" />
    <input className="input-box" id="em-field" type="text" name="email" placeholder="Email Address:" />
  </div>

  <div>
    <input className="subject" type="text" name="subject" placeholder="Subject:" />
  </div>

  <div>
    <textarea className="comment-area" name="comment" placeholder="Message: "></textarea>
  </div>

  <div>
    <button className="connect-submit" type="submit" name="send-it" value="Submit">Send</button>
  </div>
</form>
</div> */}

 <div className="con-h">
   <a name="contact"></a>
   <h4 id="section-title"><a href="/about">&#8250; Contact</a></h4>
   {/* <h5 id="detail-header">Interested in working with me?</h5>
   <p>Message me with with your project details and let's get started.</p>
 */}

<div className="email">
  <div className="em">
    <a id="mailto" alt="email me"></a>
  </div>
</div>

<div className="linkedin">
<div className="in">
    <a id="linkedin-link" target="_blank" href="http://www.linkedin.com/in/taylor-hembree-pell" alt="my linked in profile">
    </a>
  </div>
</div>

<div className="resume">
  <div className="rs">
    <a id="pdf-link" target="_blank" href="/images/taylor-pell-2019.pdf"></a>
  </div>
</div>
</div>



</>

)
}
export default Contact;
