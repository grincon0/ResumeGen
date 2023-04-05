import React, { useState } from 'react';
import BulletTextArea from '../BulletTextArea/BulletTextArea';
import getNumberSuffix from '../../../_helper_functions/getNumberSuffix';
import ItemDeleteButton from '../_helper_components/itemDeleteButton/ItemDeleteButton';

const WorkListItem = ({ element, transitionOut = false, index, functions, reducerState, dispatch }) => {
  // const { handleTransitionEnd, numberOfListItems } = functions;
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

  return (
    <div className={`c-work-items list-items ${transitionOut ? '' : ''}`} key={`${index}`} >
      <ItemDeleteButton propFunc={() => handleDeleteButtonClick(index)}/>
      <div className="content-wrapper">
        <label for={`workname-${index}`}>{`${numPlacement.toString()}${getNumberSuffix(numPlacement)} Company Name`}</label>
        <input
          type="text"
          id={`workname-${index}`}
          name="workName"
          placeholder="Company Name"
          value={element.workName}
          onChange={(e) => handleInputChange(e.target.name, e.target.value, index)}
        />
        <label for={`roleTitle-${index}`}>Title</label>
        <input
          type="text"
          id={`roleTitle-${index}`}
          name="roleTitle"
          placeholder="Role Title"
          value={element.roleTitle}
          onChange={(e) => handleInputChange(e.target.name, e.target.value, index)}
        />
        <label for={`dateString-${index}`}>Date</label>
        <input
          type="text"
          id={`dateString-${index}`}
          name="dateString"
          placeholder="Type date range as you like it to appear"
          value={element.dateString}
          onChange={(e) => handleInputChange(e.target.name, e.target.value, index)}
        />
        <div className="c-contractor">
          <input
            className="contractor"
            type="checkbox" id={`is-contractor-${index}`}
            name="isContractor"
            checked={element.isContractor}
            onChange={(e) => handleInputChange(e.target.name, e.target.checked, index)}
          />
          <label className="contractor-label" for={`is-contractor-${index}`}>Agency role?</label>
          <div className={`c-show-contractor ${!element.isContractor ? 'hide-field' : ''}`}>
            <input
              className="contractor"
              type="checkbox" id={`show-contractor-${index}`}
              name="showContractor"
              checked={element.showContractor}
              onChange={(e) => handleInputChange(e.target.name, e.target.checked, index)}
            />
            <label for={`show-contractor-${index}`}>Set Agency name as Company?</label>
          </div>
        </div>
        <div className={`c-contractor-field ${!element.isContractor ? 'hide-field' : ''}`}>
          <label for={`contractor-name-${index}`}>What's the name of the agency?</label>
          <input
            className="contractor-name"
            type="text"
            id={`contractor-name-${index}`}
            name="agencyName"
            placeholder="Agency Name"
            value={element.agencyName}
            onChange={(e) => handleInputChange(e.target.name, e.target.value, index)}
          ></input>
        </div>
        <div className="c-bullet">
          <BulletTextArea
            index={index}
            element={element}
            dispatch={handleInputChange}
            reducerState={reducerState}
            workBulletString={element.workBulletString} />
        </div>
      </div>
    </div>
  )
};

export default WorkListItem;
