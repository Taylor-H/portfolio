import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import{ init } from '@emailjs/browser';
import apiKeys from '../../.env.js';
init(`apiKey.USER_ID`);



const Contact = () => {
  const formState = useRef();

  const [formResult , setResult] = useState({formResult: ''});
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    company: '',
    phone: '',
    email: '',
    message: '',
  });

const sendEmail = (e) => {
  e.preventDefault();
    emailjs.sendForm(`${apiKeys.SERVICE_ID}`, `${apiKeys.TEMPLATE_ID}`, formState.current, `${apiKeys.USER_ID}`)
        .then((result) => {
            console.log('result', result.text);
            (result.text === 'OK') ? setResult(result.text): alert('Message failed to send');
        }, (error) => {
            console.log(error.text);
        });
    };

const successHTML = <div className="success">
    Your message has been sent successfully!
  </div>;

const formHTML = <>
<h5 id="detail-header">Interested in working with me?</h5>
<p>
  This form will send me an email message.
</p>
<div className='connect-form'>
  <form id="email" ref={formState} onSubmit={sendEmail}>
       <div>
        <input
          className="input-box"
          type="text"
          name="firstname"
          onChange={setFormData}
          placeholder={"First Name:"}
        />
        <input
          className="input-box"
          type="text"
          name="lastname"
          placeholder="Last Name:"
          onChange={setFormData}
        />
      </div>
      <div>
        <input
          className="input-box"
          type="text"
          name="company"
          placeholder="Company"
          onChange={setFormData}
        />
        <input
          className="input-box"
          id="em-field"
          type="email"
          name="email"
          placeholder="Email Address:"
          onChange={setFormData}
        />
      </div>
      <div>
        <input
          className="subject"
          type="text"
          name="phone"
          placeholder="phone"
          onChange={setFormData}
        />
      </div>
      <div>
        <textarea
          className="comment-area"
          name="message"
          placeholder="Message: "
          onChange={setFormData}
        ></textarea>
      </div>

      <div>
        <button
          className="connect-submit"
          type="submit" value="send"
        >
          Send
        </button>
      </div>
    </form>
    </div>
    </>;
  return (
  <div id="connect-page" className="con-h">
    {(formResult === 'OK') ? successHTML : formHTML}
  </div>
  );
};

export default Contact;
