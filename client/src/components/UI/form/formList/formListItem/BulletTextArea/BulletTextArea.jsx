import React from 'react';

const BulletTextArea = ({ workBulletString, index, dispatch }) => (
  <div className="c-bullet-textarea">
    <label for={`workBulletString-${index}`}>Bullet Points</label>
    <textarea
      id={`workBulletString-${index}`}
      name="workBulletString"
      rows="6"
      cols="50"
      placeholder="Type in bullets points here - each seperated by a period."
      value={workBulletString}
      onChange={(e) => dispatch(e.target.name, e.target.value, index)}
    ></textarea>
  </div>
);


export default BulletTextArea;
