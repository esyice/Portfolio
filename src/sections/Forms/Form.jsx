import styles from './Form.module.css'
import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'

const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_q6qsoff',   // Replace with your EmailJS Service ID
      'template_4g8r8bs',  // Replace with your EmailJS Template ID
      form.current,
      'wtzGhylfXGsIB-u50'  // Replace with your EmailJS Public Key
    )
    .then(() => {
      alert('Email sent successfully!');
      form.current.reset(); 
    }, () => {
      alert('Failed to send email, please try again.');
    });
  };

  return (
    <section>
      <div className={styles.heading}>
        <button className={styles.headingbtm}>Contact Me!</button>
      </div>
      <div className={styles.contact}>
        {/* Added ref and onSubmit to the form */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Full Name" autoComplete="off" required/>
          <input type="email" name="email" placeholder="Email Address" autoComplete="off" required/>
          <textarea name="message" placeholder="Your Message" cols="45" rows="10" autoComplete="off" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Form;
