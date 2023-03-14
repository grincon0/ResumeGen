import React from 'react';
import BulletTextArea from '../BulletTextArea/BulletTextArea';

const EduListItem = ({ }) => {
  return (
    <>
      {/* <div onTransitionEnd={transitionFunc} className={`segment phase-one ${classOutputFunc}`}> */}
      <label for="eduname">Edu. Institution Name</label>
      <input type="text" id="eduname" name="eduname" placeholder="Name of Educational Institution" />
      <label for="edudatetext">Enrollment Date Range</label>
      <input type="text" id="edudatetext" name="edudatetext" placeholder="Type date range as you like it to appear. i.e. Aug 2011 - May 2015" />
      <label for="edulocale">Locale</label>
      <input type="text" id="edulocale" name="edulocale" placeholder="City and State" />
      <div className="c-bullet">
        <BulletTextArea />
        {/* <button onClick={handleButtonClick}>Add</button> */}
      </div>
      {/* </div> */}
    </>
  );
};

export default EduListItem;
