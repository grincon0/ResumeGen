import React, { useState } from 'react';
import './style.scss';

const Landing = ({ propFunc }) => {
  const [click, setClickState] = useState(false);

  const handleButtonClick = () => {
    if (!click) {
      return setClickState(true);
    }
    setClickState(false)
  }

  const callPropFunction = () => {
    propFunc();
  }

  console.log('click state', click);
  return (
    <div className={`c-landing ${click ? 'has-transition' : ''}`}>
      <h1 onTransitionEnd={callPropFunction} className="headline">{`{ Hello World }`}</h1>
      <span className="sub-headline">Want to build a resume? Tired of formating layouts and subscription fees?</span>
      <span className="call-to-action">Stick it to the man and click below.</span>
      <div className="c-button">
        <button onClick={handleButtonClick}>Begin Now</button>
      </div>
    </div>
  );
};

export default Landing;
