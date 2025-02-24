import React from 'react';
import { useTranslation } from 'react-i18next'; 

const LoadingScreen = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="loading-screen">
      <h1 className="text-4xl font-bold mb-4"> {t('loading')}</h1>
    </div>
  );
};

export default LoadingScreen;
