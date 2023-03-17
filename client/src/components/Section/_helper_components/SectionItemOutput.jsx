import React from 'react';
import generateSectionItemOutput from '../_helper_functions/generateSectionItemOutput';

const SectionItemOutput = ({ sectionItemData = [] , settings = {}}) => {

  const {bulletType, dataType} = settings;

  console.log('section item block data type', dataType);

  console.log('SectionItemOutput Data', sectionItemData);

  const sectionContentList = generateSectionItemOutput(sectionItemData, dataType);

  console.log('section skill list', sectionContentList);

  return <>{sectionContentList}</>;
};

export default SectionItemOutput;
