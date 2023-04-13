import React, { useState } from 'react';
import { EduListItem, ProjectListItem, WorkListItem } from './formListItem/index';
import SkillRow from '../skillList/_helper_components/SkillRow';
import FormListAddSubButton from './formListAddSub/FormListAddSub';

const FormList = ({ targetSection, reducerState, dispatch, isLightMode }) => {
  const [listIsAnimating, setListIsAnimation] = useState(false);
  const numberOfListItems = reducerState?.length;

  const handleButtonClick = () => {
    return dispatch({ type: 'ADD_ENTRY' });
  }

  const handleTransitionEnd = () => {
    listIsAnimating && setListIsAnimation(false);
  }

  const transitionObj = {
    handleTransitionEnd,
    numberOfListItems,
  }

  const handleTargetListItem = (targetSection, element, index) => {
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
        //debugger;
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

  return (
    <>
      <div className={`${targetSection === 'SKILLS' ? 'c-skill-list' : 'c-form-list'}`}>
        {reducerState.map((el, i) => {
          return handleTargetListItem(targetSection, el, i);
        })}
      </div>
      <div className={`c-form-list-add-sub ${isLightMode ? 'light-mode' : ''}`}>
        <FormListAddSubButton text={'+'} propFunc={() => handleButtonClick('ADD')} />
      </div>
    </>
  );
};

export default FormList;
