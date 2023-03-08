import React, { useState, useEffect } from 'react';
import FormListItem from './formListItem/FormListItem';
import FormListAdd from './FormListAdd/FormListAdd';

const FormList = () => {
  const [formListItems, setFormListItems] = useState([<FormListItem />]);


  useEffect(() => {

  }, [formListItems]);

  return (
    <div>
      <div className="c-form-list">
        {

        }
      </div>
      <div className="c-form-list-add">
        <FormListAdd />
      </div>
    </div>
  );
};

export default Formlist;
