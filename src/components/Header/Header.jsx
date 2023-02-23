import React from 'react';
import PropTypes from 'prop-types';
import './Header.scss';

const Header = ({contactData}) => {

  if (!contactData) {
    console.log('no contact data found');
    return null;
  }

  return (
    <section className="c-header">
      <p>{contactData.email}</p>
      <p>{contactData.name}</p>
      <div>
        <p>{contactData.phone}</p>
        <p>{contactData.address}</p>
      </div>
    </section>
  );
};

export default Header;

Header.propTypes = {
  contactData: PropTypes.object,
};
