import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import Header from '../../Header/Header';
import Section from '../../Section/Section';
import rules from '../../../rules/dataTypes';
import './ClassicLayout.scss';

const ClassicLayout = ({ resumeData }) => {

  return (
    <View className="c-wrapper classic">
        <Header contactData={resumeData?.contact} />
      <View>
        <Section title={'Employment'} data={resumeData?.companies} dataType={rules.WORK} />
        <Section title={'Projects'} data={resumeData?.projects} dataType={rules.PROJECTS} />
        <Section title={'Education'} data={resumeData?.education} dataType={rules.EDUCATION} /> 
        <Section title={'Technology and Skills'} data={resumeData?.skills} dataType={rules.SKILLS} />
      </View>
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
