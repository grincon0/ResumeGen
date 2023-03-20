import React from 'react';
import Form from '../form/Form';

const FormWrapper = ({ pageValue, isDarkMode }) => {

  return (<div className="c-form-wrapper">
    <Form pageValue={pageValue} isDarkMode={isDarkMode} />
  </div>);
};

export default FormWrapper;
