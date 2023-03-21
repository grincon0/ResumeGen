import React, { useState, useEffect } from 'react';
import { EduListItem, ProjectListItem, WorkListItem } from './formListItem/index';
import SkillList from '../skillList/SkillList';
import SkillRow from '../skillList/_helper_components/SkillRow';
import FormListAddSubButton from './formListAddSub/FormListAddSub';
import formStages from '../../../../rules/formStages';
import dataTypes from '../../../../rules/dataTypes';

const FormList = ({ targetSection, reducerState, dispatch }) => {
  const [listIsAnimating, setListIsAnimation] = useState(false);
  const [targetIndexToDelete, setTargetIndexToDelete] = useState(0);
  const numberOfListItems = reducerState?.length;

  console.log('targetIndexToDelete', targetIndexToDelete);

  const handleButtonClick = (btnType) => {
    if (btnType === 'SUB') {
      return dispatch({ type: 'DELETE_ENTRY' });;
    }

    return dispatch({ type: 'ADD_ENTRY' });
  }

  const handleTransitionEnd = () => {
    console.log('targetIndexToDelete', targetIndexToDelete);
    // debugger;
    if (listIsAnimating) setListIsAnimation(false);
  }

  const transitionObj = {
    handleTransitionEnd,
    numberOfListItems,
  }

  const handleTargetListItem = (targetSection, element, index) => {
    console.log('iterated reducer state by index:', index, 'data', reducerState[index])
    switch (targetSection) {
      case 'WORK':
        return <WorkListItem
          dispatch={dispatch}
          reducerState={reducerState[index]}
          functions={transitionObj}
          element={element}
          index={index}
        />;
      case 'PROJECTS':
        return <ProjectListItem
          dispatch={dispatch}
          reducerState={reducerState[index]}
          functions={transitionObj}
          element={element}
          index={index}
        />;
      case 'EDUCATION':
        return <EduListItem
          dispatch={dispatch}
          reducerState={reducerState[index]}
          functions={transitionObj}
          element={element}
          index={index}
        />;
      case 'SKILLS':
        return <SkillRow
          dispatch={dispatch}
          reducerState={reducerState[index]}
          functions={transitionObj}
          element={element}
          index={index}
        />;
      default:
        break;
    }
  };

  console.log('form list component - print reducer state for work entries', reducerState);

  return (
    <>
      <div className={`${targetSection === 'SKILLS' ? 'c-skill-list' : 'c-form-list'}`}>
        {reducerState.map((el, i) => {
          console.log('reducer state map element', el);
          console.log('reducer state map index', i);
          return handleTargetListItem(targetSection, el, i);
        })}
      </div>
      <div className="c-form-list-add-sub">
        {reducerState.length > 0 && <FormListAddSubButton text={'-'} propFunc={() => handleButtonClick('SUB')} />}
        <FormListAddSubButton text={'+'} propFunc={() => handleButtonClick('ADD')} />
      </div>
    </>
  );
};

export default FormList;
