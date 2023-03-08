import React from 'react';

const FormListItem = ({ key }) => {

  return (
    <div className="c-form-list-item">
      <label>
        <input type="text" id="workname" name="workname" placeholder="Company Name" />
      </label>
      <label>
        <input type="text" id="rolename" name="rolename" placeholder="Role Title" />
      </label>
      <label>
        <input type="text" id="datetext" name="datetext" placeholder="Type date range as you like it to appear" />
      </label>
      <input type="checkbox" id="is-contractor" name="is-contractor" value="is-contractor" />
      <label for="is-contractor">Is this contractor role?</label>
    </div>
  );
};

export default FormListItem;
