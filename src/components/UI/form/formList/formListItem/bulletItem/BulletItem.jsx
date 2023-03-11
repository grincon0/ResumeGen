import React from 'react';

const BulletItem = ({itemText = ''}) => {
  return (
    <option value="bullet1">{`${itemText}`}</option>
  );
};

export default BulletItem;