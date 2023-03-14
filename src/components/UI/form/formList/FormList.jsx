import React, { useState, useEffect } from 'react';
import { EduListItem, ProjectListItem, WorkListItem } from './formListItem/index';
import SkillList from '../skillList/SkillList';
import FormListAdd from './formListAdd/FormListAdd';
import formStages from '../../../../rules/formStages';
import dataTypes from '../../../../rules/dataTypes';

const FormList = ({ targetSection }) => {
  /* Testing work list item first */
  const [formListItems, setFormListItems] = useState([]);

  console.log('TARGET SECTION', targetSection);

  const handleTargetListItem = (targetSection) => {
    switch (targetSection) {
      case 'WORK':
        return <WorkListItem />;
      case 'PROJECTS':
        return <ProjectListItem />;
      case 'EDUCATION':
        return <EduListItem />;
      case 'SKILLS':
        return <SkillList />;
      default:
        break;
    }
  };

  const handleAddListClick = () => {
    console.log('adding new list');
    const newList = [...formListItems];
    newList.push(handleTargetListItem(targetSection));
    console.log('current list', newList);
    setFormListItems(newList);
  };

  useEffect(() => {
    if (formListItems.length <= 0) {
      const initEl = handleTargetListItem(targetSection);
      console.log('init element', initEl);
      setFormListItems([initEl]);
    }
  }, [targetSection]);

  console.log('target section', targetSection);
  console.log('formListItemState', formListItems);

  return (
    <>
      <div className="c-form-list">
        {formListItems}
      </div>
      <div className="c-form-list-add">
        <FormListAdd propFunc={handleAddListClick} />
      </div>
    </>
  );
};

export default FormList;
