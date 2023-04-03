import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import Header from '../../Header/Header';
import Section from '../../Section/Section';
import dataTypes from '../../../rules/dataTypes';
import './ClassicLayout.scss';

const ClassicLayout = ({ resumeData }) => {

  const styles = StyleSheet.create({
    cWrapper : {
      margin: '0 auto',
      textAlign: 'center',
      paddingLeft: '30px',
      paddingRight: '30px',
      maxWidth: '95%'
    }
  })

  return (
    <View style={styles.cWrapper} className="c-wrapper classic">
        <Header contactData={resumeData?.contact} />
        <Section title={'Employment'} data={resumeData?.companies} dataType={dataTypes.WORK} />
        <Section title={'Projects'} data={resumeData?.projects} dataType={dataTypes.PROJECTS} />
        <Section title={'Education'} data={resumeData?.education} dataType={dataTypes.EDUCATION} />
        <Section title={'Technology and Skills'} data={resumeData?.skills} dataType={dataTypes.SKILLS} />
    </View>
  );
/*   return (
    <div className="c-wrapper classic">
      <header>
        <Header contactData={resumeData?.contact} />
      </header>
      <main>
        <Section title={'Employment'} data={resumeData?.companies} dataType={rules.WORK} />
        <Section title={'Projects'} data={resumeData?.projects} dataType={rules.PROJECTS} />
        <Section title={'Education'} data={resumeData?.education} dataType={rules.EDUCATION} /> 
        <Section title={'Technology and Skills'} data={resumeData?.skills} dataType={rules.SKILLS} />
      </main>
    </div>
  ); */
};

export default ClassicLayout;
