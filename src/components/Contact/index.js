import React from 'react';
// import './styles.css';
// import { Link } from 'react-router-dom';
const Contact = () => {
  return (
    <div className="con-h">
    <h5 id="detail-header">Interested in working with me?</h5>
    <p>
      I happen to be in the job market, please feel free to message me with
      any questions. I'm on Eastern Standard Time.
    </p>
    <div className='connect-form'>
    <form name="connect">
      <input type="hidden" name="form_tools_form_id" value="4" />
      <div>
        <input
          className="input-box"
          type="text"
          name="name"
          placeholder="Full Name:"
        />
        <input
          className="input-box"
          id="em-field"
          type="text"
          name="email"
          placeholder="Email Address:"
        />
      </div>

      <div>
        <input
          className="subject"
          type="text"
          name="subject"
          placeholder="Subject:"
        />
      </div>

      <div>
        <textarea
          className="comment-area"
          name="comment"
          placeholder="Message: "
        ></textarea>
      </div>

      <div>
        <button
          className="connect-submit"
          type="submit"
          name="send-it"
          value="Submit"
        >
          Send
        </button>
      </div>
    </form>
  </div>

  </div>
  );
};
export default Contact;
