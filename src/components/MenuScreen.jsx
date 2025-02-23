import React from 'react';
import { useTranslation } from 'react-i18next'; 
import SpainFlag from '../assets/flags/spain-flag.svg';
import EnglishFlag from '../assets/flags/english-flag.svg';


const MenuScreen = ({ onSelect }) => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="menu-screen">
      <h1>{t('title')}</h1>
      <button onClick={() => onSelect('1vs1')}>{t('start1vs1')}</button>
      <button onClick={() => onSelect('1vsBot')}>{t('start1vsBot')}</button>
      <div className="language-selector">
        <button onClick={() => changeLanguage('en')}> 
          <img 
            src={EnglishFlag}
            alt="Bandera de España" 
            style={{ width: '24px', height: '24px' }}
          />
          </button>
        <button onClick={() => changeLanguage('es')}>
        <img 
            src={SpainFlag}
            alt="Bandera de España" 
            style={{ width: '24px', height: '24px' }}
          />
        </button>
      </div>
    </div>
  );
};

export default MenuScreen;