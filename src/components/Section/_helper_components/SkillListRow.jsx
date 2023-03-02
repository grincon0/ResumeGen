import React from 'react';

const SkillListRow = ({ data }) => {
  console.log('skill list row data', data);

  return (
    <ul className="skill-row">
      {
        data.map((skill, i) => {
          console.log('skill', skill);
          return <li key={i}>{skill}</li>;
        })
      }
    </ul>
  )


};

export default SkillListRow;
