import React from 'react';
import PropTypes from 'prop-types';
import './Header.scss';

const Header = ({contactData}) => {
  console.log('contact data', contactData);

  if (!contactData?.content) {
    console.log('no contact data found');
    return null;
  }

  return (
    <section className="c-header">
      <p>{contactData.content.email}</p>
      <p>{contactData.content.name}</p>
      <div>
        <p>{contactData.content.phone}</p>
        <p>{contactData.content.address}</p>
      </div>
    </section>
  );
};

export default Header;

Header.propTypes = {
  contactData: PropTypes.object,
};
