import React from 'react';
import '../styles/About.css';
import { useLanguage } from './LanguageContext';

const About = () => {
  const { translate } = useLanguage();

  return (
    <section id="about" className="section-content">
      <h2>{translate('aboutMe')}</h2>
      <p>{translate('aboutText')}</p>
    </section>
  );
};

export default About;
