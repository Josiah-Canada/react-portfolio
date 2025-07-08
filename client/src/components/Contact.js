import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_00lepju', 'template_if295fd', form.current, 'JfzOdPoD5pB2z0jvb')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return (
    <form id="card" ref={form} onSubmit={sendEmail}>
      <div>
      <label>Name</label>
      <input type="text" name="user_name" />
      </div>
      <div>
      <label>Email</label>
      <input type="text" name="user_email" />
      </div>
      <div>
      <label>Message</label>
      <textarea name="message" />
      <input id="submit" type="submit" value="Send" />
      </div>
    </form>
  );
};

export default ContactUs;