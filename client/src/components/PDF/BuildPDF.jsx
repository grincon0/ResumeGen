import React from 'react';
import contentJSON from '../../JSON/content.json';
import ClassicLayout from '../layouts/classic/ClassicLayout';
import { Page, Text, Image, Document, StyleSheet } from "@react-pdf/renderer";


const PDFResume = ({resumeJSON = null}) => {

  const resumeData = resumeJSON ? resumeJSON : contentJSON;

  return (
    <Document>
      <Page size="A4">
        <ClassicLayout resumeData={resumeJSON} />
      </Page>
    </Document>
  )
};

export default PDFResume;
