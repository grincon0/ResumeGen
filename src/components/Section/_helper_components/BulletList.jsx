import React from 'react';
import rules from '../../../rules/dataTypes';


const BulletList = ({ bulletArr, dataType }) => {
  console.log('bulletArr', bulletArr);
  if (!bulletArr) return null;
  const output = bulletArr.map((bulletData, i) => {
    console.log('bullet data', bulletData);
    return (
      <div className="bullet-list-item">
        <p>{bulletData}</p>
      </div>
    );

  });

  return (
    <ul className="c-bullet-list">
      {output}
    </ul>
  );
};

export default BulletList;
