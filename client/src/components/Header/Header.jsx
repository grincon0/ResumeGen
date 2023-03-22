import React from 'react';
import PropTypes from 'prop-types';
import './Header.scss';

const Header = ({ contactData }) => {

  if (!contactData?.content) {
    return null;
  }

  return (
    <section className="c-header">
      <div class="address">
        <p>{contactData.content.address}</p>
      </div>
      <div className="name">
        <h1>{contactData.content.name}</h1>
      </div>
      <div className="contact">
        <p>{contactData.content.phone}</p>
        <p>{contactData.content.email}</p>
      </div>
    </section>
  );
};

export default Header;

Header.propTypes = {
  contactData: PropTypes.object,
};
