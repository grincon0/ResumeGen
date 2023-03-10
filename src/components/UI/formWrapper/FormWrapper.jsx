import React from 'react';
import Form from '../form/Form';

const FormWrapper = ({ pageValue }) => {

  return (<div className="c-form-wrapper">
    <Form pageValue={pageValue} />
  </div>);
};

export default FormWrapper;
