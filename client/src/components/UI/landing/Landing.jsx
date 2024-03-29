import React, { useState } from 'react';
import './style.scss';

const Landing = ({ propFunc }) => {
  const [click, setClickState] = useState(false);

  const handleButtonClick = () => {
    if (!click) return setClickState(true);
    setClickState(false);
  }

  const handlePropFunction = propFunc;

  return (
    <div className={`c-landing ${click ? 'has-transition' : ''}`}>
      <h1 onTransitionEnd={handlePropFunction} className="headline">{`{ Hello World }`}</h1>
      <span className="sub-headline">Want to build a resume? Tired of formating layouts and subscription fees?</span>
      <div className="c-button">
        <button onClick={handleButtonClick}>START</button>
      </div>
    </div>
  );
};

export default Landing;
