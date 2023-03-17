import React from 'react';

const SkillListRow = ({ data }) => {
  console.log('skill list row data', data);

  return (
    <ul className="skill-row">
      {
        data.map((skill, i) => {
          console.log('skill', skill);
          const isLastItem = i === data.length - 1;
          return <li key={i}>{`${skill}${isLastItem ? '' : ', '}`}</li>;
        })
      }
    </ul>
  )


};

export default SkillListRow;
