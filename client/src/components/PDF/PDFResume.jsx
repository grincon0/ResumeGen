import React from 'react';
import ClassicLayout from '../layouts/classic/ClassicLayout';
import { Page, Document } from "@react-pdf/renderer";

const PDFResume = ({resumeJSON = null}) => {

  return (
    <Document>
      <Page size="A4">
        <ClassicLayout resumeData={resumeJSON} />
      </Page>
    </Document>
  )
};

export default PDFResume;
