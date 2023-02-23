import React from 'react';
import generateSectionItemOutput from '../_helper_functions/generateSectionItemOutput';

const SectionItemOutput = ({ sectionItemData = [] , sectionItemTitle = '', bulletStyleType = ''}) => {

  console.log('SectionItemOutput Data', sectionItemData);

  const sectionContentList = generateSectionItemOutput(sectionItemData);

  return (
    <div>
      <div>

      </div>
    </div>);

};

export default SectionItemOutput;
