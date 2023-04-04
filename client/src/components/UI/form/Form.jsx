import React, { useState, useEffect, useReducer, useRef } from 'react';
import axios from 'axios';
import formStage from '../../../rules/formStages';
import FormList from './formList/FormList';
import SkillList from './skillList/SkillList';
import ProgressMeter from './progessMeter/ProgressMeter';
import getResumeFormSection from './_helper_functions/getResumeFormSection';
import PDFResume from '../../PDF/PDFResume';
import { PDFDownloadLink } from "@react-pdf/renderer";
import './style.scss';

const Form = ({ pageValue, setPageValue, isLightMode }) => {
  const [formStageValue, setformStageValue] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isReviewing, setIsReviewing] = useState(false);
  const [buttonClickType, setButtonClickType] = useState(null);
  const [userName, setUserName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [gitLink, setGitLink] = useState('');
  const [portfolioLink, setPortfolioLink] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [resumeData, setResumeData] = useState(null);
  const backBtn = useRef(null);

  /* ADD_ENTRY will push new obj, which will in turn allow for the comp to render another set of list item inputs */
  const workReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_ENTRY':
        return [...state, { workName: '', roleTitle: '', dateString: '', isContractor: false, showContractor: false, workBulletString: '' }];
      case 'UPDATE_ENTRY':
        const { index, name, value } = action.payload;
        const updatedDiv = Object.assign({}, state[index], { [name]: value });
        return [
          ...state.slice(0, index),
          updatedDiv,
          ...state.slice(index + 1)
        ];
      case 'DELETE_ENTRY':
        const { elIndex } = action.payload;
        return state.filter((_, index) => index !== elIndex);
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
        const updatedDiv = Object.assign({}, state[index], { [name]: value });
        return [
          ...state.slice(0, index),
          updatedDiv,
          ...state.slice(index + 1)
        ];
      case 'DELETE_ENTRY':
        const { elIndex } = action.payload;
        return state.filter((_, index) => index !== elIndex);
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
        const updatedDiv = Object.assign({}, state[index], { [name]: value });
        return [
          ...state.slice(0, index),
          updatedDiv,
          ...state.slice(index + 1)
        ];
      case 'DELETE_ENTRY':
        const { elIndex } = action.payload;
        return state.filter((_, index) => index !== elIndex);
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
        const updatedDiv = Object.assign({}, state[index], { [name]: value });
        return [
          ...state.slice(0, index),
          updatedDiv,
          ...state.slice(index + 1)
        ];
      case 'DELETE_ENTRY':
        const { elIndex } = action.payload;
        debugger;
        return state.filter((_, index) => index !== elIndex);
      default:
        throw new Error();
    }
  };

  const [workState, dispatchWorkEntry] = useReducer(workReducer, [{ workName: '', roleTitle: '', dateString: '', isContractor: false, showContractor: false, workBulletString: '' }]);
  const [projectState, dispatchProjectEntry] = useReducer(projectReducer, [{ projectName: '', projectDescription: '', projectBulletString: '' }]);
  const [eduState, dispatchEduEntry] = useReducer(eduReducer, [{ eduName: '', dateString: '', eduType: '', locale: '', eduBulletString: '' }]);
  const [skillState, dispatchSkillEntry] = useReducer(skillReducer, [{ skillRowTitle: '', skillRowString: '' }]);

  const maxFormStageValue = 5;
  const hasFormInit = pageValue >= 2;

  const formData = {
    userName,
    address,
    phone,
    email,
    gitLink,
    portfolioLink,
    workEntries: workState,
    projectEntries: projectState,
    eduEntries: eduState,
    skillEntries: skillState
  };

  const handleNextBtnClick = () => {
    if (formStageValue >= 0 && hasFormInit && !isAnimating) {
      setIsAnimating(true);
    }
  };

  const handleBackBtnClick = (event) => {
    event.preventDefault();
    if (formStageValue >= 0 && hasFormInit && !isAnimating) {
      setButtonClickType(backBtn.current.dataset.btnType);
      setIsAnimating(true);
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);
    axios.post('/submit-form', formData)
      .then(response => response.data)
      .then((data) => {
        console.log('data recieved', data);
        setResumeData(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  const handleTransitionEnd = (event) => {
    // Access the propertyName attribute of the event
    if (hasFormInit && isAnimating) {
      const currentValue = formStageValue;
      if (buttonClickType === 'back') {
        setformStageValue(currentValue - 1);
      } else {
        setformStageValue(currentValue + 1);
      }
      setButtonClickType(null);
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

  useEffect(() => {
    // Allows user to review form before submitting
    if (formStageValue >= maxFormStageValue) {
      setIsReviewing(true)
    } else {
      setIsReviewing(false);
    }
  }, [formStageValue]);

  return (
    <div className={`c-resume-form ${isLightMode ? 'light-mode' : ''}`}>
      <div className="form-messaging"></div>
      <ProgressMeter currentValue={formStageValue} maxValue={maxFormStageValue} isLightMode={isLightMode} />
      <form id="resume-form" className={`resume-form ${isReviewing ? 'reviewing' : ''}`} onSubmit={handleFormSubmit}>
        <div onTransitionEnd={handleTransitionEnd} className={`segment phase-zero ${handleClassOutput(0)}`}>
          <div className="c-contact-items list-items">
            <label for="user-name">Name</label>
            <input id="user-name" type="text" placeholder="Name" value={userName} onChange={(event) => setUserName(event.target.value)} />
            <label for="address">Address</label>
            <input id="address" type="text" placeholder="Address" value={address} onChange={(event) => setAddress(event.target.value)} />
            <label for="phone">Contact Number</label>
            <input id="phone" type="text" placeholder="Phone #" value={phone} onChange={(event) => setPhone(event.target.value)} />
            <label for="email">Email</label>
            <input id="email" type="text" placeholder="Email Address" value={email} onChange={(event) => setEmail(event.target.value)} />
            <label for="gitLink">Github Url</label>
            <input id="gitLink" type="text" placeholder="Github Url" value={gitLink} onChange={(event) => setGitLink(event.target.value)} />
            <label for="portfolioLink">Portfolio Site Url</label>
            <input id="portfolioLink" type="text" placeholder="Portfolio Site Url" value={portfolioLink} onChange={(event) => setPortfolioLink(event.target.value)} />
          </div>
        </div>
        <div onTransitionEnd={handleTransitionEnd} className={`segment phase-one ${isReviewing ? 'in-review' : ''} ${handleClassOutput(1)}`}>
          <FormList isLightMode={isLightMode} dispatch={dispatchWorkEntry} reducerState={workState} targetSection={getResumeFormSection(1)} />
        </div>
        <div onTransitionEnd={handleTransitionEnd} className={`segment phase-two ${isReviewing ? 'in-review' : ''} ${handleClassOutput(2)}`}>
          <FormList isLightMode={isLightMode} dispatch={dispatchProjectEntry} reducerState={projectState} targetSection={getResumeFormSection(2)} />
        </div>
        <div onTransitionEnd={handleTransitionEnd} className={`segment phase-three ${isReviewing ? 'in-review' : ''} ${handleClassOutput(3)}`}>
          <FormList isLightMode={isLightMode} dispatch={dispatchEduEntry} reducerState={eduState} targetSection={getResumeFormSection(3)} />
        </div>
        <div onTransitionEnd={handleTransitionEnd} className={`segment phase-four ${isReviewing ? 'in-review' : ''} ${handleClassOutput(4)}`}>
          <FormList isLightMode={isLightMode} dispatch={dispatchSkillEntry} reducerState={skillState} targetSection={getResumeFormSection(4)} />
        </div>
        {(isReviewing && !formSubmitted) && <button className="submit-btn" type="submit">Submit Form</button>}
        {(formSubmitted && resumeData) && (<PDFDownloadLink document={<PDFResume resumeJSON={resumeData} />} filename="FORM">
            {({ loading }) => (loading ? <button className="submit-btn">Generating Resume...</button> : <button className="submit-btn">Download Resume</button>)}
          </PDFDownloadLink>)}
      </form>
      <div className={`c-form-nav ${formStageValue === 0 ? 'on-contact-form' : ''}`}>
        {formStageValue < maxFormStageValue && formStageValue > 0 && <button ref={backBtn} data-btn-type="back" className="back-btn" onClick={(event) => handleBackBtnClick(event)}>Back</button>}
        {formStageValue < maxFormStageValue && <button data-btn-type="next" className="next-btn" onClick={handleNextBtnClick}>Next</button>}
      </div>
    </div>
  )
};

export default Form;
