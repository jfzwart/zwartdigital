import React from 'react';
import emailjs from 'emailjs-com';
import '../stylesheets/contact.scss';

export default function Contact() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_3bs6ztv', 'template_7o474tn', e.target, 'user_oyAq7nMshUv9WOOOfGZ3b')
      .then((result) => {
        window.alert('Thank you! Your message has been sent. I will get back to you as soon as possible. ');
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }

  return (
    <form className="contact-form" onSubmit={sendEmail}>
        <div className="contact-text"> 
          <p>
            Want to get in contact for a collaboration or because you have some questions? Please fill out the form below and I will get back to you as soon as possible.
          </p>
        </div>
      <label>Name</label>
      <input type="text" name="name" />
      <label>Email</label>
      <input type="email" name="email" />
      <label>Message</label>
      <textarea name="message" />
      <button className="buttonForm" type="submit">Submit</button>
    </form>
  );
}
