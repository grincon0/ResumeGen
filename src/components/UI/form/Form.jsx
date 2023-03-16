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

  /* ADD_ENTRY will push new obj, which will in turn allow for the comp to render another set of list item inputs */
  const workReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_ENTRY':
        return [...state, { workName: '', roleTitle: '', dateString: '', isContractor: '', workBulletString: '' }];
      case 'UPDATE_ENTRY':
        const { index, name, value } = action.payload;
        console.log('action', action);
        const updatedDiv = Object.assign({}, state[index], { [name]: value });
        return [
          ...state.slice(0, index),
          updatedDiv,
          ...state.slice(index + 1)
        ];
      default:
        throw new Error();
    }
  };

  const projectReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_ENTRY':
        return [...state, { projectName: '', description: '', projectBulletString: '' }];
      case 'UPDATE_ENTRY':
        const { index, name, value } = action.payload;
        console.log('action', action);
        const updatedDiv = Object.assign({}, state[index], { [name]: value });
        return [
          ...state.slice(0, index),
          updatedDiv,
          ...state.slice(index + 1)
        ];
      default:
        throw new Error();
    }
  };

  const eduReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_ENTRY':
        return [...state, { eduName: '', dateString: '', eduType: '', locale: '', eduBulletString: '' }];
      case 'UPDATE_ENTRY':
        const { index, name, value } = action.payload;
        console.log('action', action);
        const updatedDiv = Object.assign({}, state[index], { [name]: value });
        return [
          ...state.slice(0, index),
          updatedDiv,
          ...state.slice(index + 1)
        ];
      default:
        throw new Error();
    }
  };

  const skillReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_ENTRY':
        return [...state, { skillRowTitle: '', skillRowString: '' }];
      case 'UPDATE_ENTRY':
        const { index, name, value } = action.payload;
        console.log('action', action);
        const updatedDiv = Object.assign({}, state[index], { [name]: value });
        return [
          ...state.slice(0, index),
          updatedDiv,
          ...state.slice(index + 1)
        ];
      default:
        throw new Error();
    }
  };

  const [workState, dispatchWorkEntry] = useReducer(workReducer, [{ workName: '', roleTitle: '', dateString: '', isContractor: '', workBulletString: '' }]);
  const [projectState, dispatchProjectEntry] = useReducer(projectReducer, [{ projectName: '', projectDescription: '', projectBulletString: '' }]);
  const [eduState, dispatchEduEntry] = useReducer(eduReducer, [{ eduName: '', dateString: '', eduType: '', locale: '', eduBulletString: '' }]);
  const [skillState, dispatchSkillEntry] = useReducer(skillReducer, [{ skillRowTitle: '', skillRowString: '' }]);

  const maxFormStageValue = 5;
  const hasFormInit = pageValue >= 2;

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

  console.log('form level work state', workState);

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
          <input id="email" type="text" placeholder="Email Address" value={email} onChange={(event) => setEmail(event.target.value)} />
        </div>
        <div onTransitionEnd={handleTransitionEnd} className={`segment phase-one ${isReviewing ? 'in-review' : ''} ${handleClassOutput(1)}`}>
          <FormList dispatch={dispatchWorkEntry} reducerState={workState} targetSection={getResumeFormSection(1)} />
        </div>
         <div onTransitionEnd={handleTransitionEnd} className={`segment phase-two ${isReviewing ? 'in-review' : ''} ${handleClassOutput(2)}`}>
          <FormList dispatch={dispatchProjectEntry} reducerState={projectState} targetSection={getResumeFormSection(2)} />
        </div>
        <div onTransitionEnd={handleTransitionEnd} className={`segment phase-three ${isReviewing ? 'in-review' : ''} ${handleClassOutput(3)}`}>
          <FormList dispatch={dispatchEduEntry} reducerState={eduState} targetSection={getResumeFormSection(3)} />
        </div>
        <div onTransitionEnd={handleTransitionEnd} className={`segment phase-four ${isReviewing ? 'in-review' : ''} ${handleClassOutput(4)}`}>
          <FormList dispatch={dispatchSkillEntry} reducerState={skillState} targetSection={getResumeFormSection(4)}/>
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
