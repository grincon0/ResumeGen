import React from 'react';

const BulletTextArea = ({ text, index }) => {

  return (
    <div className="c-bullet-textarea">
      <label for={`bullet-items-${index}`}>Bullet Points</label>
      <textarea id={`bullet-items-${index}`} name={`bullet-items-${index}`} rows="6" cols="50" placeholder="Type in bullets points here - each seperated by a comma."></textarea>
    </div>
  );
};

export default BulletTextArea;
