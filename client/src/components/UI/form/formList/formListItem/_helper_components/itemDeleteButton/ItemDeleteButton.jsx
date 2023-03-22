import React from 'react';
import './styles.scss';

const ItemDeleteButton = ({propFunc}) => {

  return (
    <button className="delete-button" onClick={propFunc}>-</button>
  );
};

export default ItemDeleteButton;
 