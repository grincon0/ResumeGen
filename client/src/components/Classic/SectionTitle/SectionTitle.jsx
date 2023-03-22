import React from 'react';
import PropTypes from 'prop-types';
import './SectionTitle.scss';

const SectionTitle = ({ titleString, data }) => {
  const { meta } = data;
  const { hasTopBottomBorder } = meta;

  return (
    <div className={`c-section-title ${hasTopBottomBorder ? 'top-bottom-border' : ''}`}>
      <div className="title">{`${titleString}`}</div>
    </div>
  );
};

SectionTitle.propTypes = {
  titleString: PropTypes.string
}

export default SectionTitle;
