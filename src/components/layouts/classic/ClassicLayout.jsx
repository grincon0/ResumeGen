import React from 'react'
import Header from '../../Header/Header';
import Section from '../../Section/Section';
import rules from '../../../rules/dataTypes';

const ClassicLayout = ({ resumeData }) => {
  return (
    <div className="c-wrapper classic">
      <header>
        <Header contactData={resumeData?.contact} />
      </header>
      <main>
        <Section title={'Employment'} data={resumeData?.companies} dataType={rules.WORK} />
        <Section title={'Education'} data={resumeData?.education} dataType={rules.EDUCATION} /> 
        <Section title={'Projects'} data={resumeData?.projects} dataType={rules.PROJECTS} />
        <Section title={'Skills'} data={resumeData?.skills} dataType={rules.SKILLS} />
{/*     <Section title={'Projects'} data={resumeData?.projects} />
        <Section title={'Education'} data={resumeData?.education} /> */}
      </main>
    </div>
  );
};

export default ClassicLayout;
