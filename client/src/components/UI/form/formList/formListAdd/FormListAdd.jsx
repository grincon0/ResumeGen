import React from 'react';
import './style.scss';

const FormListAdd = ({propFunc}) => {

  return (
    <div className="c-form-list-add">
      <i className="add-form-list" onClick={propFunc}>+</i>
    </div>
  )
};

export default FormListAdd;
