import React from 'react';
import PropTypes from 'prop-types';

const SectionTitle = ({titleString}) => {

  console.log(' sssection title string', titleString);

  return (
    <div className="c-section-title">
      <div>{`${titleString}`}</div>
    </div>
  );
};

SectionTitle.propTypes = {
  titleString: PropTypes.string
}

export default SectionTitle;
