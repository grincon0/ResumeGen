import React from 'react';
import SectionTitle from '../Classic/SectionTitle/SectionTitle';

const Section = (title = '', data) => {

  return (<div className="c-section">
    <SectionTitle titleString={title} />
  </div>);
}

export default Section;
