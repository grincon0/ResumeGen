import React from 'react';

const SkillRow = ({ index, skillSetLabel, skillString }) => {

  return (<div>
    <label for={`skillRowTitle-${index}`}>Skill Set Category</label>
    <input type="text" id={`skillRowTitle-${index}`} name={`skillRowTitle-${index}`} placeholder="Category of Skill Set. (i.e. Frontend, Cloud, etc.)" />
    <label for={`skill-items-${index}`}>Skills</label>
    <textarea id={`skill-items-${index}`} name={`skill-items-${index}`} rows="6" cols="50" placeholder="Type in skills here - each seperated by a comma."></textarea>
  </div>)
}

export default SkillRow;
