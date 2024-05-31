import React from 'react';
import '../styles/About.css';
import { useLanguage } from './LanguageContext';
import linkedinLogo from '../assets/img/linkedin_logo.png';
import githubLogo from '../assets/img/github_logo.png';
import profilePicture from '../assets/img/Mate_Loncar.jpg';

const About = () => {
  const { translate } = useLanguage();

  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/mate-loncar-076a69197/', '_blank');
  };

  const handleGitHubClick = () => {
    window.open('https://github.com/MateLoncar', '_blank');
  };

  return (
    <section id="about" className="section-content">
      <div className="about-container">
        <div className="profile-picture-container">
          <img src={profilePicture} alt="Profile Picture" className="profile-picture" />
          <div className="social-media-icons">
            <img
              src={linkedinLogo}
              alt="LinkedIn Logo"
              className="social-media-icon"
              onClick={handleLinkedInClick}
            />
            <img
              src={githubLogo}
              alt="GitHub Logo"
              className="social-media-icon"
              onClick={handleGitHubClick}
            />
          </div>
        </div>
        <div className="about-text-container">
          <h2>{translate('aboutMe')}</h2>
          <p>{translate('aboutText')}</p>
        </div>
      </div>
    </section>
  );
};

export default About;
