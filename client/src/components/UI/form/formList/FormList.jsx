import React, { useState, useEffect } from 'react';
import { EduListItem, ProjectListItem, WorkListItem } from './formListItem/index';
import SkillList from '../skillList/SkillList';
import SkillRow from '../skillList/_helper_components/SkillRow';
import FormListAddSubButton from './formListAddSub/FormListAddSub';
import formStages from '../../../../rules/formStages';
import dataTypes from '../../../../rules/dataTypes';

const FormList = ({ targetSection, functions = {}, reducerState, dispatch }) => {
  /* Testing work list item first */
  // const { handleInputChange } = functions;
  // const [formListItems, setFormListItems] = useState([]);

  console.log('TARGET SECTION', targetSection);

 const handleTargetListItem = (targetSection, element, index) => {
   console.log('iterated reducer state by index:', index, 'data', reducerState[index])
    switch (targetSection) {
      case 'WORK':
        return <WorkListItem dispatch={dispatch} reducerState={reducerState[index]} functions={functions} element={element} index={index} />;
      case 'PROJECTS':
        return <ProjectListItem dispatch={dispatch} reducerState={reducerState[index]} functions={functions} element={element} index={index}/>;
      case 'EDUCATION':
        return <EduListItem dispatch={dispatch} reducerState={reducerState[index]} functions={functions} element={element} index={index}/>;
      case 'SKILLS':
        return <SkillRow dispatch={dispatch} reducerState={reducerState[index]} functions={functions} element={element} index={index}/>;
      default:
        break;
    }
  };

/*   const handleAddListClick = () => {
    console.log('adding new list');
    const newList = [...formListItems];
    newList.push(handleTargetListItem(targetSection));
    console.log('current list', newList);
    setFormListItems(newList);
  }; */

 /*  useEffect(() => {
    if (formListItems.length <= 0) {
      const initEl = handleTargetListItem(targetSection);
      console.log('init element', initEl);
      setFormListItems([initEl]);
    }
  }, [targetSection]); */

/*   console.log('target section', targetSection);
  console.log('formListItemState', formListItems); */

  console.log('form list component - print reducer state for work entries', reducerState);

  return (
    <>
      <div className={`${targetSection === 'SKILLS' ? 'c-skill-list' :'c-form-list'}`}>
        {reducerState.map((el, i) => {
          console.log('reducer state map element', el);
          console.log('reducer state map index', i);
          return handleTargetListItem(targetSection, el, i);
        })}
      </div>
      <div className="c-form-list-add-sub">
        {reducerState.length > 0 && <FormListAddSubButton text={'-'} propFunc={() => dispatch({ type: 'DELETE_ENTRY' })} /> }
        <FormListAddSubButton text={'+'} propFunc={() => dispatch({ type: 'ADD_ENTRY' })} />
      </div>
    </>
  );
};

export default FormList;
