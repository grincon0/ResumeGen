import React, { useState, useEffect } from 'react';
import JSON from '../../../JSON/content.json'
import Landing from '../landing/Landing';
import '../../../styles/_index.scss';
import './default.scss';
import FormWrapper from '../formWrapper/FormWrapper';
import ColorModeIcon from './_helper_components/ColorModeIcon';
import PDFResume from '../../PDF/PDFResume';

const DefaultLayout = () => {
  const [viewValue, setViewValue] = useState(1);
  const [isLightMode, setIsLightMode] = useState(true);

  const handleColorMode = () => {
    if (isLightMode) {
      return setIsLightMode(false)
    }

    return setIsLightMode(true)
  }

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
{/*         {viewValue === 3 && (<>
          <PDFDownloadLink document={<PDFResume resumeJSON={JSON} />} filename="FORM">
            {({ loading }) => (loading ? <button>Loading Document...</button> : <button>Download</button>)}
          </PDFDownloadLink>
        </>)} */}

        {/* ReactPDF.render(<MyDocument />, `${__dirname}/example.pdf`); */}

        {/* {resumeValue === 1 ? <ClassicLayout resumeData={JSON} /> : <ModernLayout resumeData={JSON} /> } */}
      </div>
    </>
  );
}

export default DefaultLayout;