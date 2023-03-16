import React from 'react'
import BulletTextArea from '../BulletTextArea/BulletTextArea';

const ProjectListItem = ({ dispatch, reducerState, element, index }) => {

  const handleInputChange = (name, value, elIndex) => {
    dispatch({
      type: 'UPDATE_ENTRY',
      payload: { index: elIndex, name, value }
    });
  };

  return (
    <>
      <label for={`projectname-${index}`}>Project Name</label>
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
    </>
  );
};

export default ProjectListItem;
