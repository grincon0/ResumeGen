import React, { useState, useEffect } from 'react';
import FormListItem from './formListItem/FormListItem';
import { WorkListItem } from './formListItem/workListItem/WorkListItem';
import FormListAdd from './FormListAdd/FormListAdd';

const FormList = ({ transitionFunc, classOutputFunc }) => {
  /* Testing work list item first */
  const [formListItems, setFormListItems] = useState([<WorkListItem />]);


/*   const handleAddListClick = () => {
    console.log('adding new list');
    const newList = [...formListItems];
    newList.push(<WorkListItem />);
    console.log('current list', currentList);
    setFormListItems(newList);
  }; */

/*   useEffect(() => {

  }, [formListItems]); */
  console.log('formListItemState', formListItems);

  return (
    <div>
      <div className="c-form-list">
        {formListItems}
      </div>
{/*       <div className="c-form-list-add">
        <FormListAdd propFunc={handleAddListClick} />
      </div> */}
    </div>
  );
};

export default Formlist;
