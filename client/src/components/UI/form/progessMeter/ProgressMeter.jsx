import React, { useState, useEffect } from 'react';
import './style.scss';

const ProgressMeter = ({ currentValue, maxValue, isLightMode}) => {
  const [width, setWidth] = useState(0);
  console.log('isLightMode in ProgressBar', isLightMode);

  const convertWidthToPercentage = () => {
    return (currentValue / maxValue) * 100;
  }

  useEffect(() => {
    const newWidth = convertWidthToPercentage();
    if (newWidth !== width) setWidth(newWidth);
  }, [currentValue]); 

  return (
    <div className={`c-progress-bar ${isLightMode ? 'light-mode' : ''}`}>
      <div className="progress-bar" style={{width : `${width}%`}}></div>
    </div>
  )
};

export default ProgressMeter;
