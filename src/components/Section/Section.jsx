import React from 'react';
import SectionTitle from '../Classic/SectionTitle/SectionTitle';
import SectionItemOutput from './_helper_components/SectionItemOutput';
import './style.scss';

const Section = ({ title = '', data, dataType = '' }) => {

  console.log('section title', title);
  console.log('section data', data);
  const settings = {dataType};


  return (
    <div className="c-section">
      {title && <SectionTitle titleString={title} data={data} />}
      <SectionItemOutput sectionItemData={data} settings={settings} />
    </div>);
}

export default Section;
