import React from 'react';
import { View, StyleSheet } from '@react-pdf/renderer';
import Header from '../../Header/Header';
import Section from '../../Section/Section';
import dataTypes from '../../../rules/dataTypes';

const ClassicLayout = ({ resumeData }) => {

  const styles = StyleSheet.create({
    cWrapper: {
      margin: '0 auto',
      textAlign: 'center',
      paddingLeft: '30px',
      paddingRight: '30px',
      maxWidth: '95%'
    }
  })

  return (
    <View style={styles.cWrapper}>
      <Header contactData={resumeData?.contact} />
      <Section title={'Technology and Skills'} data={resumeData?.skills} dataType={dataTypes.SKILLS} />
      <Section title={'Experience'} data={resumeData?.companies} dataType={dataTypes.WORK} />
      <Section title={'Projects'} data={resumeData?.projects} dataType={dataTypes.PROJECTS} />
      <Section title={'Education'} data={resumeData?.education} dataType={dataTypes.EDUCATION} />
    </View>
  );
};

export default ClassicLayout;
