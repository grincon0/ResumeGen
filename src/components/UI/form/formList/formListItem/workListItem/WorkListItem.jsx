import React, { useState } from 'react';
import BulletItem from '../bulletItem/BulletItem';
import BulletTextArea from '../BulletTextArea/BulletTextArea';

const WorkListItem = ({ key, transitionFunc, classOutputFunc, handleInputChangeFunc }) => {
  const [workName, setWorkName] = useState('');
  const [roleTitle, setRoleTitle] = useState('');
  const [dateString, setDateString] = useState('');
  const [isContractor, setIsContractor] = useState(false);
  const [workBulletString, setWorkBulletString] = useState('');

  return (
    <>
      {/* <div onTransitionEnd={transitionFunc} className={`segment phase-one ${classOutputFunc}`}> */}
      <label for="workname">Company Name</label>
      <input
        type="text"
        id="workname"
        name="workname"
        placeholder="Company Name"
        value={workName}
        onChange={(e) => setWorkName(e.target.value)}
      />
      <label for="rolename">Title</label>
      <input
        type="text"
        id="rolename"
        name="rolename"
        placeholder="Role Title"
        value={roleTitle}
        onChange={(e) => setRoleTitle(e.target.value)}
      />
      <label for="datetext">Date</label>
      <input
        type="text"
        id="datetext"
        name="datetext"
        placeholder="Type date range as you like it to appear"
        value={dateString}
        onChange={(e) => setDateString(e.target.value)}
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
        <BulletTextArea workBulletString={workBulletString} setWorkBulletString={setWorkBulletString} />
        {/* <button onClick={handleButtonClick}>Add</button> */}
      </div>
      {/* </div> */}
    </>
  );
};

export default WorkListItem;
