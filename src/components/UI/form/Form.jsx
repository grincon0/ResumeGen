import React, { useState, useEffect, useReducer } from 'react';
import formStage from '../../../rules/formStages';
import FormList from './formList/FormList';
import SkillList from './skillList/SkillList';
import ProgressMeter from './progessMeter/ProgressMeter';
import getResumeFormSection from './_helper_functions/getResumeFormSection';
import './style.scss';

const Form = ({ pageValue }) => {
  const [formStageValue, setformStageValue] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isReviewing, setIsReviewing] = useState(false);
  const [userName, setUserName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const initalWorkFormState = {
    workExperience: []

  };
  const initalProjectFormState = {
    projectExperience: []
  };
  const initalEduFormState = {
    eduArray: []
  };

  const initalSkillFormState = {
    skillsArray: []
  };

  const addNewWorkExperience = () => {

  };

  const addNewProjectExperience = () => {

  };

  const addEduEntry = () => {

  };

  const addSkillEntry = () => {

  };

  const [workInputFields, setWorkInputFields] = useState([{ value: "" }]);

  const maxFormStageValue = 5;
  const hasFormInit = pageValue >= 2;

  const initialState = {};

  const eduFuncs = {

  }

  const workFuncs = {

  }

  const skillFuncs = {

  }

  const handleNextBtnClick = () => {
    if (formStageValue >= 0 && hasFormInit && !isAnimating) {
      // let currentVal = formStageValue;
      // setformStageValue(currentVal + 1);
      setIsAnimating(true);
    }
  };

  const handleBackBtnClick = () => {
    // if (formStageValue > 0) formStageValue -= 1;
  };

  const handleInputChange = (index, event) => {
    const newInputFields = [...inputFields];
    newInputFields[index].value = event.target.value;
    setInputFields(newInputFields);
  };

  const handleTransitionEnd = (event) => {
    // Access the propertyName attribute of the event
    console.log('Transition ended for property:', event);
    if (hasFormInit && isAnimating) {
      const currentValue = formStageValue;
      setformStageValue(currentValue + 1);
      setIsAnimating(false);
    }
  };

  const handleClassOutput = (formStageLimit) => {
    if (formStageValue === maxFormStageValue) {
      return '';
    } else if (!isAnimating && hasFormInit && formStageValue === formStageLimit) {
      return 'show';
    } else if (isAnimating && hasFormInit && formStageValue === formStageLimit) {
      return 'transition-out';
    } else {
      return 'hidden';
    }
  };

  const handleFormSubmission = () => {

  };

  useEffect(() => {
    console.log('current Resume stage', getResumeFormSection(formStageValue));

    // Allows user to review form before submitting
    if (formStageValue >= maxFormStageValue) {
      setIsReviewing(true)
    } else {
      setIsReviewing(false);
    }
  }, [formStageValue]);




  console.log('isAnimating', isAnimating);
  console.log('getResumeFormSection(1)', getResumeFormSection(1));
  console.log('getResumeFormSection(2)', getResumeFormSection(2));
  console.log('getResumeFormSection(3)', getResumeFormSection(3));
  console.log('getResumeFormSection(4)', getResumeFormSection(4));
  console.log('hasFormInit', hasFormInit);
  console.log('isReviewing', isReviewing);

  return (
    <div className="c-resume-form">
      <div className="form-messaging"></div>
      <ProgressMeter currentValue={formStageValue} maxValue={maxFormStageValue} />
      <form id="resume-form" className={`resume-form ${isReviewing ? 'reviewing' : ''}`} method="post">
        <div onTransitionEnd={handleTransitionEnd} className={`segment phase-zero ${handleClassOutput(0)}`}>
          <label for="user-name">Name</label>
          <input id="user-name" type="text" placeholder="Name" value={userName} onChange={(event) => setUserName(event.target.value)} />
          <label for="address">Address</label>
          <input id="address" type="text" placeholder="Address" value={address} onChange={(event) => setAddress(event.target.value)} />
          <label for="phone">Contact Number</label>
          <input id="phone" type="text" placeholder="Phone #" value={phone} onChange={(event) => setPhone(event.target.value)} />
          <label for="email">Email</label>
          <input id="email" type="text" placeholder="Email Address" value={email} onChange={(event) => setEmail(event.target.value)}  />
        </div>
        <div onTransitionEnd={handleTransitionEnd} className={`segment phase-one ${isReviewing ? 'in-review' : ''} ${handleClassOutput(1)}`}>
          <FormList handleInputChange={handleInputChange} targetSection={getResumeFormSection(1)} />
        </div>
        <div onTransitionEnd={handleTransitionEnd} className={`segment phase-two ${isReviewing ? 'in-review' : ''} ${handleClassOutput(2)}`}>
          <FormList handleInputChange={handleInputChange} targetSection={getResumeFormSection(2)} />
        </div>
        <div onTransitionEnd={handleTransitionEnd} className={`segment phase-three ${isReviewing ? 'in-review' : ''} ${handleClassOutput(3)}`}>
          <FormList handleInputChange={handleInputChange} targetSection={getResumeFormSection(3)} />
        </div>
        <div onTransitionEnd={handleTransitionEnd} className={`segment phase-four ${isReviewing ? 'in-review' : ''} ${handleClassOutput(4)}`}>
          <SkillList handleInputChange={handleInputChange} />
        </div>
        {isReviewing && <button type="submit" onClick={handleFormSubmission}>Finish</button>}
      </form>
      <div className="c-form-nav">
        {formStageValue > 0 && <button className="back-btn" onClick={handleBackBtnClick}>Back</button>}
        <button className="next-btn" onClick={handleNextBtnClick}>Next</button>
      </div>
    </div>
  )
};

export default Form;
