import React from 'react';
import '../styles/Footer.css';

import { useLanguage } from './LanguageContext';

const Footer = () => {
  const { translate } = useLanguage();

  return (
    <footer>
      <p>{translate('copyright')}</p>
    </footer>
  );
};

export default Footer;