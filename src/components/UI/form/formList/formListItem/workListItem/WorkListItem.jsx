import React, { useState } from 'react';
import BulletTextArea from '../BulletTextArea/BulletTextArea';

const WorkListItem = ({ element, index, functions, reducerState, dispatch }) => {
  const [isContractor, setIsContractor] = useState(false);
  const { handleWorkFunc } = functions;

  console.log('element for work list instance', element)
  console.log('reducer state', reducerState);
  console.log('reducer function', handleWorkFunc);
  console.log('dispatcher in worklistitem', dispatch);

  const handleInputChange = (name, value, elIndex) => {
    dispatch({
      type: 'UPDATE_ENTRY',
      payload: { index: elIndex, name, value }
    });
  };

  return (
    <>
      <label for={`workname-${index}`}>Company Name</label>
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
          type="checkbox" id="is-contractor"
          name="is-contractor"
          checked={isContractor}
          onChange={setIsContractor}
        />
        <label for="is-contractor">Is this contractor role?</label>
      </div>
      <div className="c-bullet">
        <BulletTextArea
          index={index}
          element={element}
          dispatch={handleInputChange}
          reducerState={reducerState}
          workBulletString={element.workBulletString} />
      </div>
    </>
  )
};

export default WorkListItem;
