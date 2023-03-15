import React from 'react'
import BulletItem from '../bulletItem/BulletItem';
import BulletTextArea from '../BulletTextArea/BulletTextArea';

const ProjectListItem = ({ key, handleInputChangeFunc }) => {

  return (
    <>
      {/* <div onTransitionEnd={transitionFunc} className={`segment phase-one ${classOutputFunc}`}> */}
      <label for="projectname">Project Name</label>
      <input type="text" id="projectname" name="projectname" placeholder="Project Name" />
      <label for="projectdesc">Project Description</label>
      <input type="text" id="projectdesc" name="projectdesc" placeholder="Project Description" />
      <div className="c-bullet">
        <BulletTextArea />
        {/* <button onClick={handleButtonClick}>Add</button> */}
      </div>
      {/* </div> */}
    </>
  );
};

export default ProjectListItem;
