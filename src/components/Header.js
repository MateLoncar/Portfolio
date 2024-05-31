import React from 'react';
import '../styles/Header.css';
import { useLanguage } from './LanguageContext';
import LanguageSelector from './LanguageSelector';

const Header = () => {
    const { translate } = useLanguage();
  
    return (
      <header className="header-container">
        <h1 className="header-title">{translate('name')}</h1>
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
