import React, { useState, useEffect } from 'react';
import JSON from '../../../JSON/content.json'
import Landing from '../landing/Landing';
import '../../../styles/_index.scss';
import './default.scss';
import FormWrapper from '../formWrapper/FormWrapper';


console.log('json app level', JSON);
const DefaultLayout = () => {

  const [pageValue, setPageValue] = useState(1);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const switchToForm = () => {
    console.log('func called');
    setPageValue(2);
    console.log('page value', pageValue);
  }

  useEffect(() => {

  }, []);
  return (
    <>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet" />
      </head>
      <div className={`App ${pageValue === 2 ? 'form-active' : ''}`}>
        <div className={`${pageValue !== 1 ? 'hide' : ''}`}>
          <Landing propFunc={switchToForm} />
        </div>
        <div className={`form-block ${pageValue !== 2 ? 'hide-form' : 'show-form'} ${isDarkMode ? 'dark-mode' : ''}`}>
          <FormWrapper isDarkMode={isDarkMode} pageValue={pageValue} />
        </div>
        {/* {resumeValue === 1 ? <ClassicLayout resumeData={JSON} /> : <ModernLayout resumeData={JSON} /> } */}
      </div>
    </>
  );
}

export default DefaultLayout;