import React from 'react';
import moonSVG from '../../../../resources/icons/crescent-moon.svg';
import sunSVG from '../../../../resources/icons/sun.svg';

const ColorModeIcon = ({isLightMode, handleColorMode}) => {
  return <div className="c-color-mode" onClick={handleColorMode}>{isLightMode ? <sunSVG /> : <moonSVG />}</div>
};

export default ColorModeIcon;
