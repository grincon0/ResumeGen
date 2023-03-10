import React, { useState } from 'react';
import BulletItem from './bulletItem/BulletItem';

const WorkListItem = ({ key }) => {
  const [bulletList, setBulletList] = useState([]);


  const handleButtonClick = () => {
    let newBulletList = [...bulletList];
    newBulletList.push(<BulletItem />);
    setBulletList(newBulletList);
  };

  return (
    <>
      <div onTransitionEnd={handleTransitionEnd} className={`segment phase-one ${handleClassOutput(1)}`}>
        <label for="workname">Company Name</label>
        <input type="text" id="workname" name="workname" placeholder="Company Name" />

        <label for="rolename">Title</label>
        <input type="text" id="rolename" name="rolename" placeholder="Role Title" />
        <label for="datetext">Date</label>
        <input type="text" id="datetext" name="datetext" placeholder="Type date range as you like it to appear" />
        <input type="checkbox" id="is-contractor" name="is-contractor" value="is-contractor" />
        <label for="is-contractor">Is this contractor role?</label>
        <div className="c-bullet">
          <select name="work[]" multiple>
            {bulletList}
          </select>
          <button onClick={handleButtonClick}>Add</button>
        </div>
      </div>
    </>
  );
};

export default WorkListItem;
