import React from 'react';
import generateSectionItemOutput from '../_helper_functions/generateSectionItemOutput';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const SectionItemOutput = ({ sectionItemData = [] , settings = {}}) => {

  const {bulletType, dataType} = settings;

  const sectionContentList = generateSectionItemOutput(sectionItemData, dataType);

  return <View>{sectionContentList}</View>;
};

export default SectionItemOutput;
