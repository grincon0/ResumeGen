import React from 'react';
import './style.scss';

const FormListAddSubButton = ({ propFunc, text }) => {

  return (
    <div className="c-form-list-add">
      <i className="add-form-list" onClick={propFunc}>{`${text}`}</i>
    </div>
  );
};

export default FormListAddSubButton;
