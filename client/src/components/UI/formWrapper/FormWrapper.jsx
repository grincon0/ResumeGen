import React from 'react';
import Form from '../form/Form';

const FormWrapper = ({ viewValue, isLightMode }) => {

  return (<div className="c-form-wrapper">
    <Form pageValue={viewValue} isLightMode={isLightMode} />
  </div>);
};

export default FormWrapper;
