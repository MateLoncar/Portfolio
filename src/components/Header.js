import React from 'react';
import '../styles/Header.css';
import { useLanguage } from './LanguageContext';
import LanguageSelector from './LanguageSelector';
import MLLogo from '../assets/img/ML_logo.png';

const Header = () => {
    const { translate } = useLanguage();
  
    return (
      <header className="header-container">
        <img src={MLLogo} alt="ML Logo" className="header-logo" />
        <nav className="header-nav">
          <ul>
            <li><a href="#about">{translate('about')}</a></li>
            <li><a href="#projects">{translate('projects')}</a></li>
            <li><a href="#contact">{translate('contact')}</a></li>
          </ul>
        </nav>
        <LanguageSelector />
      </header>
    );
  };
  
  export default Header;
