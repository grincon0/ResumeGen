import React from 'react';
import './styles.scss';

const ItemDeleteButton = ({ propFunc }) => (
  <button className="delete-button" onClick={propFunc}>-</button>
);

export default ItemDeleteButton;
 