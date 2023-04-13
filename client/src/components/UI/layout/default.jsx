import React, { useState } from 'react';
import Landing from '../landing/Landing';
import FormWrapper from '../formWrapper/FormWrapper';
import ColorModeIcon from './_helper_components/ColorModeIcon';
import '../../../styles/_index.scss';
import './default.scss';

const DefaultLayout = () => {
  const [viewValue, setViewValue] = useState(1);
  const [isLightMode, setIsLightMode] = useState(true);

  const handleColorMode = () => {
    setIsLightMode(isLightMode => !isLightMode);
  };

  return (
    <>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet" />
      </head>
      <div className={`App ${viewValue === 2 ? 'form-active' : ''} ${isLightMode ? 'light-mode' : ''}`}>
        {(viewValue <= 2) &&
          (<>
            <ColorModeIcon isLightMode={isLightMode} handleColorMode={handleColorMode} />
            <div className={`${viewValue !== 1 ? 'hide' : ''}`}>
              <Landing propFunc={() => setViewValue(2)} />
            </div>
            <div className={`form-block ${viewValue !== 2 ? 'hide-form' : 'show-form'}`}>
              <FormWrapper isLightMode={isLightMode} viewValue={viewValue} setViewValue={() => setViewValue()} />
            </div>
          </>)
        }
      </div>
    </>
  );
}

export default DefaultLayout;