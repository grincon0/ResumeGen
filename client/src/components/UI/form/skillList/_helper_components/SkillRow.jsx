import React from 'react';
import getNumberSuffix from '../../_helper_functions/getNumberSuffix';

const SkillRow = ({ dispatch, index, functions, transitionOut }) => {
  const { handleTransitionEnd } = functions;
  const numPlacement = index + 1;
  const handleInputChange = (name, value, elIndex) => {
    dispatch({
      type: 'UPDATE_ENTRY',
      payload: { index: elIndex, name, value }
    });
  };

  return (<div className={`c-skill-row ${transitionOut ? '' : ''}`} >
    <label for={`skillRowTitle-${index}`}>{`${numPlacement.toString()}${getNumberSuffix(numPlacement)} Skillset Category`}</label>
    <input
      type="text"
      id={`skillRowTitle-${index}`}
      name="skillRowTitle"
      placeholder="Category of Skill. (i.e. Frontend, Cloud, etc.)"
      onChange={(e) => handleInputChange(e.target.name, e.target.value, index)} />
    <label for={`skill-items-${index}`}>Skills</label>
    <textarea
      id={`skill-items-${index}`}
      name="skillRowString"
      rows="6"
      cols="50"
      placeholder="Type in skills here - each seperated by a comma."
      onChange={(e) => handleInputChange(e.target.name, e.target.value, index)}></textarea>
  </div>)
}

export default SkillRow;
