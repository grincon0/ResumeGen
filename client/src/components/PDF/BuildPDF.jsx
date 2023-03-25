import React from 'react';
import contentJSON from '../../JSON/content.json';
import ClassicLayout from '../layouts/classic/ClassicLayout';
import { Page, Text, Image, Document, StyleSheet } from "@react-pdf/renderer";


const styles = StyleSheet.create({
  wrapper: {
    margin: '0 auto',
    textAlign: 'center',
    maxWidth: '1000px',
    padding: '60px',
  },
  headerEl: {
    marginBottom: '15px'
  },
  cHeader: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  divAddress: {
    width: '195px',
    textAlign: 'left',
    fontSize: '0.975rem',
    lineHeight: 1.2
  },
  divName: {
    fontSize: '1.525rem',
    fontWeight: 'bold'

  },
  divContact: {
    fontSize: '0.975rem',
    lineHeight: 1.2,
    textAlign: 'right'
  }
});

const PDFResume = ({resumeJSON = null}) => {

  const resumeData = resumeJSON ? resumeJSON : contentJSON;

  return (
    <Document>
      <Page>
        <ClassicLayout resumeData={resumeJSON} />
      </Page>
    </Document>
  )
};

export default PDFResume;
