import React from 'react'
import Header from '../../Header/Header';
import Section from '../../Section/Section';

const ClassicLayout = ({ resumeData }) => {



  console.log('json data', resumeData);

  console.log('json data companies', resumeData.companies);
  console.log('json data contact', resumeData.contact);
  console.log('json data skills', resumeData.skills);
  console.log('json data projets', resumeData.projects);
  console.log('json data education', resumeData.education);

  return (
    <div className="c-wrapper">
      <header>
        <Header contactData={resumeData?.contact} />
      </header>
      <main>
        <Section title={'Employment'} data={resumeData.companies} />
{/*         <Section title={'Projects'} data={resumeData?.projects} />
        <Section title={'Education'} data={resumeData?.education} /> */}
      </main>
    </div>
  );
};

export default ClassicLayout;
