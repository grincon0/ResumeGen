import React from 'react';
import Form from '../form/Form';

const FormWrapper = ({ pageValue, isLightMode }) => {

  return (<div className="c-form-wrapper">
    <Form pageValue={pageValue} isLightMode={isLightMode} />
  </div>);
};

export default FormWrapper;
