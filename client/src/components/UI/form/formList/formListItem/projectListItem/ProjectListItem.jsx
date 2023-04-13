import React from 'react'
import BulletTextArea from '../BulletTextArea/BulletTextArea';
import getNumberSuffix from '../../../_helper_functions/getNumberSuffix';
import ItemDeleteButton from '../_helper_components/itemDeleteButton/ItemDeleteButton';

const ProjectListItem = ({ dispatch, reducerState, element, index, transitionOut }) => {
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
    <div className={`c-project-items list-items ${transitionOut ? '' : ''}`}>
      <ItemDeleteButton propFunc={() => handleDeleteButtonClick(index)} />
      <div className="content-wrapper">
        <label for={`projectname-${index}`}>{`${numPlacement.toString()}${getNumberSuffix(numPlacement)} Project Name`}</label>
        <input
          type="text"
          id={`projectname-${index}`}
          name="projectName"
          placeholder="Project Name"
          value={element.projectName}
          onChange={(e) => handleInputChange(e.target.name, e.target.value, index)}
        />
        <label for={`projectdesc-${index}`}>Project Description</label>
        <input
          type="text"
          id={`projectdesc-${index}`}
          name="projectDescription"
          placeholder="Project Description"
          value={element.projectDescription}
          onChange={(e) => handleInputChange(e.target.name, e.target.value, index)}
        />
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
  );
};

export default ProjectListItem;
