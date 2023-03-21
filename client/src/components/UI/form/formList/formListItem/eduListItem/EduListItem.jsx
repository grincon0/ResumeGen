import React from 'react';
import BulletTextArea from '../BulletTextArea/BulletTextArea';
import getNumberSuffix from '../../../_helper_functions/getNumberSuffix';

const EduListItem = ({ element, index, reducerState, functions, transitionOut, dispatch }) => {
  const { handleTransitionEnd } = functions;
  const numPlacement = index + 1;
  const handleInputChange = (name, value, elIndex) => {
    console.log('dispatching', name, value, elIndex);
    dispatch({
      type: 'UPDATE_ENTRY',
      payload: { index: elIndex, name, value }
    });
  };

  return (
    <div className={`c-edu-items ${transitionOut ? 'transition-out' : ''}`}>
      <label for={`eduname-${index}`}>{`${numPlacement.toString()}${getNumberSuffix(numPlacement)} Edu. Institution Name`}</label>
      <input type="text" id={`eduname-${index}`} name="eduName" placeholder="Name of Educational Institution" onChange={(e) => handleInputChange(e.target.name, e.target.value, index)} />
      <label for={`edutype-${index}`}>Edu. Crednetial</label>
      <input type="text" id={`edutype-${index}`} name="eduType" placeholder="Name of Educational Crendential (i.e. BS in X, etc.)" onChange={(e) => handleInputChange(e.target.name, e.target.value, index)} />
      <label for={`edudatetext-${index}`}>Enrollment Date Range</label>
      <input type="text" id={`edudatetext-${index}`} name="eduDateText" placeholder="Type date range as you like it to appear. i.e. Aug 2011 - May 2015" onChange={(e) => handleInputChange(e.target.name, e.target.value, index)} />
      <label for={`edulocale-${index}`}>Locale</label>
      <input type="text" id={`edulocale-${index}`} name="eduLocale" placeholder="City and State" onChange={(e) => handleInputChange(e.target.name, e.target.value, index)} />
      <div className="c-bullet">
        <BulletTextArea
          index={index}
          element={element}
          dispatch={handleInputChange}
          reducerState={reducerState}
          workBulletString={element.workBulletString} />
      </div>
    </div>
  );
};

export default EduListItem;
