import React from 'react';

const SkillListRow = ({ data }) => {
  console.log('skill list row data', data);

  return (
    <div className="skill-row">
      {
        data.map((skill, i) => {
          console.log('skill', skill);
          return <p key={i}>{skill}</p>;
        })
      }
    </div>
  )


};

export default SkillListRow;
