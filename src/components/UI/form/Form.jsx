import React, { useState, useEffect } from 'react';
import formStage from '../../../rules/formStages';
import FormList from './formList/FormList';
import ProgressMeter from './progessMeter/ProgressMeter';
import './style.scss';

const Form = ({ pageValue }) => {
  const [formStageValue, setformStageValue] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const maxFormStageValue = 5;
  const hasFormInit = pageValue >= 2;

  const handleNextBtnClick = () => {
    if (formStageValue >= 0 && hasFormInit && !isAnimating) {
      // let currentVal = formStageValue;
      // setformStageValue(currentVal + 1);
      setIsAnimating(true);
    }
  }

  const handleBackBtnClick = () => {
    // if (formStageValue > 0) formStageValue -= 1;
  }

  const handleTransitionEnd = (event) => {
    // Access the propertyName attribute of the event
    console.log('Transition ended for property:', event);
    if (hasFormInit && isAnimating) {
      const currentValue = formStageValue;
      setformStageValue(currentValue + 1);
      setIsAnimating(false);
    }
  }

  const handleClassOutput = (formStageLimit) => {
    if (!isAnimating && hasFormInit && formStageValue === formStageLimit) {
      return 'show';
    } else if (isAnimating && hasFormInit && formStageValue === formStageLimit) {
      return 'transition-out';
    } else {
      return 'hidden';
    }
  };

  /*   useEffect(() => {
      if (formStageValue > 0 && hasFormInit && !isAnimating) {
        let currentVal = formStageValue;
        setformStageValue(currentVal + 1);
      }
  
    }, [isAnimating, formStageValue]); */


  console.log('isAnimating', isAnimating);
  console.log('formStageValue', formStageValue);
  console.log('hasFormInit', hasFormInit);

  return (
    <div className="c-resume-form">
      <div className="form-messaging"></div>
      <ProgressMeter />
      <form id="resume-form" className="resume-form">
        <div onTransitionEnd={handleTransitionEnd} className={`segment phase-zero ${handleClassOutput(0)}`}>
          <label for="user-name">Name</label>
          <input id="user-name" type="text" placeholder="Name" />
          <label for="address">Address</label>
          <input id="address" type="text" placeholder="Address" />
          <label for="phone">Contact Number</label>
          <input id="phone" type="text" placeholder="Phone #" />
          <label for="email">Email</label>
          <input id="email" type="text" placeholder="Email Address" />
        </div>
        <div onTransitionEnd={handleTransitionEnd} className={`segment phase-one ${handleClassOutput(1)}`}>
          <FormList />
        </div>
        {/* <FormList transitionFunc={handleTransitionEnd} classOutputFunc={handleClassOutput(1)} /> */}
        {/*         <div id="projects" onTransitionEnd={handleTransitionEnd} className={`segment phase-two ${handleClassOutput(2)}`}>

        </div> */}
        {/*         <div id="projects" onTransitionEnd={handleTransitionEnd} className={`segment phase-three ${handleClassOutput(3)}`}>

        </div> */}
        {/*         <div onTransitionEnd={handleTransitionEnd} className={`segment phase-one ${handleClassOutput(1)}`}>
          <label for="workname">Company Name</label>
          <input type="text" id="workname" name="workname" placeholder="Company Name" />

          <label for="rolename">Title</label>
          <input type="text" id="rolename" name="rolename" placeholder="Role Title" />
          <label for="datetext">Date</label>
          <input type="text" id="datetext" name="datetext" placeholder="Type date range as you like it to appear" />
          <input type="checkbox" id="is-contractor" name="is-contractor" value="is-contractor" />
          <label for="is-contractor">Is this contractor role?</label>
        </div> */}
      </form>
      <div className="c-form-nav">
        {formStageValue > 0 && <button className="back-btn" onClick={handleBackBtnClick}>Back</button>}
        <button className="next-btn" onClick={handleNextBtnClick}>Next</button>
      </div>
    </div>
  )
};

export default Form;
