import React, { useState,useRef } from 'react';
import emailjs from '@emailjs/browser';
import e from 'cors';

function Contact() {
   const form = useRef()
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;

    function handleChange(e) {
        setFormState({...formState, [e.target.name]: e.target.value })
      }
      
      console.log(formState);

      const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_f6xbg0j', 'template_6f4tlub', form.current, 'JfzOdPoD5pB2z0jvb')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
    return (
        <section>
          <h1>Contact me</h1>
          <form id="contact" onSubmit={sendEmail} >
            <div>
              <label htmlFor="name">Name:</label>
              <input type="text" defaultValue={name} onChange={handleChange} name="name" />
            </div>
            <div>
              <label htmlFor="email">Email address:</label>
              <input type="email" defaultValue={email} name="email" onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="message">Message:</label>
              <textarea name="message" defaultValue={message} onChange={handleChange} rows="5" />
            </div>
            <button type="submit">Submit</button>
          </form>
        </section>
        );
}

export default Contact;
