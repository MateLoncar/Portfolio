import React, { useState } from 'react';
import '../styles/Contact.css';
import { useLanguage } from './LanguageContext';
import emailjs from 'emailjs-com';

const Contact = () => {
  const { translate } = useLanguage();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1zcn4ve', 'template_hvr2var', e.target, 'TrvSkQnrMyKX5OyV1')
      .then((result) => {
        console.log(result.text);
        setFormSubmitted(true);
      }, (error) => {
        console.log(error.text);
      });

    e.target.reset();
  };

  return (
    <section id="contact" className="section-content">
      <h2 className="contact-heading">{translate('contactMe')}</h2>
      {!formSubmitted ? (
        <form className="contact-form" onSubmit={sendEmail}>
          <input type="text" name="name" placeholder={translate('yourName')} required />
          <input type="email" name="email" placeholder={translate('yourEmail')} required />
          <textarea name="message" placeholder={translate('yourMessage')} required></textarea>
          <button type="submit" className="submit-button">{translate('send')}</button>
        </form>
      ) : (
        <p className="thank-you-message">{translate('thankYouMessage')}</p>
      )}
    </section>
  );
};

export default Contact;
