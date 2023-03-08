import React from 'react';
import './style.scss';

const FormListAdd = ({propFunc}) => {

  return (
    <div className="c-form-list-add">
      <button onClick={propFunc}>+</button>
    </div>
  )
};

export default FormListAdd;
