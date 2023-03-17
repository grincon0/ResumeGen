import React from 'react';

const BulletList = ({ bulletArr }) => {
  if (!bulletArr) return null;
  const output = bulletArr.map((bulletData) => {
    return (
      <li className="bullet-list-item">{bulletData}</li>
    );
  });

  return (
    <ul className="c-bullet-list">
      {output}
    </ul>
  );
};

export default BulletList;
