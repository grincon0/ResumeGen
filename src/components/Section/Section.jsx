import React from 'react';
import SectionTitle from '../Classic/SectionTitle/SectionTitle';
import SectionItemOutput from './_helper_components/SectionItemOutput';

const Section = ({title = '', data}) => {

  console.log('section title', title);
  console.log('section data', data);

  return (
    <div className="c-section">
      <SectionTitle titleString={title} />
      <SectionItemOutput sectionItemData={data} />
    </div>);
}

export default Section;
