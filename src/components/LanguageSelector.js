import React, { useState } from 'react';
import { useLanguage } from './LanguageContext';
import '../styles/LanguageSelector.css'; 
import FlagIconFactory from 'react-flag-icon-css';

const FlagIcon = FlagIconFactory(React, { useCssModules: false });
const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLanguageChange = (selectedLanguage) => {
    setLanguage(selectedLanguage);
    setIsDropdownOpen(false); 
  };

  return (
    <div className="language-selector">
      <div className="selected-language" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
        <FlagIcon code={language === 'en' ? 'gb' : 'de'} />
      </div>
      {isDropdownOpen && (
        <div className="dropdown-content">
          <button onClick={() => handleLanguageChange('en')} disabled={language === 'en'}>
            <FlagIcon code="gb" />
          </button>
          <button onClick={() => handleLanguageChange('de')} disabled={language === 'de'}>
            <FlagIcon code="de" />
          </button>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
