import React from 'react';
import getNumberSuffix from '../../_helper_functions/getNumberSuffix';
import ItemDeleteButton from '../../formList/formListItem/_helper_components/itemDeleteButton/ItemDeleteButton';

const SkillRow = ({ dispatch, index, transitionOut }) => {
  const numPlacement = index + 1;
  const handleInputChange = (name, value, elIndex) => {
    dispatch({
      type: 'UPDATE_ENTRY',
      payload: { index: elIndex, name, value }
    });
  };

  const handleDeleteButtonClick = (index) => {
    dispatch({
      type: 'DELETE_ENTRY',
      payload: { elIndex: index }
    })
  };

  return (<div className={`c-skill-row list-items ${transitionOut ? '' : ''}`} >
    <ItemDeleteButton propFunc={() => handleDeleteButtonClick(index)} />
    <div className="content-wrapper">
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
    </div>
  </div>)
}

export default SkillRow;
