import React from 'react';
import generateSectionItemOutput from '../_helper_functions/generateSectionItemOutput';
import { View } from '@react-pdf/renderer';
import WebLinks from '../../Section/_helper_components/WebLinks';
import dataTypes from '../../../rules/dataTypes';

const SectionItemOutput = ({ sectionItemData = {}, settings = {} }) => {
  const { dataType } = settings;
  const linkData = sectionItemData?.links || null;
  const sectionContentList = generateSectionItemOutput(sectionItemData, dataType);

  return (
    <View>
      {linkData && dataType === dataTypes.PROJECTS ? <WebLinks linkData={linkData} /> : null}
      {sectionContentList}
    </View>
  );
};

export default SectionItemOutput;
