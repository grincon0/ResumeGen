import React from 'react';
import moonSVG from '../../../../resources/icons/crescent-moon.svg';
import sunSVG from '../../../../resources/icons/sun.svg';

const ColorModeIcon = ({isLightMode, handleColorMode}) => {
  const svgIconSrc = isLightMode ? sunSVG : moonSVG;
  return (<div className="c-color-mode">
    {<img alt="color-mode-icon" src={svgIconSrc} onClick={handleColorMode} />}
  </div>);
};

export default ColorModeIcon;
