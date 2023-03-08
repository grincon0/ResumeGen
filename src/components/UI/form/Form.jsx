import React, { useState, useEffect } from 'react';
import formStage from '../../../rules/formStages';
import ProgressMeter from './progessMeter/ProgressMeter';
import './style.scss';

const Form = () => {
  const [stageValue, setStageValue] = useState(0);
  const maxStageValue = 5;

  const handleNextBtnClick = () => {
    if (stageValue >= 0) stageValue += 1;
  }

  const handleBackBtnClick = () => {
    if (stageValue > 0) stageValue -= 1;
  }

  return (
    <div className="c-resume-form">
      <div className="form-messaging"></div>
      <ProgressMeter />
      <form id="resume-form">
        {stageValue === 0 && (
          <>
            <label for="user-name">Name</label>
            <input id="user-name" type="text" placeholder="Name" />
            <label for="address">Address</label>
            <input id="address" type="text" placeholder="Address" />
            <label for="phone">Contact Number</label>
            <input id="phone" type="text" placeholder="Phone #" />
            <label for="email">Email</label>
            <input id="email" type="text" placeholder="Email Address" />
          </>
        )}
        {
          stageValue === 1 && (
            <>
              <label for="workname">Company Name</label>
                <input type="text" id="workname" name="workname" placeholder="Company Name" />

              <label for="rolename">Title</label>
                <input type="text" id="rolename" name="rolename" placeholder="Role Title" />
              <label for="datetext">Date</label>
                <input type="text" id="datetext" name="datetext" placeholder="Type date range as you like it to appear" />
              <input type="checkbox" id="is-contractor" name="is-contractor" value="is-contractor" />
              <label for="is-contractor">Is this contractor role?</label>
            </>
          )
        }

      </form>
      <div className="c-form-nav">
        <button className="back-btn">Back</button>
        <button className="next-btn">Next</button>
      </div>
    </div>
  )
};

export default Form;
