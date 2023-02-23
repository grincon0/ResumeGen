import React from 'react';
import PropTypes from 'prop-types';

const SectionTitle = (titleString) => {

  return (
    <div className="c-section-title">
      <div>{titleString}</div>
    </div>
  );

};

export default SectionTitle;

SectionTitle.propTypes = {
  titleString: PropTypes.string
}
