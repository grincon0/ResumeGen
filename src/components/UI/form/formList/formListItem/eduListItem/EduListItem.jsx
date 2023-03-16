import React from 'react';
import BulletTextArea from '../BulletTextArea/BulletTextArea';

const EduListItem = ({ element, index, reducerState, dispatch }) => {
  const handleInputChange = (name, value, elIndex) => {
    dispatch({
      type: 'UPDATE_ENTRY',
      payload: { index: elIndex, name, value }
    });
  };

  return (
    <>
      <label for={`eduname-${index}`}>Edu. Institution Name</label>
      <input type="text" id={`eduname-${index}`} name="eduName" placeholder="Name of Educational Institution" />
      <label for={`edudatetext-${index}`}>Enrollment Date Range</label>
      <input type="text" id={`edudatetext-${index}`} name="eduDateText" placeholder="Type date range as you like it to appear. i.e. Aug 2011 - May 2015" />
      <label for={`edulocale-${index}`}>Locale</label>
      <input type="text" id={`edulocale-${index}`} name="eduLocale" placeholder="City and State" />
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

export default EduListItem;
