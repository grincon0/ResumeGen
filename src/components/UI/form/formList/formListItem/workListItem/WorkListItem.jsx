import React, { useState } from 'react';
import BulletItem from '../bulletItem/BulletItem';
import BulletTextArea from '../BulletTextArea/BulletTextArea';

const WorkListItem = ({ key, transitionFunc, classOutputFunc }) => {
  const [bulletList, setBulletList] = useState([]);
  /*   console.log('transitionFunc', transitionFunc);
    console.log('classOutputFunc', classOutputFunc);
   */

  const handleButtonClick = () => {
    let newBulletList = [...bulletList];
    newBulletList.push(<BulletItem />);
    setBulletList(newBulletList);
  };

  return (
    <>
      {/* <div onTransitionEnd={transitionFunc} className={`segment phase-one ${classOutputFunc}`}> */}
      <label for="workname">Company Name</label>
      <input type="text" id="workname" name="workname" placeholder="Company Name" />
      <label for="rolename">Title</label>
      <input type="text" id="rolename" name="rolename" placeholder="Role Title" />
      <label for="datetext">Date</label>
      <input type="text" id="datetext" name="datetext" placeholder="Type date range as you like it to appear" />
      <div className="c-contractor">
        <input className="contractor" type="checkbox" id="is-contractor" name="is-contractor" value="is-contractor" />
        <label for="is-contractor">Is this contractor role?</label>
      </div>
      <div className="c-bullet">
        <BulletTextArea />
        {/* <button onClick={handleButtonClick}>Add</button> */}
      </div>
      {/* </div> */}
    </>
  );
};

export default WorkListItem;
